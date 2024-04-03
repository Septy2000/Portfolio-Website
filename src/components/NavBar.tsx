// components/Layout.tsx
"use client";
import React from "react";
import { Header, Nav } from "@/styles/NavBar.styled";
import NavLink from "./custom-links/NavLink";
const pages = ["About", "Projects"];

export default function NavBar() {
    return (
        <Header>
            <h1>Septimiu</h1>
            <Nav>
                {pages.map((page, id) => (
                    <NavLink key={id} href={page}>
                        {page}
                    </NavLink>
                ))}
            </Nav>
        </Header>
    );
}
