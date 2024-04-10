"use client";
import PaperLink from "@/components/custom-links/PaperLink";
import { Header, Text } from "@/components/typography/Typography";
import { FlexCenterContainer } from "@/styles/Container.styled";
import { usePathname } from "next/navigation";

export default function AboutMePage() {
    const pathname = usePathname();
    const projects = [
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "A* Algorithm Visualiser",
            slug: "a-star-algorithm-visualiser",
            description: "Visualise the A* algorithm in action",
        },
    ];
    console.log(`${pathname}/${projects[0].slug}`);

    return (
        <FlexCenterContainer ml="28px" mr="28px">
            {projects.map((project, id) => (
                <PaperLink
                    key={id}
                    elevation={3}
                    size="small"
                    href={`${pathname}${project.slug}`}
                >
                    <Header size="medium" color="secondary">
                        {project.title}
                    </Header>

                    <Text color="secondary">{project.description}</Text>
                </PaperLink>
            ))}
        </FlexCenterContainer>
    );
}
