"use client";
import styled from "styled-components";

function calculateSize(size: string): string {
    switch (size) {
        case "small":
            return "20%";
        case "medium":
            return "40%";
        case "large":
            return "80%";
        default:
            return "40%";
    }
}

export const PaperStyled = styled.div<{ $elevation?: number }>`
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    box-shadow: ${({ $elevation }) =>
        $elevation
            ? `${$elevation}px ${$elevation}px ${$elevation}px`
            : "2px 2px 2px"};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => theme.padding.large};
`;
