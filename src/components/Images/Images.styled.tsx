"use client";
import Image from "next/image";
import styled from "styled-components";

export const PortraitImage = styled(Image)`
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: 50vw;
        height: auto;
    }

    border: ${({ theme }) => `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    border-radius: 50%;
    object-fit: cover;
`;

export const ExperienceImage = styled(Image)`
    border: ${({ theme }) => `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    border-radius: 50%;
    transition: transform 0.2s, border 0.2s;
    &:hover {
        transform: scale(1.2);
    }
    object-fit: cover;
`;

export const ProjectImage = styled(Image)`
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.surface.secondary}`};
    margin-bottom: ${({ theme }) => theme.margin.small};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    object-fit: cover;
`;
