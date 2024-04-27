"use client";
import React from "react";
import * as Styled from "./NavigationBar.styled";

export default function NavigationBar() {
    const pages = ["about", "projects"];

    return (
        <Styled.Header>
            <Styled.Name>me.</Styled.Name>
            <Styled.NavigationContainer>
                {pages.map((page, id) => (
                    <Styled.NavigationLink key={id} href={page.toLowerCase()}>
                        {page}
                    </Styled.NavigationLink>
                ))}
            </Styled.NavigationContainer>
        </Styled.Header>
    );
}
