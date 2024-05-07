"use client";
import React from "react";
import MainInformationSection from "@/components/MainInformationSection/MainInformationSction";
import ExperienceContainer from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function AboutMePage() {
    return (
        <React.Fragment>
            <MainInformationSection />
            <ExperienceContainer />
            <ProjectsSection />
        </React.Fragment>
    );
}
