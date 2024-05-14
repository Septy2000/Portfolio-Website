"use client";
import React, { useRef } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import MainInformationSection from "@/components/MainInformationSection/MainInformationSction";
import ExperienceContainer from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

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
            <MainInformationSection aboutRef={aboutRef} />
            <ExperienceContainer experienceRef={experienceRef} />
            <ProjectsSection projectsRef={projectsRef} />
        </React.Fragment>
    );
}
