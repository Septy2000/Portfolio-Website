"use client";
import React from "react";
import styled from "styled-components";
import ProceduralArtGeneratorSection from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ProceduralArtGeneratorSection";
import { ParametersProvider } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import ProceduralArtGeneratorNavigationBar from "@/components/ProceduralArtGeneratorNavigationBar/ProceduralArtGeneratorNavigationBar";

const PageWrapper = styled.div`
    min-height: 100vh;
    min-height: 100dvh;
    background: #0d0e14;
    position: relative;
    z-index: 10000;

    /* Subtle radial gradient for depth */
    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(
            ellipse at 50% 0%,
            rgba(255, 149, 0, 0.03) 0%,
            transparent 60%
        );
        pointer-events: none;
        z-index: 0;
    }

    /* Dark scrollbar for this page */
    scrollbar-color: rgba(255, 255, 255, 0.15) transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 4px;

        &:hover {
            background: rgba(255, 149, 0, 0.5);
        }
    }
`;

export default function FractalsExplorerPage() {
    return (
        <PageWrapper>
            <ParametersProvider>
                <ProceduralArtGeneratorNavigationBar />
                <ProceduralArtGeneratorSection />
            </ParametersProvider>
        </PageWrapper>
    );
}
