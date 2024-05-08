"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import * as Styled from "./ProjectsSection.styled";
import ProjectCard from "./ProjectCard/ProjectCard";
import {
    mandelbrot_image_src,
    a_star_image_src,
} from "@/components/images/Images";

export type Project = {
    title: string;
    slug: string;
    imagePath: string;
    description: string;
};

export default function ProjectsSection() {
    const pathname = usePathname();
    const projects: Project[] = [
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_image_src,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },

        {
            title: "A* Algorithm Visualiser",
            slug: "fractals-explorer",
            imagePath: a_star_image_src,
            description: "Visualise and experiment with the A* algorithm",
        },
    ];

    const projectsSectionTitle = "projects";

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    function handleProjectItemClick(project: Project) {
        setSelectedProject(project);
    }

    return (
        <Styled.Container>
            <Styled.ProjectsSectionTitle>
                {projectsSectionTitle}
            </Styled.ProjectsSectionTitle>
            <Styled.ProjectsContainer>
                <Styled.ProjectsList>
                    {projects.map((project, index) => (
                        <Styled.ProjectItemContainer
                            key={index}
                            onClick={() => handleProjectItemClick(project)}
                        >
                            <Styled.ProjectItemTitle>
                                {project.title}
                            </Styled.ProjectItemTitle>
                        </Styled.ProjectItemContainer>
                    ))}
                </Styled.ProjectsList>
                <ProjectCard project={selectedProject} />
            </Styled.ProjectsContainer>
        </Styled.Container>
    );
}
