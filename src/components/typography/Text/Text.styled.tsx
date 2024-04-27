"use client";
import styled from "styled-components";
import { determineColor } from "../helper-functions";
import {
    CustomStylingProps,
    customPropertiesMixin,
} from "@/styles/CustomProperties";

export const Text = styled.p<{ color: string } & CustomStylingProps>`
    color: ${({ theme, color }) => determineColor(color, theme)};
    ${customPropertiesMixin}
`;
