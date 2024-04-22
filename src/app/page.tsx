"use client";
import PaperLink from "@/components/custom-links/PaperLink";
import { Header, Text } from "@/components/typography/Typography";
import { CardsContainer } from "@/styles/Containers.styled";
import { usePathname } from "next/navigation";
import Card from "@/components/containers/Card";
import PlainLink from "@/components/custom-links/PlainLink";

export default function AboutMePage() {
    const pathname = usePathname();
    const projects = [
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: "public/mandelbrot_thumbnail.png",
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "A* Algorithm Visualiser",
            slug: "a-star-algorithm-visualiser",
            imgagePath: "public/mandelbrot_thumbnail.png",
            description: "Visualise the A* algorithm in action",
        },
    ];

    return (
        <CardsContainer mh="28px">
            {projects.map((project, id) => (
                <PlainLink key={id} href={`${pathname}${projects[0].slug}`}>
                    <Card
                        imagePath="/public/mandelbrot_thumbnail.png"
                        title={project.title}
                        description={project.description}
                    ></Card>
                </PlainLink>
            ))}
        </CardsContainer>
    );
}
