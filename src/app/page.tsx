"use client";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { PortraitImage } from "@/components/images/Images.styled";
import Card from "@/components/containers/Card/Card";
import PlainLinkWrapper from "@/components/wrappers/PlainLinkWrapper/PlainLinkWrapper";
import { MainInformationContainer } from "@/components/containers/MainInformationContainer/MainInformationContainer.styled";
import {
    AboutContainer,
    AboutNameHeader,
    AboutBody,
} from "@/components/containers/AboutContainer/AboutContainer.styled";
import { CardsContainer } from "@/components/containers/CardsContainer/CardsContainer.styled";
import { Header, Text } from "@/components/typography/Typography";
import {
    image_missing_image,
    mandelbrot_thumbnail_image,
    a_star_algorithm_image,
    portrait_image,
} from "@/components/images/Images";

function AboutMe() {
    return (
        <MainInformationContainer>
            <AboutContainer>
                <AboutNameHeader>Hi, I&apos;m Septi</AboutNameHeader>
                <AboutBody>
                    I&apos;m a software engineer with a passion for creating
                    interactive visualisations and tools. I enjoy working with
                    React, Next.js, and TypeScript. I have experience with
                    Python, Java, and C++.
                </AboutBody>
            </AboutContainer>
            <PortraitImage
                src={portrait_image}
                alt="Photo of me"
                width={300}
                height={300}
                priority
            />
        </MainInformationContainer>
    );
}

export default function AboutMePage() {
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

    const pathname = usePathname();

    return (
        <React.Fragment>
            <AboutMe />
            <CardsContainer>
                {projects.map((project, id) => (
                    <PlainLinkWrapper
                        key={id}
                        href={`${pathname}${project.slug}`}
                    >
                        <Card
                            imagePath={project.imagePath ?? image_missing_image}
                            title={project.title}
                            description={project.description}
                        ></Card>
                    </PlainLinkWrapper>
                ))}
            </CardsContainer>
        </React.Fragment>
    );
}
