"use client";
import styled from "styled-components";
import {
    CustomStylingProps,
    customPropertiesMixin,
} from "@/styles/CustomProperties";
import { determineColor } from "../helper-functions";

export const HeaderLarge = styled.h1<{ color: string } & CustomStylingProps>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;

export const HeaderMedium = styled.h2<{ color: string } & CustomStylingProps>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;

export const HeaderSmall = styled.h3<{ color: string } & CustomStylingProps>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;
