"use client";
import styled from "styled-components";

export const Paper = styled.div<{ $elevation?: number }>`
    width: 100%;
    max-width: 500px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: ${({ $elevation }) =>
        $elevation
            ? `${$elevation}px ${$elevation}px ${$elevation}px`
            : "2px 2px 2px"};
    padding: ${({ theme }) => theme.padding.small};
`;
