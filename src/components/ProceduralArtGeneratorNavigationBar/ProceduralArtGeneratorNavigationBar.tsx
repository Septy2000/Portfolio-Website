import React from "react";
import * as Styled from "./ProceduralArtGeneratorNavigationBar.styled";

export default function ProceduralArtGeneratorNavigationBar() {
    return (
        <Styled.Header>
            <Styled.NavigationLink href="/">
                <Styled.BackIcon /> back
            </Styled.NavigationLink>
        </Styled.Header>
    );
}
