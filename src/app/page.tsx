"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { PortraitImage } from "@/components/images/Images.styled";
import Card from "@/components/containers/CardsContainer/Card/Card";
import PlainLinkWrapper from "@/components/wrappers/PlainLinkWrapper/PlainLinkWrapper";
import * as MainInfo from "@/components/containers/MainInformationContainer/MainInformationContainer.styled";
import * as About from "@/components/containers/AboutContainer/AboutContainer.styled";
import * as Cards from "@/components/containers/CardsContainer/CardsContainer.styled";
import * as Timeline from "@/components/containers/ExperienceContainer/ExperienceContainer.styled";
import {
    image_missing_image,
    mandelbrot_thumbnail_image,
    a_star_algorithm_image,
    portrait_image,
} from "@/components/images/Images";

function AboutSection() {
    return (
        <MainInfo.Container>
            <About.Container>
                <About.NameHeader>hi, I&apos;m Septi</About.NameHeader>
                <About.Body>
                    I&apos;m a junior software engineer with a passion for
                    technology. I enjoy learning new things and experimenting
                    with different technologies.
                </About.Body>
            </About.Container>
            <PortraitImage
                src={portrait_image}
                alt="Me. Image could not load"
                width={300}
                height={300}
                priority
            />
        </MainInfo.Container>
    );
}

function ProjectsSection() {
    const pathname = usePathname();
    const projects = [
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_image,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },

        {
            title: "A* Algorithm Visualiser",
            slug: "fractals-explorer",
            imagePath: a_star_algorithm_image,
            description: "Visualise and experiment with the A* algorithm",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_image,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_image,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_image,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_image,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
    ];
    return (
        <Cards.Container>
            {projects.map((project, id) => (
                <PlainLinkWrapper key={id} href={`${pathname}${project.slug}`}>
                    <Card
                        imagePath={project.imagePath ?? image_missing_image}
                        title={project.title}
                        description={project.description}
                    ></Card>
                </PlainLinkWrapper>
            ))}
        </Cards.Container>
    );
}

function TimelineSection() {
    return (
        <Timeline.Container>
            <Timeline.ScrollToExperienceHeader>
                Scroll to check my experience &darr;
            </Timeline.ScrollToExperienceHeader>
            <Timeline.Timeline>
                <Timeline.TimelineItem>{"hello"}</Timeline.TimelineItem>
            </Timeline.Timeline>
        </Timeline.Container>
    );
}

export default function AboutMePage() {
    return (
        <React.Fragment>
            <AboutSection />
            <TimelineSection />
            <ProjectsSection />
        </React.Fragment>
    );
}
