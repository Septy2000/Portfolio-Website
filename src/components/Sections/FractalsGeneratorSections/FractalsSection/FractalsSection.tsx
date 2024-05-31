import * as Styled from "./FractalsSection.styled";
import React, { useEffect, useRef, useState } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import { randomWithinBounds } from "@/utils/random";
import * as noise from "@/utils/algorithms/perlinNoise";
import { createMandelbrotWorker, createJuliaWorker } from "@/utils/workers/workers";

export default function FractalsSection() {
    const [isImageGenerated, setIsImageGenerated] = useState(true);
    const isGeneratingRef = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const workerRef = useRef<Worker | null>(null);
    const columnIndicesRef = useRef<number[]>([]);
    const randomColorsRef = useRef<number[]>([]);

    const { parameters, setParameters, typedParameters, typedColorModeParameters } =
        useParameters();

    const complexPlaneBoundaries: ComplexPlaneBoundary = {
        RE_MIN: -2,
        RE_MAX: 2,
        IM_MIN: -1.5,
        IM_MAX: 1.5,
    };

    function initializeCanvas() {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = typedParameters.width;
            canvas.height = typedParameters.height;
            contextRef.current = canvas.getContext("2d");
        }
    }

    function drawPixel(x: number, y: number, iterations: number) {
        const ctx = contextRef.current;
        if (!ctx) return;

        switch (typedColorModeParameters.colorMode) {
            case "smooth":
                ctx.fillStyle = getHSLColor(
                    iterations,
                    typedParameters.maxIterations,
                    typedColorModeParameters.colorIntensity
                );
                break;
            case "rgb":
                ctx.fillStyle = getRGBColor(
                    iterations,
                    typedParameters.maxIterations,
                    typedColorModeParameters.rgbWeights.r,
                    typedColorModeParameters.rgbWeights.g,
                    typedColorModeParameters.rgbWeights.b
                );
                break;
            case "random":
                ctx.fillStyle = getRandomHSLColor(
                    iterations,
                    typedParameters.maxIterations,
                    randomColorsRef.current
                );
                break;
        }

        ctx.fillRect(x, y, 1, 1);
    }

    function drawColumn(column: number, columnValues: number[]) {
        if (!canvasRef.current || !isGeneratingRef.current) return;

        if (columnIndicesRef.current.length > 0) {
            const nextColumn = columnIndicesRef.current.pop();
            if (nextColumn !== undefined) {
                const data = {
                    column: nextColumn,
                    boundaries: complexPlaneBoundaries,
                    width: typedParameters.width,
                    height: typedParameters.height,
                    maxIterations: typedParameters.maxIterations,
                    selectedComplexNumber:
                        typedParameters.algorithm === "julia"
                            ? typedParameters.customCValueSelected
                                ? {
                                      x: typedParameters.customCRealValue,
                                      y: typedParameters.customCImaginaryValue,
                                  }
                                : typedParameters.valueOfC
                            : null,
                };
                workerRef.current?.postMessage(data);
            }
        } else {
            setIsImageGenerated(true);
            isGeneratingRef.current = false;
        }

        for (let y = 0; y < canvasRef.current.height; y++) {
            drawPixel(column, y, columnValues[y]);
        }
    }

    function generateFractal() {
        if (workerRef.current) workerRef.current.terminate();

        workerRef.current =
            typedParameters.algorithm === "mandelbrot"
                ? createMandelbrotWorker()
                : createJuliaWorker();

        workerRef.current.onmessage = (event) => {
            drawColumn(event.data.column, event.data.columnValues);
        };

        const initialData = {
            column: columnIndicesRef.current.pop(),
            boundaries: complexPlaneBoundaries,
            width: typedParameters.width,
            height: typedParameters.height,
            maxIterations: typedParameters.maxIterations,
            selectedComplexNumber:
                typedParameters.algorithm === "julia"
                    ? typedParameters.customCValueSelected
                        ? {
                              x: typedParameters.customCRealValue,
                              y: typedParameters.customCImaginaryValue,
                          }
                        : typedParameters.valueOfC
                    : null,
        };
        workerRef.current.postMessage(initialData);
    }

    function generatePerlinNoise() {
        const seed = isNaN(typedParameters.customSeed)
            ? randomWithinBounds(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
            : typedParameters.customSeed;

        setParameters({
            ...parameters,
            seed: String(seed),
        });

        noise.seed(seed);

        const columns = Math.floor(typedParameters.width / typedParameters.scale);
        const rows = Math.floor(typedParameters.height / typedParameters.scale);
        const zoomOutFactor = typedParameters.zoomOut / 100;

        for (let col = 0; col < columns; col++) {
            let xChange = 0;
            let yChange = col * zoomOutFactor;
            for (let row = 0; row < rows; row++) {
                const pointValues = noise.computeEndPoints(
                    col,
                    row,
                    typedParameters.scale,
                    xChange,
                    yChange
                );
                drawPerlinPoint(row, col, pointValues);
                xChange += zoomOutFactor;
            }
        }
    }

    function drawPerlinPoint(row: number, col: number, pointValues: number[]) {
        const ctx = contextRef.current;
        if (!ctx) return;

        const [xEnd, yEnd, perlinNoise] = pointValues;
        const absNoise = Math.abs(perlinNoise);

        ctx.strokeStyle =
            typedColorModeParameters.colorMode === "smooth"
                ? `hsl(${absNoise * 360 * typedColorModeParameters.colorIntensity}, 100%, 50%)`
                : `rgb(${absNoise * typedColorModeParameters.rgbWeights.r * 255},${
                      absNoise * typedColorModeParameters.rgbWeights.g * 255
                  },${absNoise * typedColorModeParameters.rgbWeights.b * 255})`;

        ctx.beginPath();
        ctx.moveTo(col * typedParameters.scale, row * typedParameters.scale);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
    }

    function generateImage() {
        initializeCanvas();
        setIsImageGenerated(false);
        isGeneratingRef.current = true;

        columnIndicesRef.current = Array.from(
            { length: typedParameters.width },
            (_, i) => i
        ).reverse();
        randomColorsRef.current = Array.from(
            { length: typedColorModeParameters.numberOfRandomColors },
            () => randomWithinBounds(0, 360)
        );

        if (typedParameters.algorithm !== "perlin") {
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

    useEffect(() => {
        generateImage();
        return () => {
            if (workerRef.current) workerRef.current.terminate();
        };
    }, []);

    return (
        <Styled.Container>
            <Styled.Canvas ref={canvasRef} />
            <Styled.MenuContainer>
                <ParametersMenu
                    generate={generateImage}
                    stopGeneration={stopImageGeneration}
                    isImageGenerated={isImageGenerated}
                />
            </Styled.MenuContainer>
        </Styled.Container>
    );
}
