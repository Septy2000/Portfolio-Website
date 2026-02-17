import {
    Parameters,
    TypedParameters,
    ColorModeParameters,
    TypedColorModeParameters,
} from "@/_types/common";

export function convertParameters(params: Parameters): TypedParameters {
    return {
        algorithm: params.algorithm,
        width: parseInt(params.width),
        height: parseInt(params.height),
        maxIterations: parseInt(params.maxIterations),
        valueOfC: params.valueOfC,
        customCRealValue: parseFloat(params.customCRealValue),
        customCImaginaryValue: parseFloat(params.customCImaginaryValue),
        customCValueSelected: params.customCValueSelected,
        newtonDegree: parseInt(params.newtonDegree),
        lyapunovSequence: params.lyapunovSequence,
        phoenixP: parseFloat(params.phoenixP),
        phoenixQ: parseFloat(params.phoenixQ),
        buddhabrotSamples: parseInt(params.buddhabrotSamples),
        scale: parseFloat(params.scale),
        zoomOut: parseFloat(params.zoomOut),
        customSeed: parseInt(params.customSeed),
        seed: parseInt(params.seed),
    };
}

export function convertColorModeParameters(
    params: ColorModeParameters
): TypedColorModeParameters {
    return {
        colorMode: params.colorMode,
        smoothColoring: params.smoothColoring,
        cyclicColoring: params.cyclicColoring,
        logarithmicColoring: params.logarithmicColoring,
        colorIntensity: parseFloat(params.colorIntensity),
        rgbWeights: {
            r: parseFloat(params.rgbWeights.r),
            g: parseFloat(params.rgbWeights.g),
            b: parseFloat(params.rgbWeights.b),
        },
        numberOfRandomColors: parseInt(params.numberOfRandomColors),
        palette: params.palette,
    };
}
