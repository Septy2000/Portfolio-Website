"use client";
import React from "react";
import FractalsSection from "@/components/FractalsSection/FractalsSection";
import { ParametersProvider } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function FractalsExplorerPage() {
    return (
        <ParametersProvider>
            <FractalsSection />;
        </ParametersProvider>
    );
}
