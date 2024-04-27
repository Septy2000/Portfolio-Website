"use client";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Card from "@/components/containers/Card/Card";
import PlainLinkWrapper from "@/components/wrappers/PlainLinkWrapper/PlainLinkWrapper";
import { MainInformationContainer } from "@/components/containers/MainInformationContainer/MainInformationContainer.styled";
import { AboutContainer } from "@/components/containers/AboutContainer/AboutContainer.styled";
import { CardsContainer } from "@/components/containers/CardsContainer/CardsContainer.styled";
import { Header, Text } from "@/components/typography/Typography";
import {
    image_missing_image,
    mandelbrot_thumbnail_image,
    a_star_algorithm_image,
    portrait_image,
} from "@/components/Images";

const PortraitPhoto = styled(Image)`
    border: 8px solid ${({ theme }) => theme.colors.surface.secondary};
    border-radius: 50%;
`;

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
            <MainInformationContainer>
                <AboutContainer>
                    <Header color="tomato" m="0.5rem">
                        {"Hi, I'm Septi"}
                    </Header>

                    <Text color="primary" m="0.5rem">
                        I am a software engineer with a passion for creating
                        interactive visualisations and tools. I enjoy working
                        with React, Next.js, and TypeScript. I have experience
                        with Python, Java, and C++.
                    </Text>
                </AboutContainer>
                <PortraitPhoto
                    src={portrait_image}
                    alt="Photo of me"
                    width={300}
                    height={300}
                    priority
                />
            </MainInformationContainer>

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
