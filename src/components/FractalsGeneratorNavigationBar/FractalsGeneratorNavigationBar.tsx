"use client";
import React from "react";
import * as Styled from "./FractalsGeneratorNavigationBar.styled";

export default function FractalsGeneratorNavigationBar() {
    return (
        <Styled.Header>
            <Styled.NavigationLink href="/">
                <Styled.BackIcon /> back
            </Styled.NavigationLink>
        </Styled.Header>
    );
}
