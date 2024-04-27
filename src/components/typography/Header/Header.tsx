import React from "react";

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary" | "tertiary" | string;
type HeaderProps = {
    size?: Size;
    color: Color;
    children: React.ReactNode;
    m?: string;
};
import * as Styled from "./Header.styled";

export function Header({ children, size, color, m }: HeaderProps) {
    let StyledHeader;
    switch (size) {
        case "small":
            StyledHeader = Styled.HeaderSmall;
            break;
        case "medium":
            StyledHeader = Styled.HeaderMedium;
            break;
        case "large":
            StyledHeader = Styled.HeaderLarge;
            break;
        default:
            StyledHeader = Styled.HeaderLarge;
            break;
    }
    return (
        <React.Fragment>
            <StyledHeader color={color} $m={m}>
                {children}
            </StyledHeader>
        </React.Fragment>
    );
}
