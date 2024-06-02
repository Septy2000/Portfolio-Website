import { TypedParameters, TypedColorModeParameters } from "@/_types/common";
import { log } from "console";

export function isColorIntensityValid(colorIntensity: number): boolean {
    return !Number.isNaN(colorIntensity) && colorIntensity !== 0;
}

export function isRedWeightValid(redWeight: number): boolean {
    return !Number.isNaN(redWeight) && redWeight >= 0;
}

export function isGreenWeightValid(greenWeight: number): boolean {
    return !Number.isNaN(greenWeight) && greenWeight >= 0;
}

export function isBlueWeightValid(blueWeight: number): boolean {
    return !Number.isNaN(blueWeight) && blueWeight >= 0;
}

export function isColorsNumberValid(colorsNumber: number): boolean {
    return !Number.isNaN(colorsNumber) && colorsNumber > 0;
}

export function isMaxIterationsValid(maxIterations: number): boolean {
    return !Number.isNaN(maxIterations) && maxIterations > 0;
}

export function isWidthValid(width: number): boolean {
    return !Number.isNaN(width) && width >= 4;
}

export function isHeightValid(height: number): boolean {
    return !Number.isNaN(height) && height >= 3;
}

export function isZoomOutValid(zoomOut: number): boolean {
    return !Number.isNaN(zoomOut) && zoomOut > 0;
}

export function isScaleValid(scale: number): boolean {
    return !Number.isNaN(scale) && scale > 0;
}

export function isParametersMenuInputValid(
    typedParameters: TypedParameters,
    typedColorModeParameters: TypedColorModeParameters
): boolean {
    return (
        isMaxIterationsValid(typedParameters.maxIterations) &&
        isColorsNumberValid(typedColorModeParameters.numberOfRandomColors) &&
        isColorIntensityValid(typedColorModeParameters.colorIntensity) &&
        isRedWeightValid(typedColorModeParameters.rgbWeights.r) &&
        isGreenWeightValid(typedColorModeParameters.rgbWeights.g) &&
        isBlueWeightValid(typedColorModeParameters.rgbWeights.b) &&
        isWidthValid(typedParameters.width) &&
        isHeightValid(typedParameters.height)
    );
}
