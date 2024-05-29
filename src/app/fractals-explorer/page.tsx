"use client";
import React from "react";
import FractalsSection from "@/components/Sections/FractalsGeneratorSections/FractalsSection/FractalsSection";
import { ParametersProvider } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import { SpacerMedium } from "@/components/Spacer/Spacer.styled";
export default function FractalsExplorerPage() {
    return (
        <ParametersProvider>
            <SpacerMedium />
            <FractalsSection />
            <SpacerMedium />
        </ParametersProvider>
    );
}
