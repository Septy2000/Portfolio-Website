"use client";
import React from "react";
import FractalsSection from "@/components/Sections/FractalsGeneratorSections/FractalsSection/FractalsSection";
import { ParametersProvider } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";

export default function FractalsExplorerPage() {
    return (
        <ParametersProvider>
            <FractalsSection />
        </ParametersProvider>
    );
}
