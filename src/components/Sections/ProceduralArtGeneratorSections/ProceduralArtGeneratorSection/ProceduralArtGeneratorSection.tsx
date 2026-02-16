"use client";
import * as Styled from "./ProceduralArtGeneratorSection.styled";
import React, { useRef } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import GeneratorInformationSection from "@/components/Sections/ProceduralArtGeneratorSections/GeneratorInformationSection/GeneratorInformationSection";
import { useCanvasZoom, DEFAULT_COMPLEX_PLANE_BOUNDARIES } from "./hooks/useCanvasZoom";
import { useGeneratorEngine } from "./hooks/useGeneratorEngine";

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

    const { undoZoom, resetZoom, resetHistory, zoomHistoryLength } = useCanvasZoom({
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

    return (
        <Styled.Container>
            <GeneratorInformationSection />
            <Styled.GeneratorContainer>
                <Styled.Canvas ref={canvasRef} />
                <Styled.MenuContainer>
                    <ParametersMenu
                        generate={generateImageFromButton}
                        stopGeneration={stopImageGeneration}
                        isImageGenerated={isImageGenerated}
                        undoZoom={undoZoom}
                        resetZoom={resetZoom}
                        areZoomButtonsDisabled={zoomHistoryLength === 0}
                    />
                </Styled.MenuContainer>
            </Styled.GeneratorContainer>
        </Styled.Container>
    );
}
