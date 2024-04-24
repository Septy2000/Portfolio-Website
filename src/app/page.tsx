"use client";
import { CardsContainer } from "@/styles/Containers.styled";
import { usePathname } from "next/navigation";
import Card from "@/components/containers/Card";
import PlainLinkWrapper from "@/components/custom-links/PlainLinkWrapper";
import {
    image_missing_image,
    mandelbrot_thumbnail_image,
    a_star_algorithm_image,
} from "@/components/Images";

export default function AboutMePage() {
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
        <CardsContainer $mh="28px">
            {projects.map((project, id) => (
                <PlainLinkWrapper key={id} href={`${pathname}${project.slug}`}>
                    <Card
                        imagePath={project.imagePath ?? image_missing_image}
                        title={project.title}
                        description={project.description}
                    ></Card>
                </PlainLinkWrapper>
            ))}
        </CardsContainer>
    );
}
