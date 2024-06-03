import ErrorText from "@/components/ErrorText/ErrorText";
import React from "react";
import * as InputValidation from "@/utils/parametersValidation";
import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";

export default function InputError() {
    const { typedColorModeParameters, typedParameters, parameters } = useParameters();
    return (
        <React.Fragment>
            {!InputValidation.isColorIntensityValid(typedColorModeParameters.colorIntensity) && (
                <ErrorText>Color intensity must be a number different from 0</ErrorText>
            )}
            {!InputValidation.isRedWeightValid(typedColorModeParameters.rgbWeights.r) && (
                <ErrorText>Red weight must be a number greater than or equal to 0</ErrorText>
            )}
            {!InputValidation.isGreenWeightValid(typedColorModeParameters.rgbWeights.g) && (
                <ErrorText>Green weight must be a number greater than or equal to 0</ErrorText>
            )}
            {!InputValidation.isBlueWeightValid(typedColorModeParameters.rgbWeights.b) && (
                <ErrorText>Blue weight must be a number greater than or equal to 0</ErrorText>
            )}
            {!InputValidation.isColorsNumberValid(
                typedColorModeParameters.numberOfRandomColors
            ) && <ErrorText>Number of colors must be a number greater than 0</ErrorText>}
            {!InputValidation.isMaxIterationsValid(typedParameters.maxIterations) && (
                <ErrorText>Max iterations must be a number greater than 0</ErrorText>
            )}
            {!InputValidation.isWidthValid(typedParameters.width) && (
                <ErrorText>Width must be a number greater than 3</ErrorText>
            )}
            {!InputValidation.isHeightValid(typedParameters.height) && (
                <ErrorText>Height must be a number greater than 2</ErrorText>
            )}
            {!InputValidation.isZoomOutValid(typedParameters.zoomOut) && (
                <ErrorText>Zoom out must be a number greater than 0</ErrorText>
            )}
            {!InputValidation.isScaleValid(typedParameters.scale) && (
                <ErrorText>Scale must be a number greater than 0</ErrorText>
            )}
        </React.Fragment>
    );
}
