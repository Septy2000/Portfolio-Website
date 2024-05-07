import { usePathname } from "next/navigation";
import { PlainLinkWrapper } from "@/components/wrappers/PlainLinkWrapper/PlainLinkWrapper.styled";
import * as Cards from "@/components/containers/CardsContainer/CardsContainer.styled";
import Card from "@/components/containers/Card/Card";
import {
    image_missing_src,
    mandelbrot_thumbnail_src,
    a_star_algorithm_src,
} from "@/components/images/Images";

export default function ProjectsSection() {
    const pathname = usePathname();
    const projects = [
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_src,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },

        {
            title: "A* Algorithm Visualiser",
            slug: "fractals-explorer",
            imagePath: a_star_algorithm_src,
            description: "Visualise and experiment with the A* algorithm",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_src,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_src,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_src,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
        {
            title: "Fractals Explorer",
            slug: "fractals-explorer",
            imagePath: mandelbrot_thumbnail_src,
            description:
                "Explore the Mandelbrot set and experiment with Perlin noise art",
        },
    ];
    return (
        <Cards.Container>
            {projects.map((project, id) => (
                <PlainLinkWrapper key={id} href={`${pathname}${project.slug}`}>
                    <Card
                        imagePath={project.imagePath ?? image_missing_src}
                        title={project.title}
                        description={project.description}
                    ></Card>
                </PlainLinkWrapper>
            ))}
        </Cards.Container>
    );
}
