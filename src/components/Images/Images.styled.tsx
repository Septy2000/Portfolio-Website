"use client";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

export const PortraitImage = styled(Image)`
    border-radius: 50%;
    object-fit: cover;
    border: ${({ theme }) => `${theme.border.large} solid ${theme.colors.surface.secondary}`};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    /* Hover effect */
    &:hover {
        transform: scale(1.02);
        box-shadow: ${({ theme }) => theme.shadows.strong};
        border-color: ${({ theme }) => theme.colors.orange};
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: min(280px, 70vw);
        height: min(280px, 70vw);
    }

    @media (max-width: ${({ theme }) => theme.screen.small}) {
        width: min(220px, 60vw);
        height: min(220px, 60vw);
    }
`;

export const ExperienceImage = styled(Image)`
    width: 50px;
    height: 50px;
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};
    transition: all 0.3s ease;
    object-fit: contain;
`;

export const ProjectImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    /* Loading placeholder effect */
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.surface.primary_shade.dark_1} 0%,
        ${({ theme }) => theme.colors.surface.primary_shade.dark_2} 50%,
        ${({ theme }) => theme.colors.surface.primary_shade.dark_1} 100%
    );
    background-size: 200% 100%;
`;

export const ImagePlaceholder = styled.div`
    width: 100%;
    aspect-ratio: 16/10;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.surface.primary_shade.dark_1} 0%,
        ${({ theme }) => theme.colors.surface.primary_shade.dark_2} 50%,
        ${({ theme }) => theme.colors.surface.primary_shade.dark_1} 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: ${({ theme }) => theme.borderRadius.small};
`;
