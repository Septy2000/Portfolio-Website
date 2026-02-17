import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./ParametersMenu.styled";
import DefaultParametersMenu from "./DefaultParametersMenu/DefaultParametersMenu";
import MandelbrotParametersMenu from "./MandelbrotParametersMenu/MandelbrotParametersMenu";
import JuliaParametersMenu from "./JuliaParametersMenu/JuliaParametersMenu";
import PerlinNoiseParametersMenu from "./PerlinNoiseParametersMenu/PerlinNoiseParametersMenu";
import NewtonParametersMenu from "./NewtonParametersMenu/NewtonParametersMenu";
import LyapunovParametersMenu from "./LyapunovParametersMenu/LyapunovParametersMenu";
import PhoenixParametersMenu from "./PhoenixParametersMenu/PhoenixParametersMenu";
import BuddhabrotParametersMenu from "./BuddhabrotParametersMenu/BuddhabrotParametersMenu";
import ColorModeMenu from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersMenu/ColorModeMenu/ColorModeMenu";
import { isParametersMenuInputValid } from "@/utils/parametersValidation";
import InputError from "./InputError";
import React, { useState } from "react";

export default function ParametersMenu({
    generate,
    isImageGenerated,
    stopGeneration,
    undoZoom,
    resetZoom,
    areZoomButtonsDisabled,
    onSave,
    onCopyLink,
}: {
    generate: () => void;
    isImageGenerated: boolean;
    stopGeneration: () => void;
    undoZoom: () => void;
    resetZoom: () => void;
    areZoomButtonsDisabled: boolean;
    onSave: () => void;
    onCopyLink: () => void;
}) {
    const { typedColorModeParameters, typedParameters } = useParameters();
    const [linkCopied, setLinkCopied] = useState(false);

    return (
        <Styled.Container>
            <Styled.MenusContainer>
                <DefaultParametersMenu />
                {typedParameters.algorithm !== "newton" && <ColorModeMenu />}
                {(typedParameters.algorithm === "mandelbrot" || typedParameters.algorithm === "burning-ship" || typedParameters.algorithm === "tricorn" || typedParameters.algorithm === "magnet") && <MandelbrotParametersMenu />}
                {typedParameters.algorithm === "julia" && <JuliaParametersMenu />}
                {typedParameters.algorithm === "newton" && <NewtonParametersMenu />}
                {typedParameters.algorithm === "lyapunov" && <LyapunovParametersMenu />}
                {typedParameters.algorithm === "phoenix" && <PhoenixParametersMenu />}
                {typedParameters.algorithm === "buddhabrot" && <BuddhabrotParametersMenu />}
                {typedParameters.algorithm === "perlin" && <PerlinNoiseParametersMenu />}
            </Styled.MenusContainer>
            <Styled.ButtonsContainer>
                <InputError />
                <Styled.HorizontalButtonsContainer>
                    {typedParameters.algorithm !== "perlin" && typedParameters.algorithm !== "buddhabrot" && (
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
                    <Styled.GenerateButton
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
                    </Styled.GenerateButton>
                    <Styled.StopButton onClick={stopGeneration} disabled={isImageGenerated}>
                        stop
                        <Styled.StopIcon />
                    </Styled.StopButton>
                </Styled.HorizontalButtonsContainer>
                <Styled.HorizontalButtonsContainer>
                    <Styled.SaveButton onClick={onSave} disabled={!isImageGenerated}>
                        save PNG
                        <Styled.DownloadIcon />
                    </Styled.SaveButton>
                    <Styled.SaveButton
                        onClick={() => {
                            onCopyLink();
                            setLinkCopied(true);
                            setTimeout(() => setLinkCopied(false), 2000);
                        }}
                    >
                        {linkCopied ? "copied!" : "copy link"}
                        <Styled.LinkIcon />
                    </Styled.SaveButton>
                </Styled.HorizontalButtonsContainer>
            </Styled.ButtonsContainer>
        </Styled.Container>
    );
}
