"use client";
import styled from "styled-components";

export const StyledPaper = styled.div<{ elevation?: number }>`
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    box-shadow: ${({ elevation }) => (elevation ? `0px ${elevation}px ${2 * elevation}px rgba(0, 0, 0, 0.1)` : "none")};
    border-radius: 24px;
    padding: 20px;
`;
