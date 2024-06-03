"use client";
import * as Styled from "./AboutSection.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function AboutContainer() {
    const nameHeaderText = "hi, I'm Septi";
    const bodyText = "i'm a junior software engineer based in London, UK.";
    const connectCta = "Let's connect and get in touch!";

    const links = [
        {
            href: "https://www.linkedin.com/in/s-calin/",
            icon: <Styled.Icon as={BsLinkedin} />,
        },
        {
            href: "https://www.github.com/septy2000",
            icon: <Styled.Icon as={BsGithub} />,
        },
        {
            href: "mailto:calin.septimiu28@gmail.com",
            icon: <Styled.Icon as={MdEmail} />,
        },
    ];

    return (
        <Styled.Container>
            <Styled.NameHeader>{nameHeaderText}</Styled.NameHeader>
            <Styled.Body>{bodyText}</Styled.Body>
            <Styled.ConnectCta>{connectCta}</Styled.ConnectCta>
            <Styled.ConnectLinks>
                {links.map((link, index) => (
                    <Styled.LinkWrapper key={index} href={link.href}>
                        {link.icon}
                    </Styled.LinkWrapper>
                ))}
            </Styled.ConnectLinks>
        </Styled.Container>
    );
}
