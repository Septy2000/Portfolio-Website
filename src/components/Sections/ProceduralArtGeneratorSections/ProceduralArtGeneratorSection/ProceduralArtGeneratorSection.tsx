"use client";
import * as Styled from "./ProceduralArtGeneratorSection.styled";
import React, { useEffect, useRef, useState } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import { randomWithinBounds } from "@/utils/random";
import GeneratorInformationSection from "@/components/Sections/ProceduralArtGeneratorSections/GeneratorInformationSection/GeneratorInformationSection";

import { createFractalWorker, createPerlinWorker } from "@/utils/workers/workers";
import { TypedParameters } from "@/_types/common";

const DEFAULT_COMPLEX_PLANE_BOUNDARIES: ComplexPlaneBoundary = {
    RE_MIN: -2,
    RE_MAX: 2,
    IM_MIN: -1.5,
    IM_MAX: 1.5,
};

export default function ProceduralArtGeneratorSection() {
    const [isImageGenerated, setIsImageGenerated] = useState(true);

    const isGeneratingRef = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const workerRef = useRef<Worker | null>(null);
    const columnIndicesRef = useRef<number[]>([]);
    const randomColorsRef = useRef<number[]>([]);

    const complexPlaneBoundariesRef = useRef<ComplexPlaneBoundary>(DEFAULT_COMPLEX_PLANE_BOUNDARIES);
    const isZoomingRef = useRef(false);
    const zoomHistory = useRef<ComplexPlaneBoundary[]>([]);
    const zoomStartCoordinatesRef = useRef<{ xStart: number; yStart: number } | null>(null);
    const canvasImageDataRef = useRef<ImageData | null>(null);
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseout", handleMouseOut);
        canvas.addEventListener("touchstart", handleMouseDown, { passive: false });
        canvas.addEventListener("touchmove", handleMouseMove, { passive: false });
        canvas.addEventListener("touchend", handleMouseUp);
        canvas.addEventListener("touchcancel", handleMouseOut);

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseout", handleMouseOut);
            canvas.removeEventListener("touchstart", handleMouseDown);
            canvas.removeEventListener("touchmove", handleMouseMove);
            canvas.removeEventListener("touchend", handleMouseUp);
            canvas.removeEventListener("touchcancel", handleMouseOut);
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

        ctx.strokeStyle =
            localTypedColorModeParametersRef.current.colorMode === "smooth"
                ? `hsl(${
                      absNoise * 360 * localTypedColorModeParametersRef.current.colorIntensity
                  }, 100%, 50%)`
                : `rgb(${absNoise * localTypedColorModeParametersRef.current.rgbWeights.r * 255},${
                      absNoise * localTypedColorModeParametersRef.current.rgbWeights.g * 255
                  },${absNoise * localTypedColorModeParametersRef.current.rgbWeights.b * 255})`;

        ctx.beginPath();
        ctx.moveTo(
            columnIndex * localTypedParametersRef.current.scale,
            rowIndex * localTypedParametersRef.current.scale
        );
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
    }

    function generateImageFromButton() {
        // Make a local copy of the parameters to avoid change of parameters while generating the image
        localTypedParametersRef.current = typedParameters;
        localTypedColorModeParametersRef.current = typedColorModeParameters;

        initializeCanvas();

        zoomHistory.current = [];

        // Reset complex plane boundaries and scaling factor
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

        //clear canvas
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

    function handleMouseDown(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (!canvasRef.current || localTypedParametersRef.current.algorithm === "perlin" || isGeneratingRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const xStart = (clientX - rect.left) * scalingFactorRef.current;
        const yStart = (clientY - rect.top) * scalingFactorRef.current;

        isZoomingRef.current = true;
        zoomStartCoordinatesRef.current = { xStart, yStart };

        canvasImageDataRef.current =
            contextRef.current?.getImageData(
                0,
                0,
                localTypedParametersRef.current.width,
                localTypedParametersRef.current.height
            ) || null;
    }

    function handleMouseMove(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (!canvasRef.current || !zoomStartCoordinatesRef.current || !isZoomingRef.current) return;

        const ctx = contextRef.current;
        if (!ctx || !canvasImageDataRef.current) return;

        const xStart = zoomStartCoordinatesRef.current.xStart;
        const yStart = zoomStartCoordinatesRef.current.yStart;

        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const xMouse = (clientX - rect.left) * scalingFactorRef.current;
        const yMouse = (clientY - rect.top) * scalingFactorRef.current;

        ctx.putImageData(canvasImageDataRef.current, 0, 0);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.strokeRect(
            xStart,
            yStart,
            (((xMouse > xStart ? 1 : -1) * 4) / 3) * Math.abs(yMouse - yStart),
            yMouse - yStart
        );
    }

    function handleMouseUp(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (!canvasRef.current || !zoomStartCoordinatesRef.current || !isZoomingRef.current) return;

        isZoomingRef.current = false;

        zoomHistory.current = [...zoomHistory.current, complexPlaneBoundariesRef.current];

        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
        const clientY = "changedTouches" in e ? e.changedTouches[0].clientY : e.clientY;

        const xStart = zoomStartCoordinatesRef.current.xStart;
        const yStart = zoomStartCoordinatesRef.current.yStart;

        const xMouse = (clientX - rect.left) * scalingFactorRef.current;
        const yMouse = (clientY - rect.top) * scalingFactorRef.current;

        const xEnd = xStart + (((xMouse > xStart ? 1 : -1) * 4) / 3) * Math.abs(yMouse - yStart);
        const yEnd = yMouse;

        const tempComplexPlaneBoundaries: ComplexPlaneBoundary = {
            RE_MIN: Math.min(reComplexPlanePoint(xStart), reComplexPlanePoint(xEnd)),
            RE_MAX: Math.max(reComplexPlanePoint(xStart), reComplexPlanePoint(xEnd)),
            IM_MIN: Math.min(imComplexPlanePoint(yStart), imComplexPlanePoint(yEnd)),
            IM_MAX: Math.max(imComplexPlanePoint(yStart), imComplexPlanePoint(yEnd)),
        };

        complexPlaneBoundariesRef.current = tempComplexPlaneBoundaries;

        generateImage();
    }

    function handleMouseOut() {
        if (!isZoomingRef.current || !canvasRef.current) return;

        isZoomingRef.current = false;
        if (canvasImageDataRef.current && contextRef.current) {
            contextRef.current.putImageData(canvasImageDataRef.current, 0, 0);
        }
    }

    function reComplexPlanePoint(x: number) {
        const { RE_MIN, RE_MAX } = complexPlaneBoundariesRef.current;
        return RE_MIN + (x / localTypedParametersRef.current.width) * (RE_MAX - RE_MIN);
    }

    function imComplexPlanePoint(y: number) {
        const { IM_MIN, IM_MAX } = complexPlaneBoundariesRef.current;
        return IM_MIN + (y / localTypedParametersRef.current.height) * (IM_MAX - IM_MIN);
    }

    function undoZoom() {
        const previousBoundaries = zoomHistory.current.pop();

        if (previousBoundaries) {
            complexPlaneBoundariesRef.current = previousBoundaries;
            generateImage();
        }
    }

    function resetZoom() {
        complexPlaneBoundariesRef.current = DEFAULT_COMPLEX_PLANE_BOUNDARIES;
        zoomHistory.current = [];
        generateImage();
    }

    return (
        <Styled.Container>
            <GeneratorInformationSection />
            <Styled.GeneratorContainer>
                <Styled.Canvas ref={canvasRef} />
                <Styled.MenuContainer>
                    <ParametersMenu
                        generate={generateImageFromButton}
                        stopGeneration={stopImageGeneration}
                        isImageGenerated={isImageGenerated}
                        undoZoom={undoZoom}
                        resetZoom={resetZoom}
                        areZoomButtonsDisabled={zoomHistory.current.length === 0}
                    />
                </Styled.MenuContainer>
            </Styled.GeneratorContainer>
        </Styled.Container>
    );
}
