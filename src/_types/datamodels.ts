import React from "react";

export interface DefaultParameters {
    algorithm: "mandelbrot" | "julia" | "perlin";
    width: number;
    height: number;
}

export interface ColorModeParams {
    colorMode: "smooth" | "rgb" | "random";
    colorIntensity?: number;
    rgbWeights?: { r: number; g: number; b: number };
    numberOfRandomColors?: number;
}

export interface MandelbrotParams {
    reset: boolean;
    undoZoom: boolean;
    colorModeParams: ColorModeParams;
    iterations: number;
}

export interface JuliaParams extends MandelbrotParams {
    valueOfC: string;
}

export interface PerlinParams {
    colorModeParams: ColorModeParams;
    scale: number;
    zoomOut: number;
    seed: string;
    currentSeed: string;
}
