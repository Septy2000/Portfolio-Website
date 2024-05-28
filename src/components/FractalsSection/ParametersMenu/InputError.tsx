import ErrorText from "@/components/ErrorText/ErrorText";
import React from "react";
import {
    isColorIntensityValid,
    isBlueWeightValid,
    isColorsNumberValid,
    isGreenWeightValid,
    isHeightValid,
    isMaxIterationsValid,
    isRedWeightValid,
    isWidthValid,
} from "@/utils/ParametersValidation";
import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function InputError() {
    const { typedColorModeParameters, typedParameters } = useParameters();
    return (
        <React.Fragment>
            {!isColorIntensityValid(
                typedColorModeParameters.colorIntensity
            ) && (
                <ErrorText>
                    Color intensity must be a number different from 0
                </ErrorText>
            )}
            {!isRedWeightValid(typedColorModeParameters.rgbWeights.r) && (
                <ErrorText>
                    Red weight must be a number greater than or equal than 0
                </ErrorText>
            )}
            {!isGreenWeightValid(typedColorModeParameters.rgbWeights.g) && (
                <ErrorText>
                    Green weight must be a number greater than or equal than 0
                </ErrorText>
            )}
            {!isBlueWeightValid(typedColorModeParameters.rgbWeights.b) && (
                <ErrorText>
                    Blue weight must be a number greater than or equal to 0
                </ErrorText>
            )}
            {!isColorsNumberValid(
                typedColorModeParameters.numberOfRandomColors
            ) && (
                <ErrorText>
                    Number of colors must be a number greater than 0
                </ErrorText>
            )}
            {!isMaxIterationsValid(typedParameters.maxIterations) && (
                <ErrorText>
                    Max iterations must be a number greater than 0
                </ErrorText>
            )}
            {!isWidthValid(typedParameters.width) && (
                <ErrorText>Width must be a number greater than 3</ErrorText>
            )}
            {!isHeightValid(typedParameters.height) && (
                <ErrorText>Height must be a number greater than 2</ErrorText>
            )}
        </React.Fragment>
    );
}
