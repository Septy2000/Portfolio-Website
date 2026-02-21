import React, { useState, useEffect } from "react";
import * as Styled from "./NavigationBar.styled";

type Page = {
    name: string;
    ref: React.RefObject<HTMLDivElement | null>;
};

const NAVBAR_HEIGHT = 70; // Approximate height of the navbar

export default function NavigationBar({
    aboutRef,
    projectsRef,
    experienceRef,
}: {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    experienceRef: React.RefObject<HTMLDivElement | null>;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            // Store current scroll position
            const scrollY = window.scrollY;
            document.body.classList.add("menu-open");
            document.body.style.top = `-${scrollY}px`;
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.classList.remove("menu-open");
            document.body.style.top = "";
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove("menu-open");
            document.body.style.top = "";
        };
    }, [menuOpen]);

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

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
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
