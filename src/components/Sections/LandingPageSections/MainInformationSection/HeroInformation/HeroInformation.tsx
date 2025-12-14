import * as Styled from "./HeroInformation.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function HeroInformation() {
    const links = [
        {
            href: "https://www.linkedin.com/in/s-calin/",
            icon: <Styled.Icon as={BsLinkedin} />,
            label: "LinkedIn",
        },
        {
            href: "https://www.github.com/septy2000",
            icon: <Styled.Icon as={BsGithub} />,
            label: "GitHub",
        },
        {
            href: "mailto:calin.septimiu28@gmail.com",
            icon: <Styled.Icon as={MdEmail} />,
            label: "Email",
        },
    ];

    return (
        <Styled.Container>
            <Styled.Greeting>Hello there</Styled.Greeting>
            <Styled.NameHeader>I'm Septi</Styled.NameHeader>
            <Styled.RoleTag>Software Engineer • London, UK</Styled.RoleTag>
            <Styled.Body>
                A passionate developer crafting <strong>beautiful digital experiences</strong>. From
                iOS apps to web platforms, I love bringing ideas to life through clean, thoughtful
                code.
            </Styled.Body>
            <Styled.ConnectCta>Let's connect and create something amazing</Styled.ConnectCta>
            <Styled.ConnectLinks>
                {links.map((link, index) => (
                    <Styled.LinkWrapper
                        key={index}
                        href={link.href}
                        aria-label={link.label}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    >
                        {link.icon}
                    </Styled.LinkWrapper>
                ))}
            </Styled.ConnectLinks>
        </Styled.Container>
    );
}
