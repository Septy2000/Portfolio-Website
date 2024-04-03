"use client";
import styled from "styled-components";

export const StyledPaper = styled.div<{ elevation?: number }>`
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    box-shadow: ${({ elevation }) => (elevation ? `${elevation}px ${elevation}px ${elevation}px` : "2px 2px 2px")};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => theme.padding.large};
    margin: ${({ theme }) => theme.margin.large};
`;
