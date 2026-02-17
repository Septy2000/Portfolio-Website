import { ComplexNumber } from "./math";

export interface Parameters {
    algorithm: "mandelbrot" | "julia" | "perlin";
    width: string;
    height: string;
    maxIterations: string;
    valueOfC: ComplexNumber;
    customCRealValue: string;
    customCImaginaryValue: string;
    customCValueSelected: boolean;
    scale: string;
    zoomOut: string;
    customSeed: string;
    seed: string;
}

export interface TypedParameters {
    algorithm: "mandelbrot" | "julia" | "perlin";
    width: number;
    height: number;
    maxIterations: number;
    valueOfC: ComplexNumber;
    customCRealValue: number;
    customCImaginaryValue: number;
    customCValueSelected: boolean;
    scale: number;
    zoomOut: number;
    customSeed: number;
    seed: number;
}

export interface ColorModeParameters {
    colorMode: "smooth" | "rgb" | "random" | "palette";
    smoothColoring: boolean;
    colorIntensity: string;
    rgbWeights: { r: string; g: string; b: string };
    numberOfRandomColors: string;
    palette: string;
}

export interface TypedColorModeParameters {
    colorMode: "smooth" | "rgb" | "random" | "palette";
    smoothColoring: boolean;
    colorIntensity: number;
    rgbWeights: { r: number; g: number; b: number };
    numberOfRandomColors: number;
    palette: string;
}

export interface ParametersContextType {
    parameters: Parameters;
    setParameters: (parameters: Parameters) => void;
    colorModeParameters: ColorModeParameters;
    setColorModeParameters: (parameters: ColorModeParameters) => void;
    typedParameters: TypedParameters;
    typedColorModeParameters: TypedColorModeParameters;
}
