import React, { useState } from "react";
import * as Styled from "./NavigationBar.styled";

type Page = {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
};

const NAVBAR_HEIGHT = 70; // Approximate height of the navbar

export default function NavigationBar({
    aboutRef,
    projectsRef,
    experienceRef,
}: {
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

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

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - NAVBAR_HEIGHT;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <Styled.Header>
            <Styled.Name>{topLeftText}</Styled.Name>
            <Styled.NavigationContainer>
                {pages.map((page, id) => (
                    <Styled.NavigationLink key={id} onClick={() => scrollToSection(page.ref)}>
                        {page.name}
                    </Styled.NavigationLink>
                ))}
            </Styled.NavigationContainer>
            <Styled.HamburgerIcon onClick={() => setMenuOpen(true)} />
            <Styled.MobileMenu className={menuOpen ? "open" : ""}>
                <Styled.CloseIcon onClick={() => setMenuOpen(false)} />
                {pages.map((page, id) => (
                    <Styled.MobileNavigationLink
                        key={id}
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToSection(page.ref);
                        }}
                    >
                        {page.name}
                    </Styled.MobileNavigationLink>
                ))}
            </Styled.MobileMenu>
        </Styled.Header>
    );
}
