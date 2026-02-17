"use client";
import * as Styled from "./ProceduralArtGeneratorSection.styled";
import React, { useRef, useEffect } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import GeneratorInformationSection from "@/components/Sections/ProceduralArtGeneratorSections/GeneratorInformationSection/GeneratorInformationSection";
import { useCanvasZoom, DEFAULT_COMPLEX_PLANE_BOUNDARIES } from "./hooks/useCanvasZoom";
import { useGeneratorEngine } from "./hooks/useGeneratorEngine";
import { useParameters } from "./ParametersProvider/ParametersProvider";

export default function ProceduralArtGeneratorSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const complexPlaneBoundariesRef = useRef<ComplexPlaneBoundary>(
        DEFAULT_COMPLEX_PLANE_BOUNDARIES
    );

    // Ref indirection to break the circular dependency between hooks:
    // zoom needs generateImage from engine, engine needs resetHistory from zoom.
    const generateImageRef = useRef<() => void>(() => {});
    const resetZoomHistoryRef = useRef<() => void>(() => {});

    const {
        isImageGenerated,
        isGeneratingRef,
        localTypedParametersRef,
        scalingFactorRef,
        generateImage,
        generateImageFromButton,
        stopImageGeneration,
    } = useGeneratorEngine({
        canvasRef,
        contextRef,
        complexPlaneBoundariesRef,
        resetZoomHistoryRef,
    });

    const { undoZoom, resetZoom, resetHistory, zoomHistoryLength, hoverCoords, getZoomHistory, loadZoomState } = useCanvasZoom({
        canvasRef,
        contextRef,
        scalingFactorRef,
        localTypedParametersRef,
        isGeneratingRef,
        complexPlaneBoundariesRef,
        generateImageRef,
    });

    generateImageRef.current = generateImage;
    resetZoomHistoryRef.current = resetHistory;

    const { parameters, colorModeParameters, typedParameters } = useParameters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const boundsJson = searchParams.get("bounds");
        if (boundsJson) {
            try {
                const bounds = JSON.parse(boundsJson);
                const history = searchParams.get("history");
                loadZoomState(bounds, history ? JSON.parse(history) : []);
                generateImage();
            } catch {}
        }
    }, []);

    function handleCopyLink() {
        const url = new URL(window.location.href.split("?")[0]);
        url.searchParams.set("params", JSON.stringify(parameters));
        url.searchParams.set("colors", JSON.stringify(colorModeParameters));
        url.searchParams.set("bounds", JSON.stringify(complexPlaneBoundariesRef.current));
        const history = getZoomHistory();
        if (history.length > 0) {
            url.searchParams.set("history", JSON.stringify(history));
        }
        navigator.clipboard.writeText(url.toString());
    }

    function handleSave() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.toBlob((blob) => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${typedParameters.algorithm}-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    return (
        <Styled.Container>
            <GeneratorInformationSection />
            <Styled.GeneratorContainer>
                <Styled.CanvasWrapper>
                    <Styled.Canvas ref={canvasRef} />
                    {hoverCoords && (
                        <Styled.CoordinateOverlay>
                            Re: {hoverCoords.re.toFixed(6)} Im: {hoverCoords.im.toFixed(6)}i
                        </Styled.CoordinateOverlay>
                    )}
                </Styled.CanvasWrapper>
                <Styled.MenuContainer>
                    <ParametersMenu
                        generate={generateImageFromButton}
                        stopGeneration={stopImageGeneration}
                        isImageGenerated={isImageGenerated}
                        undoZoom={undoZoom}
                        resetZoom={resetZoom}
                        areZoomButtonsDisabled={zoomHistoryLength === 0}
                        onSave={handleSave}
                        onCopyLink={handleCopyLink}
                    />
                </Styled.MenuContainer>
            </Styled.GeneratorContainer>
        </Styled.Container>
    );
}
