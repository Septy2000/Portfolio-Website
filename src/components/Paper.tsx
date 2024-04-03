"use client";
import React from "react";
import styled from "styled-components";

interface PaperProps {
    elevation?: number;
    children: React.ReactNode;
}

const StyledPaper = styled.div<{ elevation?: number }>`
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    box-shadow: ${({ elevation }) => (elevation ? `0px ${elevation}px ${2 * elevation}px rgba(0, 0, 0, 0.1)` : "none")};
    border-radius: 8px;
    padding: 20px;
`;

function Paper({ children, elevation }: PaperProps) {
    return <StyledPaper elevation={elevation}>{children}</StyledPaper>;
}

export default Paper;
