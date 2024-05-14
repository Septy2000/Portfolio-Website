"use client";
import React, { useRef } from "react";
import * as Styled from "./NavigationBar.styled";

type Page = {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
};

export default function NavigationBar({
    aboutRef,
    projectsRef,
    experienceRef,
}: {
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
}) {
    const pages: Page[] = [
        {
            name: "about",
            ref: aboutRef,
        },
        {
            name: "experience",
            ref: experienceRef,
        },
        {
            name: "projects",
            ref: projectsRef,
        },
    ];

    const topLeftText = "me.";

    return (
        <Styled.Header>
            <Styled.Name>{topLeftText}.</Styled.Name>
            <Styled.NavigationContainer>
                {pages.map((page, id) => (
                    <Styled.NavigationLink
                        key={id}
                        onClick={() => {
                            page.ref.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        {page.name}
                    </Styled.NavigationLink>
                ))}
            </Styled.NavigationContainer>
        </Styled.Header>
    );
}
