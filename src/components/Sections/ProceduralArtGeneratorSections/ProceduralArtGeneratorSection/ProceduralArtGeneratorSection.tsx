"use client";
import * as Styled from "./ProceduralArtGeneratorSection.styled";
import React, { useRef, useEffect, useState } from "react";
import { BsGearFill, BsXLg, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { ComplexPlaneBoundary } from "@/_types/math";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import GeneratorInformationSection from "@/components/Sections/ProceduralArtGeneratorSections/GeneratorInformationSection/GeneratorInformationSection";
import { useCanvasZoom, DEFAULT_COMPLEX_PLANE_BOUNDARIES } from "./hooks/useCanvasZoom";
import { useGeneratorEngine } from "./hooks/useGeneratorEngine";
import { useParameters } from "./ParametersProvider/ParametersProvider";
import { convertParameters, convertColorModeParameters } from "@/utils/parametersTypeConversion";

export default function ProceduralArtGeneratorSection() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        function updateNavbarHeight() {
            const header = document.querySelector("header");
            if (header) {
                document.documentElement.style.setProperty(
                    "--navbar-height",
                    `${header.offsetHeight}px`,
                );
            }
        }
        updateNavbarHeight();
        window.addEventListener("resize", updateNavbarHeight);
        return () => window.removeEventListener("resize", updateNavbarHeight);
    }, []);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const complexPlaneBoundariesRef = useRef<ComplexPlaneBoundary>(
        DEFAULT_COMPLEX_PLANE_BOUNDARIES,
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
        generateFromURLParams,
        stopImageGeneration,
    } = useGeneratorEngine({
        canvasRef,
        contextRef,
        complexPlaneBoundariesRef,
        resetZoomHistoryRef,
    });

    const {
        undoZoom,
        resetZoom,
        resetHistory,
        zoomHistoryLength,
        hoverCoords,
        getZoomHistory,
        loadZoomState,
    } = useCanvasZoom({
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
        const paramsJson = searchParams.get("params");
        const colorsJson = searchParams.get("colors");
        const boundsJson = searchParams.get("bounds");

        if (paramsJson && colorsJson) {
            try {
                const typedParams = convertParameters(JSON.parse(paramsJson));
                const typedColors = convertColorModeParameters(JSON.parse(colorsJson));

                if (boundsJson) {
                    const bounds = JSON.parse(boundsJson);
                    const history = searchParams.get("history");
                    loadZoomState(bounds, history ? JSON.parse(history) : []);
                }

                generateFromURLParams(typedParams, typedColors);
            } catch {}
        } else if (boundsJson) {
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

    const menuProps = {
        generate: generateImageFromButton,
        stopGeneration: stopImageGeneration,
        isImageGenerated,
        undoZoom,
        resetZoom,
        areZoomButtonsDisabled: zoomHistoryLength === 0,
        onSave: handleSave,
        onCopyLink: handleCopyLink,
    };

    return (
        <Styled.Container>
            <GeneratorInformationSection />
            <Styled.GeneratorContainer>
                <Styled.CanvasWrapper>
                    <Styled.Canvas ref={canvasRef} />
                    {hoverCoords && (
                        <Styled.CoordinateOverlay>
                            Re: {hoverCoords.re} Im: {hoverCoords.im}i
                        </Styled.CoordinateOverlay>
                    )}
                </Styled.CanvasWrapper>
            </Styled.GeneratorContainer>

            <Styled.ButtonsUnderCanvas>
                <ParametersMenu {...menuProps} variant="buttons-only" />
            </Styled.ButtonsUnderCanvas>

            {/* Desktop: persistent sidebar */}
            <Styled.SidebarOpenTab
                $isOpen={isSidebarOpen}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <BsChevronRight /> : <BsChevronLeft />}
            </Styled.SidebarOpenTab>
            <Styled.Sidebar $isOpen={isSidebarOpen}>
                <Styled.SidebarHeader>
                    <Styled.SidebarTitle>Parameters</Styled.SidebarTitle>
                    <Styled.SidebarToggle onClick={() => setIsSidebarOpen(false)}>
                        <BsChevronRight />
                    </Styled.SidebarToggle>
                </Styled.SidebarHeader>
                <Styled.SidebarContent>
                    <ParametersMenu {...menuProps} variant="menus-only" />
                </Styled.SidebarContent>
            </Styled.Sidebar>

            {/* Mobile: gear FAB + bottom sheet */}
            <Styled.MobileMenuToggle onClick={() => setIsMobileMenuOpen(true)}>
                <BsGearFill />
            </Styled.MobileMenuToggle>

            {isMobileMenuOpen && (
                <React.Fragment>
                    <Styled.BottomSheetOverlay onClick={() => setIsMobileMenuOpen(false)} />
                    <Styled.BottomSheetContainer>
                        <Styled.BottomSheetHeader>
                            <Styled.BottomSheetTitle>Parameters</Styled.BottomSheetTitle>
                            <Styled.BottomSheetClose onClick={() => setIsMobileMenuOpen(false)}>
                                <BsXLg />
                            </Styled.BottomSheetClose>
                        </Styled.BottomSheetHeader>
                        <ParametersMenu {...menuProps} variant="menus-only" />
                    </Styled.BottomSheetContainer>
                </React.Fragment>
            )}
        </Styled.Container>
    );
}
