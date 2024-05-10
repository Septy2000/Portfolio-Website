import * as Styled from "./ProjectCard.styled";
import { Project } from "@/components/ProjectsSection/ProjectsSection";
import { missing_image_src } from "@/components/images/Images";
export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Styled.Container>
            <Styled.Icon
                src={project.imagePath ?? missing_image_src}
                width={400}
                height={300}
                alt={"Project icon"}
                priority
            />
            <Styled.Header>{project.title}</Styled.Header>
            <Styled.Body>{project.description}</Styled.Body>
            <Styled.ButtonsContainer>
                <Styled.Button>view project</Styled.Button>
                <Styled.Button>view code</Styled.Button>
            </Styled.ButtonsContainer>
        </Styled.Container>
    );
}
