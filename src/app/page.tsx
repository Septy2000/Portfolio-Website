"use client";
import { CardsContainer } from "@/styles/Containers.styled";
import React from "react";
import { usePathname } from "next/navigation";
import Card from "@/components/containers/Card";
import PlainLinkWrapper from "@/components/wrappers/PlainLinkWrapper";
import {
    image_missing_image,
    mandelbrot_thumbnail_image,
    a_star_algorithm_image,
} from "@/components/Images";
import {
    MainInformationContainer,
    AboutContainer,
} from "@/styles/Containers.styled";
import { Header, Text } from "@/components/typography/Typography";
import Image from "next/image";
import { portrait_image } from "@/components/Images";
import styled from "styled-components";

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

const PortraitPhoto = styled(Image)`
    border: 1px solid ${({ theme }) => theme.colors.surface.secondary};
    border-radius: 50%;
`;

export default function AboutMePage() {
    const pathname = usePathname();

    return (
        <React.Fragment>
            <MainInformationContainer>
                <PortraitPhoto
                    src={portrait_image}
                    alt="Photo of me"
                    width={300}
                    height={300}
                />
                <AboutContainer>
                    <Header size="large" color="primary" m="0.5rem">
                        About Me
                    </Header>

                    <Text color="primary" m="0.5rem">
                        I am a software engineer with a passion for creating
                        interactive visualisations and tools. I enjoy working
                        with React, Next.js, and TypeScript. I have experience
                        with Python, Java, and C++.
                    </Text>
                </AboutContainer>
            </MainInformationContainer>

            <CardsContainer $mh="28px">
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
