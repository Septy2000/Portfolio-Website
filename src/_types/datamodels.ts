import React from "react";

export type Parameters = {
    width: number;
    height: number;
    colorIntensity: number;
    fractalType: "mandelbrot" | "julia" | "perlin";
    maxIterations: number;
};

export type ParametersMenuProps = {
    parameters: Parameters;
    setParameters: React.Dispatch<React.SetStateAction<Parameters>>;
};
