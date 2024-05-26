import * as Styled from "./FractalsSection.styled";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import Canvas from "../canvas/Canvas";
import { useState } from "react";
import { Parameters } from "@/_types/datamodels";
import React, { useEffect, useRef } from "react";
import { ComplexNumber, ComplexPlaneBoundary } from "@/_types/math";
import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";

export default function FractalsSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // Default parameters
    /*
        algorithm (default mandelbrot)
        width (default 800)
        height (default 600)
    */

    // Mandelbrot params
    /*
        reset / undo zoom buttons
        color mode: {
            smooth (default selected) -> color intensity (default 1)
            rgb -> R G B weights (default 1 1 1)
            random -> number of random colors (default 16)
        }
        iterations (default 500)

    */

    // Julia params
    /*
        reset / undo zoom buttons
        color mode: {
            smooth (default selected) -> color intensity (default 1)
            rgb -> R G B weights (default 1 1 1)
            random -> number of random colors (default 16)
        }
        iterations (default 500)
        value of c (default any)
    */

    // Perlin params
    /*
        color mode: {
            smooth (default selected) -> color intensity (default 3)
            rgb -> R G B weights (default 1 1 1)
        }
        scale (default 1)
        zoom out (default 2)
        seed 
        current seed (show seed)
    */

    const parameters = {
        width: 240,
        height: 180,
        colorIntensity: 1,
        fractalType: "mandelbrot",
        maxIterations: 500,
    };

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

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            // resolution of canvas
            canvas.width = parameters.width;
            canvas.height = parameters.height;

            // actual size of canvas
            canvas.style.width = "800px";
            canvas.style.height = "600px";

            const ctx = canvas.getContext("2d");
            contextRef.current = ctx;
        }
    });

    function setupCanvas() {
        const canvas = canvasRef.current;

        if (canvas) {
            // resolution of canvas
            canvas.width = parameters.width;
            canvas.height = parameters.height;

            // actual size of canvas
            canvas.style.width = "800px";
            canvas.style.height = "600px";

            const ctx = canvas.getContext("2d");
            contextRef.current = ctx;
        }
    }

    function draw(column: number, row: number, iterations: number) {
        const ctx = contextRef.current;
        if (!ctx) return;

        ctx.fillStyle = getHSLColor(
            iterations,
            parameters.maxIterations,
            parameters.colorIntensity
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
        for (let column = 0; column < parameters.width; column++) {
            let columnValues: number[] = [];
            for (let row = 0; row < parameters.height; row++) {
                let complexPoint = complexPlanePoint(
                    column,
                    row,
                    complexPlaneBoundaries,
                    parameters.width,
                    parameters.height
                );

                let iterationsReached = mandelbrotIterationCalculator(
                    complexPoint,
                    parameters.maxIterations
                );

                columnValues.push(iterationsReached);
            }

            drawColumn(column, columnValues);
        }
    }

    return (
        <Styled.Container>
            <canvas ref={canvasRef} />
            <button onClick={generate}>Generate</button>
            {/* <ParametersMenu
                parameters={parameters}
                setParameters={setParameters}
            /> */}
        </Styled.Container>
    );
}
