import * as Styled from "./FractalsSection.styled";
import React, { useEffect, useRef } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import juliaIterationCalculator from "@/utils/algorithms/juliaFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import { randomWithinBounds } from "@/utils/random";
import * as noise from "@/utils/algorithms/perlinNoise";
export default function FractalsSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const {
        parameters,
        setParameters,
        typedParameters,
        typedColorModeParameters,
    } = useParameters();

    let complexPlaneBoundaries: ComplexPlaneBoundary = {
        RE_MIN: -2,
        RE_MAX: 2,
        IM_MIN: -1.5,
        IM_MAX: 1.5,
    };
    let randomColorsList: number[] = [];

    // Scaling factor for taking into account resolution difference between the actual canvas
    // and the displayed canvas
    let scalingFactor = 1;

    function setupCanvas() {
        const canvas = canvasRef.current;

        if (canvas) {
            // resolution of canvas
            canvas.width = typedParameters.width;
            canvas.height = typedParameters.height;

            const ctx = canvas.getContext("2d");
            contextRef.current = ctx;
        }
    }

    // generate a canvas image on first load
    useEffect(() => {
        generate();
    }, []);

    function drawColumn(column: number, columnValues: number[]) {
        if (!canvasRef.current) return;

        for (let row = 0; row < canvasRef.current.height; row++) {
            draw(column, row, columnValues[row]);
        }
    }

    function draw(column: number, row: number, iterations: number) {
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
                    randomColorsList
                );
                break;
        }

        let rect_width = scalingFactor < 1 ? 1 / scalingFactor : 1;
        let rect_height = scalingFactor < 1 ? 1 / scalingFactor : 1;
        ctx.fillRect(column, row, rect_width, rect_height);
    }

    function generate() {
        setupCanvas();
        randomColorsList = new Array(
            typedColorModeParameters.numberOfRandomColors
        )
            .fill(0)
            .map((_) => randomWithinBounds(0, 360));
        if (typedParameters.algorithm !== "perlin") {
            generateMandelbrotAndJulia();
        } else {
            generatePerlin();
        }
    }

    function generateMandelbrotAndJulia() {
        for (let column = 0; column < typedParameters.width; column++) {
            let columnValues: number[] = [];
            for (let row = 0; row < typedParameters.height; row++) {
                let complexPoint = complexPlanePoint(
                    column,
                    row,
                    complexPlaneBoundaries,
                    typedParameters.width,
                    typedParameters.height
                );
                let iterationsReached = 0;
                if (typedParameters.algorithm === "mandelbrot") {
                    iterationsReached = mandelbrotIterationCalculator(
                        complexPoint,
                        typedParameters.maxIterations
                    );
                } else {
                    const selectedComplexNumber =
                        typedParameters.customCValueSelected
                            ? {
                                  x: typedParameters.customCRealValue,
                                  y: typedParameters.customCImaginaryValue,
                              }
                            : typedParameters.valueOfC;
                    iterationsReached = juliaIterationCalculator(
                        complexPoint,
                        selectedComplexNumber,
                        typedParameters.maxIterations
                    );
                }

                columnValues.push(iterationsReached);
            }

            drawColumn(column, columnValues);
        }
    }

    function generatePerlin() {
        if (Number.isNaN(typedParameters.customSeed)) {
            let perlinNoiseSeed = randomWithinBounds(
                Number.MIN_SAFE_INTEGER,
                Number.MAX_SAFE_INTEGER
            );
            setParameters({
                ...parameters,
                seed: String(perlinNoiseSeed),
            });
            // Set the perlin noise seed
            noise.seed(perlinNoiseSeed);
        } else {
            parameters.seed = String(typedParameters.customSeed);
            noise.seed(typedParameters.customSeed);
        }

        let columns = Math.floor(typedParameters.width / typedParameters.scale);
        let rows = Math.floor(typedParameters.height / typedParameters.scale);

        // Add variance on x and y axes, so the perlin noise is different
        let xChange;
        let yChange;

        let zoomOutFactor = typedParameters.zoomOut / 100;
        for (let col = 0; col < columns; col++) {
            xChange = 0;
            yChange = col * zoomOutFactor;
            for (let row = 0; row < rows; row++) {
                let pointValues = noise.computeEndPoints(
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

        let [x_end, y_end, perlin_noise] = pointValues;

        // Color the image based on the user selection
        if (typedColorModeParameters.colorMode === "smooth") {
            // Get the absolute value of perlin noise and multiply by 360 the number is in hue range
            ctx.strokeStyle = `hsl(${
                Math.abs(perlin_noise) *
                360 *
                typedColorModeParameters.colorIntensity
            }, 100%, 50%)`;
        } else {
            // Multiply each value by 255 to get a value in RGB range
            let abs_noise = Math.abs(perlin_noise);
            ctx.strokeStyle = `rgb(${
                abs_noise * typedColorModeParameters.rgbWeights.r * 255
            },${abs_noise * typedColorModeParameters.rgbWeights.g * 255},${
                abs_noise * typedColorModeParameters.rgbWeights.b * 255
            })`;
        }

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(col * typedParameters.scale, row * typedParameters.scale);
        ctx.lineTo(x_end, y_end);
        ctx.stroke();
    }

    return (
        <Styled.Container>
            <Styled.Canvas ref={canvasRef} />
            <Styled.MenuContainer>
                <ParametersMenu generate={generate} />
            </Styled.MenuContainer>
        </Styled.Container>
    );
}
