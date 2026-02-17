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

export interface ParametersMenuProps {
    generate: () => void;
    isImageGenerated: boolean;
    progress: number;
    stopGeneration: () => void;
    undoZoom: () => void;
    resetZoom: () => void;
    areZoomButtonsDisabled: boolean;
    onSave: () => void;
    onCopyLink: () => void;
    variant?: "full" | "menus-only" | "buttons-only";
}

export default function ParametersMenu({
    generate,
    isImageGenerated,
    progress,
    stopGeneration,
    undoZoom,
    resetZoom,
    areZoomButtonsDisabled,
    onSave,
    onCopyLink,
    variant = "full",
}: ParametersMenuProps) {
    const { typedColorModeParameters, typedParameters } = useParameters();
    const [linkCopied, setLinkCopied] = useState(false);

    const showZoomButtons = typedParameters.algorithm !== "perlin" && typedParameters.algorithm !== "buddhabrot";

    const menusContent = (
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
    );

    const buttonsContent = (
        <Styled.ButtonsContainer>
            <Styled.ProgressContainer>
                <Styled.ProgressText>
                    {!isImageGenerated ? `${Math.round(progress * 100)}%` : "ready"}
                </Styled.ProgressText>
                <Styled.ProgressBarTrack>
                    <Styled.ProgressBarFill $progress={isImageGenerated ? 1 : progress} />
                </Styled.ProgressBarTrack>
            </Styled.ProgressContainer>
            <Styled.InputErrorWrapper>
                <InputError />
            </Styled.InputErrorWrapper>
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
                {showZoomButtons && (
                    <Styled.ControlButton
                        onClick={resetZoom}
                        disabled={areZoomButtonsDisabled}
                    >
                        reset zoom
                        <Styled.ResetZoomIcon />
                    </Styled.ControlButton>
                )}
            </Styled.HorizontalButtonsContainer>
            <Styled.HorizontalButtonsContainer>
                {showZoomButtons && (
                    <Styled.ControlButton
                        onClick={undoZoom}
                        disabled={areZoomButtonsDisabled}
                    >
                        undo zoom
                        <Styled.UndoZoomIcon />
                    </Styled.ControlButton>
                )}
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
    );

    if (variant === "menus-only") {
        return <Styled.Container $variant={variant}>{menusContent}</Styled.Container>;
    }

    if (variant === "buttons-only") {
        return <Styled.Container $variant={variant}>{buttonsContent}</Styled.Container>;
    }

    return (
        <Styled.Container>
            {menusContent}
            {buttonsContent}
        </Styled.Container>
    );
}
