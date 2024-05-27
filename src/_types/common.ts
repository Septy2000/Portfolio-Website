import { ComplexNumber } from "./math";

export interface DefaultParameters {
    algorithm: "mandelbrot" | "julia" | "perlin";
    width: number;
    height: number;
}

export interface ColorModeParameters {
    colorMode: "smooth" | "rgb" | "random";
    colorIntensity: number;
    rgbWeights: { r: number; g: number; b: number };
    numberOfRandomColors: number;
}

export interface MandelbrotParameters {
    maxIterations: number;
}

export interface JuliaParameters extends MandelbrotParameters {
    valueOfC: ComplexNumber;
}

export interface PerlinNoiseParameters {
    scale: number;
    zoomOut: number;
    seed: string;
    currentSeed: string;
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
}
