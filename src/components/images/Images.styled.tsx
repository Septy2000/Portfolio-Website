"use client";
import Image from "next/image";
import styled from "styled-components";

export const PortraitImage = styled(Image)`
    border: ${({ theme }) =>
        `${theme.border.xlarge} solid ${theme.colors.surface.secondary}`};
    border-radius: 50%;
`;

export const ExperienceImage = styled(Image)`
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    border-radius: 50%;
    transition: transform 0.2s, border 0.2s;
    &:hover {
        transform: scale(1.2);
        border: ${({ theme }) =>
            `${theme.border.large} solid ${theme.colors.surface.secondary}`};
    }
`;
