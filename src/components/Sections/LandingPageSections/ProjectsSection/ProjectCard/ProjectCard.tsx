import * as Styled from "./ProjectCard.styled";
import { Project } from "@/components/Sections/LandingPageSections/ProjectsSection/ProjectsSection";
import { missing_image_src } from "@/components/Images/Images";
import { ProjectImage } from "@/components/Images/Images.styled";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Styled.Container>
            <ProjectImage
                src={project.imagePath ?? missing_image_src}
                width={400}
                height={300}
                alt={"Project icon"}
                priority
            />
            <Styled.Header>{project.title}</Styled.Header>
            <Styled.Body>{project.description}</Styled.Body>
            {project.note && <Styled.Note>{project.note}</Styled.Note>}
            <Styled.ButtonsContainer>
                {project.slug ? (
                    <Styled.ButtonLink href={`/${project.slug}`}>view project</Styled.ButtonLink>
                ) : (
                    <Styled.Button disabled>view project</Styled.Button>
                )}

                {project.code_url ? (
                    <Styled.ButtonLink href={project.code_url}>view code</Styled.ButtonLink>
                ) : (
                    <Styled.Button disabled>view code</Styled.Button>
                )}
            </Styled.ButtonsContainer>
        </Styled.Container>
    );
}
