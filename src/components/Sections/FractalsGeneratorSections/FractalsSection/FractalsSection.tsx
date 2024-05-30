import * as Styled from "./FractalsSection.styled";
import React, { useEffect, useRef } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import { randomWithinBounds } from "@/utils/random";
export default function FractalsSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const { typedParameters, typedColorModeParameters } = useParameters();

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

                let iterationsReached = mandelbrotIterationCalculator(
                    complexPoint,
                    typedParameters.maxIterations
                );

                columnValues.push(iterationsReached);
            }

            drawColumn(column, columnValues);
        }
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
