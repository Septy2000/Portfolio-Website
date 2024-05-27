import * as Styled from "./FractalsSection.styled";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function FractalsSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const {
        defaultParameters,
        mandelbrotParameters,
        juliaParameters,
        perlinNoiseParameters,
        colorModeParameters,
    } = useParameters();

    const [isGenerated, setIsGenerated] = useState(false);

    let complexPlaneBoundaries: ComplexPlaneBoundary = {
        RE_MIN: -2,
        RE_MAX: 2,
        IM_MIN: -1.5,
        IM_MAX: 1.5,
    };

    // Scaling factor for taking into account resolution difference between the actual canvas
    // and the displayed canvas
    let scalingFactor = 1;

    function setupCanvas() {
        const canvas = canvasRef.current;

        if (canvas) {
            // resolution of canvas
            canvas.width = defaultParameters.width;
            canvas.height = defaultParameters.height;

            // actual size of canvas
            canvas.style.width = "800px";
            canvas.style.height = "600px";

            const ctx = canvas.getContext("2d");
            contextRef.current = ctx;
        }
    }

    // redender the canvas on first load
    useEffect(() => {
        generate();
    }, []);

    function draw(column: number, row: number, iterations: number) {
        const ctx = contextRef.current;
        if (!ctx) return;

        ctx.fillStyle = getHSLColor(
            iterations,
            mandelbrotParameters.maxIterations,
            colorModeParameters.colorIntensity
        );
        let rect_width = scalingFactor < 1 ? 1 / scalingFactor : 1;
        let rect_height = scalingFactor < 1 ? 1 / scalingFactor : 1;
        ctx.fillRect(column, row, rect_width, rect_height);
    }

    function drawColumn(column: number, columnValues: number[]) {
        if (!canvasRef.current) return;

        for (let row = 0; row < canvasRef.current.height; row++) {
            draw(column, row, columnValues[row]);
        }
    }

    function generate() {
        setupCanvas();
        for (let column = 0; column < defaultParameters.width; column++) {
            let columnValues: number[] = [];
            for (let row = 0; row < defaultParameters.height; row++) {
                let complexPoint = complexPlanePoint(
                    column,
                    row,
                    complexPlaneBoundaries,
                    defaultParameters.width,
                    defaultParameters.height
                );

                let iterationsReached = mandelbrotIterationCalculator(
                    complexPoint,
                    mandelbrotParameters.maxIterations
                );

                columnValues.push(iterationsReached);
            }

            drawColumn(column, columnValues);
        }
    }

    return (
        <Styled.Container>
            <canvas ref={canvasRef} />
            <ParametersMenu generate={generate} />
        </Styled.Container>
    );
}
