"use client";
import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    height: 100%;
    padding: ${({ theme }) => theme.padding.small};
`;
