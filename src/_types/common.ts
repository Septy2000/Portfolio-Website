import { ComplexNumber } from "./math";

export interface DefaultParameters {
    algorithm: "mandelbrot" | "julia" | "perlin";
    width: string;
    height: string;
}

export interface ColorModeParameters {
    colorMode: "smooth" | "rgb" | "random";
    colorIntensity: string;
    rgbWeights: { r: string; g: string; b: string };
    numberOfRandomColors: string;
}

export interface MandelbrotParameters {
    maxIterations: string;
}

export interface JuliaParameters extends MandelbrotParameters {
    valueOfC: ComplexNumber;
}

export interface PerlinNoiseParameters {
    scale: string;
    zoomOut: string;
    seed: string;
}

export interface InputParametersError {
    width: boolean;
    height: boolean;
    maxIterations: boolean;
    intensity: boolean;
    r: boolean;
    g: boolean;
    b: boolean;
    scale: boolean;
    zoomOut: boolean;
    randomColors: boolean;
}

export interface ParametersContextType {
    defaultParameters: DefaultParameters;
    setDefaultParameters: (parameters: DefaultParameters) => void;
    mandelbrotParameters: MandelbrotParameters;
    setMandelbrotParameters: (parameters: MandelbrotParameters) => void;
    juliaParameters: JuliaParameters;
    setJuliaParameters: (parameters: JuliaParameters) => void;
    perlinNoiseParameters: PerlinNoiseParameters;
    setPerlinNoiseParameters: (parameters: PerlinNoiseParameters) => void;
    colorModeParameters: ColorModeParameters;
    setColorModeParameters: (parameters: ColorModeParameters) => void;
    inputParametersError: InputParametersError;
    setInputParametersError: (error: InputParametersError) => void;
}
