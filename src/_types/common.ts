import { ComplexNumber } from "./math";

export interface Parameters {
    algorithm: "mandelbrot" | "julia" | "perlin";
    width: string;
    height: string;
    maxIterations: string;
    valueOfC: ComplexNumber;
    scale: string;
    zoomOut: string;
    seed: string;
}

export interface ColorModeParameters {
    colorMode: "smooth" | "rgb" | "random";
    colorIntensity: string;
    rgbWeights: { r: string; g: string; b: string };
    numberOfRandomColors: string;
}

// export interface InputParametersError {
//     width: boolean;
//     height: boolean;
//     maxIterations: boolean;
//     intensity: boolean;
//     r: boolean;
//     g: boolean;
//     b: boolean;
//     scale: boolean;
//     zoomOut: boolean;
//     randomColors: boolean;
// }

export interface ParametersContextType {
    parameters: Parameters;
    setParameters: (parameters: Parameters) => void;
    colorModeParameters: ColorModeParameters;
    setColorModeParameters: (parameters: ColorModeParameters) => void;
}
