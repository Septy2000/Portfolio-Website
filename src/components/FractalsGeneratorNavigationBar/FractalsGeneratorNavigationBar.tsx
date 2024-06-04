import React from "react";
import * as Styled from "./FractalsGeneratorNavigationBar.styled";
import { Header } from "../NavigationBar/NavigationBar.styled";

export default function FractalsGeneratorNavigationBar() {
    return (
        <Header>
            <Styled.NavigationLink href="/">
                <Styled.BackIcon /> back
            </Styled.NavigationLink>
        </Header>
    );
}
