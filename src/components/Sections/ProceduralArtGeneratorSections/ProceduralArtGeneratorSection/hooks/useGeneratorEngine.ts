import { useRef, useState, useEffect, MutableRefObject, RefObject } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import { TypedParameters, TypedColorModeParameters } from "@/_types/common";
import {
    getHSLColorRGBA,
    getRGBColorRGBA,
    getRandomHSLColorRGBA,
    getPaletteColorRGBA,
    getNewtonColorRGBA,
    PALETTES,
    getNoiseHSLColor,
    getNoiseRGBColor,
    type RGBA,
} from "@/utils/color";
import { randomWithinBounds } from "@/utils/random";
import { createFractalWorker, createPerlinWorker, createBuddhabrotWorker } from "@/utils/workers/workers";
import { useParameters } from "../ParametersProvider/ParametersProvider";
import { DEFAULT_COMPLEX_PLANE_BOUNDARIES, LYAPUNOV_DEFAULT_BOUNDARIES } from "./useCanvasZoom";

const MAX_WORKERS = 8;

export function useGeneratorEngine({
    canvasRef,
    contextRef,
    complexPlaneBoundariesRef,
    resetZoomHistoryRef,
}: {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    contextRef: MutableRefObject<CanvasRenderingContext2D | null>;
    complexPlaneBoundariesRef: MutableRefObject<ComplexPlaneBoundary>;
    resetZoomHistoryRef: MutableRefObject<() => void>;
}) {
    const [isImageGenerated, setIsImageGenerated] = useState(true);
    const isGeneratingRef = useRef(false);
    const workersRef = useRef<Worker[]>([]);
    const activeWorkersRef = useRef(0);
    const columnIndicesRef = useRef<number[]>([]);
    const randomColorsRef = useRef<number[]>([]);
    const imageDataRef = useRef<ImageData | null>(null);
    const scalingFactorRef = useRef(1);

    const { parameters, setParameters, typedParameters, typedColorModeParameters } =
        useParameters();
    const localTypedParametersRef = useRef<TypedParameters>(typedParameters);
    const localTypedColorModeParametersRef = useRef(typedColorModeParameters);

    useEffect(() => {
        generateImageFromButton();
        return () => {
            workersRef.current.forEach((w) => w.terminate());
        };
    }, []);

    function initializeCanvas() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = localTypedParametersRef.current.width;
        canvas.height = localTypedParametersRef.current.height;
        contextRef.current = canvas.getContext("2d");
    }

    function getFractalPixelRGBA(iterations: number): RGBA {
        const params = localTypedParametersRef.current;
        const colorParams = localTypedColorModeParametersRef.current;

        switch (colorParams.colorMode) {
            case "smooth":
                return getHSLColorRGBA(iterations, params.maxIterations, colorParams.colorIntensity, colorParams.cyclicColoring);
            case "rgb":
                return getRGBColorRGBA(
                    iterations,
                    params.maxIterations,
                    colorParams.rgbWeights.r,
                    colorParams.rgbWeights.g,
                    colorParams.rgbWeights.b
                );
            case "random":
                return getRandomHSLColorRGBA(iterations, params.maxIterations, randomColorsRef.current);
            case "palette":
                return getPaletteColorRGBA(
                    iterations,
                    params.maxIterations,
                    PALETTES[colorParams.palette] || PALETTES.fire
                );
        }
    }

    function buildFractalWorkerMessage(column: number) {
        const params = localTypedParametersRef.current;
        const colorParams = localTypedColorModeParametersRef.current;
        return {
            column,
            algorithm: params.algorithm,
            boundaries: complexPlaneBoundariesRef.current,
            width: params.width,
            height: params.height,
            maxIterations: params.maxIterations,
            smoothColoring: colorParams.smoothColoring,
            bailoutSq: colorParams.smoothColoring ? 65536 : 4,
            selectedComplexNumber:
                params.algorithm === "julia"
                    ? params.customCValueSelected
                        ? { x: params.customCRealValue, y: params.customCImaginaryValue }
                        : params.valueOfC
                    : null,
            newtonDegree: params.newtonDegree,
            lyapunovSequence: params.lyapunovSequence,
            phoenixP: params.phoenixP,
            phoenixQ: params.phoenixQ,
        };
    }

    function drawFractalColumn(worker: Worker, column: number, columnValues: number[], rootIndices: number[] | null) {
        if (!canvasRef.current || !isGeneratingRef.current) return;

        const nextColumn = columnIndicesRef.current.pop();
        if (nextColumn !== undefined) {
            worker.postMessage(buildFractalWorkerMessage(nextColumn));
        } else {
            activeWorkersRef.current--;
            if (activeWorkersRef.current === 0) {
                setIsImageGenerated(true);
                isGeneratingRef.current = false;
            }
        }

        const imageData = imageDataRef.current;
        if (!imageData) return;

        const params = localTypedParametersRef.current;
        const width = params.width;
        const height = params.height;
        const data = imageData.data;
        const isNewton = params.algorithm === "newton";

        for (let row = 0; row < height; row++) {
            const rgba = isNewton && rootIndices
                ? getNewtonColorRGBA(columnValues[row], params.maxIterations, rootIndices[row], params.newtonDegree)
                : getFractalPixelRGBA(columnValues[row]);
            const index = (row * width + column) * 4;
            data[index] = rgba[0];
            data[index + 1] = rgba[1];
            data[index + 2] = rgba[2];
            data[index + 3] = rgba[3];
        }

        contextRef.current?.putImageData(imageData, 0, 0);
    }

    function generateFractal() {
        workersRef.current.forEach((w) => w.terminate());
        workersRef.current = [];

        columnIndicesRef.current = Array.from(
            { length: localTypedParametersRef.current.width },
            (_, i) => i
        ).reverse();

        const numWorkers = Math.min(
            navigator.hardwareConcurrency || 4,
            MAX_WORKERS,
            columnIndicesRef.current.length
        );
        activeWorkersRef.current = numWorkers;

        for (let i = 0; i < numWorkers; i++) {
            const worker = createFractalWorker();
            workersRef.current.push(worker);
            worker.onmessage = (event: MessageEvent) => {
                drawFractalColumn(worker, event.data.column, event.data.columnValues, event.data.rootIndices);
            };
            worker.postMessage(buildFractalWorkerMessage(columnIndicesRef.current.pop()!));
        }
    }

    function generatePerlinNoise() {
        workersRef.current.forEach((w) => w.terminate());
        workersRef.current = [];

        const numberOfColumnsAfterScale = Math.floor(
            localTypedParametersRef.current.width / localTypedParametersRef.current.scale
        );
        const numberOfRowsAfterScale = Math.floor(
            localTypedParametersRef.current.height / localTypedParametersRef.current.scale
        );

        columnIndicesRef.current = Array.from(
            { length: numberOfColumnsAfterScale },
            (_, i) => i
        ).reverse();

        const numWorkers = Math.min(
            navigator.hardwareConcurrency || 4,
            MAX_WORKERS,
            columnIndicesRef.current.length
        );
        activeWorkersRef.current = numWorkers;

        for (let i = 0; i < numWorkers; i++) {
            const worker = createPerlinWorker();
            workersRef.current.push(worker);
            worker.onmessage = (event: MessageEvent) => {
                drawPerlinColumn(
                    worker,
                    event.data.columnIndex,
                    numberOfRowsAfterScale,
                    event.data.columnValues
                );
            };
            worker.postMessage({
                columnIndex: columnIndicesRef.current.pop(),
                numberOfRows: numberOfRowsAfterScale,
                scale: localTypedParametersRef.current.scale,
                zoomOutFactor: localTypedParametersRef.current.zoomOut / 100,
                isInitialising: true,
                seed: localTypedParametersRef.current.seed,
            });
        }
    }

    function drawPerlinColumn(
        worker: Worker,
        columnIndex: number,
        numberOfRowsAfterScale: number,
        columnValues: number[][]
    ) {
        if (!canvasRef.current || !isGeneratingRef.current) return;

        const nextColumn = columnIndicesRef.current.pop();
        if (nextColumn !== undefined) {
            worker.postMessage({
                columnIndex: nextColumn,
                numberOfRows: numberOfRowsAfterScale,
                scale: localTypedParametersRef.current.scale,
                zoomOutFactor: localTypedParametersRef.current.zoomOut / 100,
            });
        } else {
            activeWorkersRef.current--;
            if (activeWorkersRef.current === 0) {
                setIsImageGenerated(true);
                isGeneratingRef.current = false;
            }
        }

        for (let rowIndex = 0; rowIndex < numberOfRowsAfterScale; rowIndex++) {
            drawPerlinPixel(columnIndex, rowIndex, columnValues[rowIndex]);
        }
    }

    function drawPerlinPixel(columnIndex: number, rowIndex: number, pointValues: number[]) {
        const ctx = contextRef.current;
        if (!ctx) return;

        const [xEnd, yEnd, perlinNoise] = pointValues;
        const absNoise = Math.abs(perlinNoise);

        const colorParams = localTypedColorModeParametersRef.current;
        ctx.strokeStyle =
            colorParams.colorMode === "smooth"
                ? getNoiseHSLColor(absNoise, colorParams.colorIntensity)
                : getNoiseRGBColor(
                      absNoise,
                      colorParams.rgbWeights.r,
                      colorParams.rgbWeights.g,
                      colorParams.rgbWeights.b
                  );

        ctx.beginPath();
        ctx.moveTo(
            columnIndex * localTypedParametersRef.current.scale,
            rowIndex * localTypedParametersRef.current.scale
        );
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
    }

    function generateBuddhabrot() {
        workersRef.current.forEach((w) => w.terminate());
        workersRef.current = [];

        const params = localTypedParametersRef.current;
        const { width, height, maxIterations, buddhabrotSamples } = params;

        const masterDensity = new Float64Array(width * height);
        const numWorkers = Math.min(navigator.hardwareConcurrency || 4, MAX_WORKERS);
        const batchSize = Math.ceil(buddhabrotSamples / numWorkers);
        activeWorkersRef.current = numWorkers;

        for (let i = 0; i < numWorkers; i++) {
            const worker = createBuddhabrotWorker();
            workersRef.current.push(worker);
            worker.onmessage = (event: MessageEvent) => {
                const workerDensity: number[] = event.data.densityBuffer;
                for (let j = 0; j < workerDensity.length; j++) {
                    masterDensity[j] += workerDensity[j];
                }

                activeWorkersRef.current--;
                if (activeWorkersRef.current === 0) {
                    // Normalize and render
                    let maxDensity = 0;
                    for (let j = 0; j < masterDensity.length; j++) {
                        if (masterDensity[j] > maxDensity) maxDensity = masterDensity[j];
                    }

                    if (maxDensity > 0) {
                        const imageData = imageDataRef.current;
                        if (imageData) {
                            const data = imageData.data;
                            for (let j = 0; j < masterDensity.length; j++) {
                                // Map density to iteration count for existing color pipeline
                                const normalized = (masterDensity[j] / maxDensity) * (maxIterations - 1);
                                const rgba = getFractalPixelRGBA(normalized);
                                const idx = j * 4;
                                data[idx] = rgba[0];
                                data[idx + 1] = rgba[1];
                                data[idx + 2] = rgba[2];
                                data[idx + 3] = rgba[3];
                            }
                            contextRef.current?.putImageData(imageData, 0, 0);
                        }
                    }

                    setIsImageGenerated(true);
                    isGeneratingRef.current = false;
                }
            };
            worker.postMessage({
                batchSize,
                boundaries: complexPlaneBoundariesRef.current,
                width,
                height,
                maxIterations,
            });
        }
    }

    function generateImageFromButton() {
        localTypedParametersRef.current = typedParameters;
        localTypedColorModeParametersRef.current = typedColorModeParameters;

        initializeCanvas();

        resetZoomHistoryRef.current();

        complexPlaneBoundariesRef.current =
            localTypedParametersRef.current.algorithm === "lyapunov"
                ? LYAPUNOV_DEFAULT_BOUNDARIES
                : DEFAULT_COMPLEX_PLANE_BOUNDARIES;
        scalingFactorRef.current = canvasRef.current
            ? localTypedParametersRef.current.width /
              canvasRef.current.getBoundingClientRect().width
            : 1;

        const seed = isNaN(localTypedParametersRef.current.customSeed)
            ? randomWithinBounds(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
            : localTypedParametersRef.current.customSeed;

        setParameters({
            ...parameters,
            seed: String(seed),
        });

        generateImage();
    }

    function generateImage() {
        setIsImageGenerated(false);
        isGeneratingRef.current = true;

        if (contextRef.current && canvasRef.current) {
            contextRef.current.clearRect(
                0,
                0,
                localTypedParametersRef.current.width,
                localTypedParametersRef.current.height
            );
        }

        const algo = localTypedParametersRef.current.algorithm;
        if (algo === "perlin") {
            generatePerlinNoise();
        } else {
            const { width, height } = localTypedParametersRef.current;
            imageDataRef.current = contextRef.current?.createImageData(width, height) || null;
            randomColorsRef.current = Array.from(
                { length: localTypedColorModeParametersRef.current.numberOfRandomColors },
                () => randomWithinBounds(0, 360)
            );
            if (algo === "buddhabrot") {
                generateBuddhabrot();
            } else {
                generateFractal();
            }
        }
    }

    function generateFromURLParams(params: TypedParameters, colorParams: TypedColorModeParameters) {
        localTypedParametersRef.current = params;
        localTypedColorModeParametersRef.current = colorParams;
        initializeCanvas();
        scalingFactorRef.current = canvasRef.current
            ? params.width / canvasRef.current.getBoundingClientRect().width
            : 1;
        generateImage();
    }

    function stopImageGeneration() {
        workersRef.current.forEach((w) => w.terminate());
        workersRef.current = [];
        setIsImageGenerated(true);
        isGeneratingRef.current = false;
    }

    return {
        isImageGenerated,
        isGeneratingRef,
        localTypedParametersRef,
        scalingFactorRef,
        generateImage,
        generateImageFromButton,
        generateFromURLParams,
        stopImageGeneration,
    };
}
