"use client";
import React, { useRef, useEffect } from "react";
import { getHSLColor, getRGBColor, getRandomHSLColor } from "@/utils/color";

export default function Canvas({
    width,
    height,
    generateImage,
    column,
    columnValues,
    maxIterations,
    colorIntensity,
    scalingFactor,
}: {
    width: number;
    height: number;
    generateImage: boolean;
    column: number;
    columnValues: number[];
    maxIterations: number;
    colorIntensity: number;
    scalingFactor: number;
}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            // resolution of canvas
            canvas.width = width;
            canvas.height = height;

            // actual size of canvas
            canvas.style.width = "800px";
            canvas.style.height = "600px";

            const ctx = canvas.getContext("2d");
            if (ctx) {
                contextRef.current = ctx;
            }
        }
    }, []);

    useEffect(() => {
        if (generateImage) {
            drawColumn(
                column,
                columnValues,
                maxIterations,
                colorIntensity,
                scalingFactor
            );
        }
    }, [generateImage]);

    function drawColumn(
        column: number,
        columnValues: number[],
        maxIterations: number,
        colorIntensity: number,
        scalingFactor: number
    ) {
        if (!canvasRef.current) return;

        for (let row = 0; row < canvasRef.current.height; row++) {
            draw(
                column,
                row,
                columnValues[row],
                maxIterations,
                colorIntensity,
                scalingFactor
            );
        }
    }

    function draw(
        column: number,
        row: number,
        iterations: number,
        maxIterations: number,
        colorIntensity: number,
        scalingFactor: number
    ) {
        const ctx = contextRef.current;
        if (!ctx) return;

        ctx.fillStyle = getHSLColor(iterations, maxIterations, colorIntensity);
        let rect_width = scalingFactor < 1 ? 1 / scalingFactor : 1;
        let rect_height = scalingFactor < 1 ? 1 / scalingFactor : 1;

        ctx.fillRect(column, row, rect_width, rect_height);
    }

    return <canvas ref={canvasRef} />;
}
