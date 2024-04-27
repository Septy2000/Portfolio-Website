// components/Layout.tsx
"use client";
import React from "react";
import * as Styled from "./NavigationBar.styled";
const pages = ["About", "Projects"];

export default function NavigationBar() {
    return (
        <Styled.Header>
            <h1>Name</h1>
            <Styled.NavigationContainer>
                {pages.map((page, id) => (
                    <Styled.NavigationLink key={id} href={page}>
                        {page}
                    </Styled.NavigationLink>
                ))}
            </Styled.NavigationContainer>
        </Styled.Header>
    );
}
