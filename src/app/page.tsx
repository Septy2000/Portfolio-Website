"use client";
import React, { useRef } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import MainInformationSection from "@/components/Sections/LandingPageSections/MainInformationSection/MainInformationSction";
import ExperienceContainer from "@/components/Sections/LandingPageSections/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/Sections/LandingPageSections/ProjectsSection/ProjectsSection";

export default function AboutMePage() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    return (
        <React.Fragment>
            <NavigationBar
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                experienceRef={experienceRef}
            />
            <MainInformationSection ref={aboutRef} />
            <ExperienceContainer ref={experienceRef} />
            <ProjectsSection ref={projectsRef} />
        </React.Fragment>
    );
}
