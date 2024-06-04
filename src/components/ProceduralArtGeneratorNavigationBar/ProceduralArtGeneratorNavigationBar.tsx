import React from "react";
import * as Styled from "./ProceduralArtGeneratorNavigationBar.styled";
import { Header } from "../NavigationBar/NavigationBar.styled";

export default function ProceduralArtGeneratorNavigationBar() {
    return (
        <Header>
            <Styled.NavigationLink href="/">
                <Styled.BackIcon /> back
            </Styled.NavigationLink>
        </Header>
    );
}
