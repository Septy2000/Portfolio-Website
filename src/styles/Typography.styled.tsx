"use client";
import styled, { DefaultTheme } from "styled-components";
import {
    CustomStylingProps,
    customPropertiesMixin,
} from "@/styles/custom-properties/CustomProperties";

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

export const HeaderLargeStyled = styled.h1<
    { color: string } & CustomStylingProps
>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;

export const HeaderMediumStyled = styled.h2<
    { color: string } & CustomStylingProps
>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;

export const HeaderSmallStyled = styled.h3<
    { color: string } & CustomStylingProps
>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;

export const TextStyle = styled.p<{ color: string } & CustomStylingProps>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;
