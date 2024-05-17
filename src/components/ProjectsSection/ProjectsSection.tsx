"use client";
import React, { forwardRef, useState } from "react";
import * as Styled from "./ProjectsSection.styled";
import ProjectCard from "./ProjectCard/ProjectCard";
import {
    mandelbrot_image_src,
    a_star_image_src,
} from "@/components/images/Images";
import { SpacerSmall } from "@/components/Spacer/Spacer.styled";
import { useInView } from "react-intersection-observer";

export type Project = {
    title: string;
    imagePath: string;
    description: string;
    slug?: string;
    code_url?: string;
};

const ProjectsSection = forwardRef<HTMLDivElement | null>(
    (props, projectsRef) => {
        const projects: Project[] = [
            {
                title: "Fractals Explorer",
                imagePath: mandelbrot_image_src,
                description:
                    "Explore the Mandelbrot set and experiment with Perlin noise art",
                slug: "fractals-explorer",
                code_url: "https://github.com/Septy2000/Portfolio-Website",
            },

            {
                title: "A* Algorithm Visualiser",
                imagePath: a_star_image_src,
                description: "Visualise and experiment with the A* algorithm",
                slug: "a-star-visualiser",
                code_url: "https://github.com/Septy2000/Portfolio-Website",
            },
        ];
        const [selectedProject, setSelectedProject] = useState<Project>(
            projects[0]
        );

        const projectsSectionTitle = "projects";

        const { ref, inView } = useInView({
            threshold: 0.3,
        });

        function handleProjectItemClick(project: Project) {
            setSelectedProject(project);
        }

        return (
            <Styled.Container ref={ref} $inView={inView}>
                <SpacerSmall />
                <Styled.ProjectsContainer ref={projectsRef}>
                    <Styled.ProjectsList>
                        <Styled.ProjectsSectionTitle>
                            {projectsSectionTitle}
                        </Styled.ProjectsSectionTitle>
                        {projects.map((project, index) => (
                            <Styled.ProjectItemContainer
                                key={index}
                                onClick={() => handleProjectItemClick(project)}
                                $isSelected={
                                    selectedProject?.title === project.title
                                }
                            >
                                <Styled.ProjectItemTitle>
                                    {project.title}
                                </Styled.ProjectItemTitle>
                            </Styled.ProjectItemContainer>
                        ))}
                    </Styled.ProjectsList>
                    <ProjectCard project={selectedProject} />
                </Styled.ProjectsContainer>
                <SpacerSmall />
            </Styled.Container>
        );
    }
);
ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
