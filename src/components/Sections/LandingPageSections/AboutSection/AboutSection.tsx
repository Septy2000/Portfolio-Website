"use client";
import * as Styled from "./AboutSection.styled";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = forwardRef<HTMLDivElement>((props, aboutRef) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const description = `
    I'm Septimiu-Iulian Călin, a dedicated junior software engineer based in London, UK. 
    With a First-Class Honours degree in Computer Science from King’s College London, 
    I have experience in both iOS and web development. At Go City, I contributed to the iOS app development, 
    focusing on MVVM+C architecture, Agile methodologies, and cross-functional teamwork. 
    My projects range from a waste management platform in partnership with AWS to a procedurally generated art gallery. 
    I'm passionate about learning new technologies and constantly innovating. 
    Let's connect and collaborate on exciting projects!
    `;

    const skills = [
        "Languages: Swift, JavaScript, Python, C++, Java, Scala",
        "iOS Stack: SwiftUI, Combine, XCTest, Xcode Cloud",
        "Web Stack: React, React Router, Apollo Client, MaterialUI, HTML, CSS",
        "Databases: SQL",
        "Other: Git, CLI",
    ];

    return (
        <Styled.Container ref={ref} $inView={inView}>
            <Styled.Title>about me</Styled.Title>
            <Styled.Body>{description}</Styled.Body>
            <Styled.Section>
                <Styled.SectionHeader>Skills</Styled.SectionHeader>
                <ul>
                    {skills.map((skill, index) => (
                        <Styled.ListItem key={index}>{skill}</Styled.ListItem>
                    ))}
                </ul>
            </Styled.Section>
        </Styled.Container>
    );
});

export default AboutSection;
