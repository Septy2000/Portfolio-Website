import * as Styled from "./AboutSection.styled";

export default function AboutContainer() {
    const nameHeaderText = "hi, I'm Septi";
    const bodyText =
        "I'm a junior software engineer with a passion for technology. I enjoy learning new things and experimenting with different technologies.";

    return (
        <Styled.Container>
            <Styled.NameHeader>{nameHeaderText}</Styled.NameHeader>
            <Styled.Body>{bodyText}</Styled.Body>
        </Styled.Container>
    );
}
