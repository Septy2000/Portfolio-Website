import React from "react";
import FractalsSection from "@/components/Sections/FractalsGeneratorSections/FractalsSection/FractalsSection";
import { ParametersProvider } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import { SpacerMedium } from "@/components/Spacer/Spacer.styled";
import FractalsGeneratorNavigationBar from "@/components/FractalsGeneratorNavigationBar/FractalsGeneratorNavigationBar";
export default function FractalsExplorerPage() {
    return (
        <ParametersProvider>
            <FractalsGeneratorNavigationBar />
            <SpacerMedium />
            <FractalsSection />
            <SpacerMedium />
        </ParametersProvider>
    );
}
