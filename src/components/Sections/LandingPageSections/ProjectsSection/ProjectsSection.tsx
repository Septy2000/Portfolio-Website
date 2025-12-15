"use client";
import React, { forwardRef, useState } from "react";
import * as Styled from "./ProjectsSection.styled";
import ProjectCard from "./ProjectCard/ProjectCard";
import { mandelbrot_image_src, a_star_image_src, wpf_image_src } from "@/components/Images/Images";
import { SpacerSmall } from "@/components/Spacer/Spacer.styled";
import { useInView } from "react-intersection-observer";

export type Project = {
    title: string;
    imagePath: string;
    description: string;
    note?: string;
    url?: string;
    code_url?: string;
};

const ProjectsSection = forwardRef<HTMLDivElement | null>((props, projectsRef) => {
    const projects: Project[] = [
        {
            title: "Procedural Art Generator",
            imagePath: mandelbrot_image_src,
            description: `Create and explore mathematically generated images using different algorithms 
                            such as the Mandelbrot set, Julia set and Perlin noise. 
                            This project defines my starting point with web development as part 
                            of the 3rd year individual project.`,
            note: "Note: for the best experience, use a desktop browser.",
            url: "procedural-art-generator",
        },
        {
            title: "Wild Poppy Films",
            imagePath: wpf_image_src,
            description: `Wild Poppy Films is an independent production company dedicated to 
                supporting emerging storytellers to develop conversation-sparking-question-raising films.`,
            url: "https://www.wildpoppyfilms.com",
            code_url: "https://github.com/Septy2000/Wild-Poppy-Films-Website",
        },

        // {
        //     title: "A* Algorithm Visualiser",
        //     imagePath: a_star_image_src,
        //     description: "Visualise and experiment with the A* algorithm",
        //     slug: undefined,
        //     code_url: "https://github.com/Septy2000/Portfolio-Website",
        // },
    ];
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

    const projectsSectionTitle = "projects";

    const { ref, inView } = useInView({
        threshold: 0.5,
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
                            $isSelected={selectedProject?.title === project.title}
                            $inView={inView}
                        >
                            <Styled.ProjectItemTitle>{project.title}</Styled.ProjectItemTitle>
                        </Styled.ProjectItemContainer>
                    ))}
                </Styled.ProjectsList>
                <ProjectCard project={selectedProject} inView={inView} />
            </Styled.ProjectsContainer>
            <SpacerSmall />
        </Styled.Container>
    );
});
ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
