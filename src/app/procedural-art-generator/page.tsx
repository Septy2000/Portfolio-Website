import React from "react";
import ProceduralArtGeneratorSection from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ProceduralArtGeneratorSection";
import { ParametersProvider } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import { SpacerMedium } from "@/components/Spacer/Spacer.styled";
import ProceduralArtGeneratorNavigationBar from "@/components/ProceduralArtGeneratorNavigationBar/ProceduralArtGeneratorNavigationBar";
export default function FractalsExplorerPage() {
    return (
        <ParametersProvider>
            <ProceduralArtGeneratorNavigationBar />
            <ProceduralArtGeneratorSection />
            <SpacerMedium />
        </ParametersProvider>
    );
}
