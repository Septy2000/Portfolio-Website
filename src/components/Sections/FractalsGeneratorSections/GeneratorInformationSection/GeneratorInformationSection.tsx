import * as Styled from "./GeneratorInformationSection.styled";

export default function GeneratorInformationSection() {
    const info = [
        "Click and drag to select an area you want to inspect closer when using Mandelbrot or Julia algorithms",
    ];

    return (
        <Styled.Container>
            {info.map((text, id) => (
                <Styled.InfoContainer key={id}>
                    <Styled.InfoIcon />
                    <Styled.InfoText>{text}</Styled.InfoText>
                </Styled.InfoContainer>
            ))}
        </Styled.Container>
    );
}
