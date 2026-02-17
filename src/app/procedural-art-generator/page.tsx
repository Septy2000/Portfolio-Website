import React from "react";
import ProceduralArtGeneratorSection from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ProceduralArtGeneratorSection";
import { ParametersProvider } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import ProceduralArtGeneratorNavigationBar from "@/components/ProceduralArtGeneratorNavigationBar/ProceduralArtGeneratorNavigationBar";
export default function FractalsExplorerPage() {
    return (
        <ParametersProvider>
            <ProceduralArtGeneratorNavigationBar />
            <ProceduralArtGeneratorSection />
        </ParametersProvider>
    );
}
