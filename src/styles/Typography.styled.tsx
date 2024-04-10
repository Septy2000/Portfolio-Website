"use client";
import styled, { DefaultTheme } from "styled-components";

function determineColor(color: string, theme: DefaultTheme) {
    switch (color) {
        case "primary":
            return theme.colors.text.primary;
        case "secondary":
            return theme.colors.text.secondary;
        case "tertiary":
            return theme.colors.text.tertiary;
        default:
            return color;
    }
}

export const HeaderLargeStyled = styled.h1<{ color: string }>`
    color: ${({ theme, color }) => determineColor(color, theme)};
`;

export const HeaderMediumStyled = styled.h2<{ color: string }>`
    color: ${({ theme, color }) => determineColor(color, theme)};
`;

export const HeaderSmallStyled = styled.h3<{ color: string }>`
    color: ${({ theme, color }) => determineColor(color, theme)};
`;

export const TextStyle = styled.p<{ color: string }>`
    color: ${({ theme, color }) => determineColor(color, theme)};
`;
