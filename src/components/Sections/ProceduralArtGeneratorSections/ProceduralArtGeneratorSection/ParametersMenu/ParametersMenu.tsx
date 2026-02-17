import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./ParametersMenu.styled";
import DefaultParametersMenu from "./DefaultParametersMenu/DefaultParametersMenu";
import MandelbrotParametersMenu from "./MandelbrotParametersMenu/MandelbrotParametersMenu";
import JuliaParametersMenu from "./JuliaParametersMenu/JuliaParametersMenu";
import PerlinNoiseParametersMenu from "./PerlinNoiseParametersMenu/PerlinNoiseParametersMenu";
import ColorModeMenu from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersMenu/ColorModeMenu/ColorModeMenu";
import { isParametersMenuInputValid } from "@/utils/parametersValidation";
import InputError from "./InputError";
import React from "react";

export default function ParametersMenu({
    generate,
    isImageGenerated,
    stopGeneration,
    undoZoom,
    resetZoom,
    areZoomButtonsDisabled,
    onSave,
}: {
    generate: () => void;
    isImageGenerated: boolean;
    stopGeneration: () => void;
    undoZoom: () => void;
    resetZoom: () => void;
    areZoomButtonsDisabled: boolean;
    onSave: () => void;
}) {
    const { typedColorModeParameters, typedParameters } = useParameters();

    return (
        <Styled.Container>
            <Styled.MenusContainer>
                <DefaultParametersMenu />
                <ColorModeMenu />
                {typedParameters.algorithm === "mandelbrot" && <MandelbrotParametersMenu />}
                {typedParameters.algorithm === "julia" && <JuliaParametersMenu />}
                {typedParameters.algorithm === "perlin" && <PerlinNoiseParametersMenu />}
            </Styled.MenusContainer>
            <Styled.ButtonsContainer>
                <InputError />
                <Styled.HorizontalButtonsContainer>
                    {typedParameters.algorithm !== "perlin" && (
                        <React.Fragment>
                            <Styled.ControlButton
                                onClick={undoZoom}
                                disabled={areZoomButtonsDisabled}
                            >
                                undo zoom
                                <Styled.UndoZoomIcon />
                            </Styled.ControlButton>
                            <Styled.ControlButton
                                onClick={resetZoom}
                                disabled={areZoomButtonsDisabled}
                            >
                                reset zoom
                                <Styled.ResetZoomIcon />
                            </Styled.ControlButton>
                        </React.Fragment>
                    )}
                </Styled.HorizontalButtonsContainer>
                <Styled.HorizontalButtonsContainer>
                    <Styled.ControlButton
                        onClick={generate}
                        disabled={
                            !isParametersMenuInputValid(
                                typedParameters,
                                typedColorModeParameters
                            ) || !isImageGenerated
                        }
                    >
                        generate
                        <Styled.PlayIcon />
                    </Styled.ControlButton>
                    <Styled.ControlButton onClick={stopGeneration} disabled={isImageGenerated}>
                        stop
                        <Styled.StopIcon />
                    </Styled.ControlButton>
                </Styled.HorizontalButtonsContainer>
                <Styled.FullWidthButton onClick={onSave} disabled={!isImageGenerated}>
                    save as PNG
                    <Styled.DownloadIcon />
                </Styled.FullWidthButton>
            </Styled.ButtonsContainer>
        </Styled.Container>
    );
}
