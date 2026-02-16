import { useRef, useState, useEffect, MutableRefObject, RefObject } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import { TypedParameters } from "@/_types/common";
import {
    getHSLColor,
    getRGBColor,
    getRandomHSLColor,
    getNoiseHSLColor,
    getNoiseRGBColor,
} from "@/utils/color";
import { randomWithinBounds } from "@/utils/random";
import { createFractalWorker, createPerlinWorker } from "@/utils/workers/workers";
import { useParameters } from "../ParametersProvider/ParametersProvider";
import { DEFAULT_COMPLEX_PLANE_BOUNDARIES } from "./useCanvasZoom";

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
    const workerRef = useRef<Worker | null>(null);
    const columnIndicesRef = useRef<number[]>([]);
    const randomColorsRef = useRef<number[]>([]);
    const scalingFactorRef = useRef(1);

    const { parameters, setParameters, typedParameters, typedColorModeParameters } =
        useParameters();
    const localTypedParametersRef = useRef<TypedParameters>(typedParameters);
    const localTypedColorModeParametersRef = useRef(typedColorModeParameters);

    useEffect(() => {
        generateImageFromButton();
        return () => {
            if (workerRef.current) workerRef.current.terminate();
        };
    }, []);

    function initializeCanvas() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = localTypedParametersRef.current.width;
        canvas.height = localTypedParametersRef.current.height;
        contextRef.current = canvas.getContext("2d");
    }

    function drawFractalPixel(x: number, y: number, iterations: number) {
        const ctx = contextRef.current;
        if (!ctx) return;

        switch (localTypedColorModeParametersRef.current.colorMode) {
            case "smooth":
                ctx.fillStyle = getHSLColor(
                    iterations,
                    localTypedParametersRef.current.maxIterations,
                    localTypedColorModeParametersRef.current.colorIntensity
                );
                break;
            case "rgb":
                ctx.fillStyle = getRGBColor(
                    iterations,
                    localTypedParametersRef.current.maxIterations,
                    localTypedColorModeParametersRef.current.rgbWeights.r,
                    localTypedColorModeParametersRef.current.rgbWeights.g,
                    localTypedColorModeParametersRef.current.rgbWeights.b
                );
                break;
            case "random":
                ctx.fillStyle = getRandomHSLColor(
                    iterations,
                    localTypedParametersRef.current.maxIterations,
                    randomColorsRef.current
                );
                break;
        }

        ctx.fillRect(x, y, 1, 1);
    }

    function buildFractalWorkerMessage(column: number) {
        const params = localTypedParametersRef.current;
        return {
            column,
            algorithm: params.algorithm,
            boundaries: complexPlaneBoundariesRef.current,
            width: params.width,
            height: params.height,
            maxIterations: params.maxIterations,
            selectedComplexNumber:
                params.algorithm === "julia"
                    ? params.customCValueSelected
                        ? { x: params.customCRealValue, y: params.customCImaginaryValue }
                        : params.valueOfC
                    : null,
        };
    }

    function drawFractalColumn(column: number, columnValues: number[]) {
        if (!canvasRef.current || !isGeneratingRef.current) return;

        const nextColumn = columnIndicesRef.current.pop();
        if (nextColumn !== undefined) {
            workerRef.current?.postMessage(buildFractalWorkerMessage(nextColumn));
        } else {
            setIsImageGenerated(true);
            isGeneratingRef.current = false;
        }

        for (let row = 0; row < localTypedParametersRef.current.height; row++) {
            drawFractalPixel(column, row, columnValues[row]);
        }
    }

    function generateFractal() {
        if (workerRef.current) workerRef.current.terminate();

        columnIndicesRef.current = Array.from(
            { length: localTypedParametersRef.current.width },
            (_, i) => i
        ).reverse();

        workerRef.current = createFractalWorker();

        workerRef.current.onmessage = (event) => {
            drawFractalColumn(event.data.column, event.data.columnValues);
        };

        const initialData = buildFractalWorkerMessage(columnIndicesRef.current.pop()!);
        workerRef.current.postMessage(initialData);
    }

    function generatePerlinNoise() {
        if (workerRef.current) workerRef.current.terminate();

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

        workerRef.current = createPerlinWorker();
        workerRef.current.onmessage = (event) => {
            drawPerlinColumn(
                event.data.columnIndex,
                numberOfRowsAfterScale,
                event.data.columnValues
            );
        };

        const initialData = {
            columnIndex: columnIndicesRef.current.pop(),
            numberOfRows: numberOfRowsAfterScale,
            scale: localTypedParametersRef.current.scale,
            zoomOutFactor: localTypedParametersRef.current.zoomOut / 100,
            isInitialising: true,
            seed: localTypedParametersRef.current.seed,
        };
        workerRef.current.postMessage(initialData);
    }

    function drawPerlinColumn(
        columnIndex: number,
        numberOfRowsAfterScale: number,
        columnValues: number[][]
    ) {
        if (!canvasRef.current || !isGeneratingRef.current) return;

        const nextColumn = columnIndicesRef.current.pop();
        if (nextColumn !== undefined) {
            const data = {
                columnIndex: nextColumn,
                numberOfRows: numberOfRowsAfterScale,
                scale: localTypedParametersRef.current.scale,
                zoomOutFactor: localTypedParametersRef.current.zoomOut / 100,
            };
            workerRef.current?.postMessage(data);
        } else {
            setIsImageGenerated(true);
            isGeneratingRef.current = false;
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

    function generateImageFromButton() {
        localTypedParametersRef.current = typedParameters;
        localTypedColorModeParametersRef.current = typedColorModeParameters;

        initializeCanvas();

        resetZoomHistoryRef.current();

        complexPlaneBoundariesRef.current = DEFAULT_COMPLEX_PLANE_BOUNDARIES;
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

        if (localTypedParametersRef.current.algorithm !== "perlin") {
            randomColorsRef.current = Array.from(
                { length: localTypedColorModeParametersRef.current.numberOfRandomColors },
                () => randomWithinBounds(0, 360)
            );
            generateFractal();
        } else {
            generatePerlinNoise();
        }
    }

    function stopImageGeneration() {
        if (workerRef.current) workerRef.current.terminate();
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
        stopImageGeneration,
    };
}
