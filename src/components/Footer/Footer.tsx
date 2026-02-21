"use client";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import * as Styled from "./Footer.styled";

export default function Footer() {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Copyright>Septimiu Calin</Styled.Copyright>
                <Styled.SocialLinks>
                    <Styled.SocialLink
                        href="https://www.linkedin.com/in/s-calin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <BsLinkedin />
                    </Styled.SocialLink>
                    <Styled.SocialLink
                        href="https://www.github.com/septy2000"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <BsGithub />
                    </Styled.SocialLink>
                    <Styled.SocialLink href="mailto:calin.septimiu28@gmail.com" aria-label="Email">
                        <MdEmail />
                    </Styled.SocialLink>
                </Styled.SocialLinks>
            </Styled.Content>
        </Styled.Container>
    );
}
