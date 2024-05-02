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
`;

