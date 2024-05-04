"use client";
import styled from "styled-components";
export const Container = styled.div<{ $index: number }>`
    width: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    height: 100%;
    padding: ${({ theme }) => theme.padding.small};
    margin-left: ${({ $index }) => ($index % 2 === 1 ? "30px" : "0px")};
    margin-right: ${({ $index }) => ($index % 2 === 1 ? "0px" : "30px")};
    &:before {
        content: "";
        position: absolute;
        width: 30px;
        z-index: -1;
        height: 4px;
        top: 50%;
        left: 80px;
        background: ${({ $index, theme }) =>
            $index % 2 === 1 ? theme.colors.surface.secondary : "transparent"};
    }

    &:after {
        content: "";
        position: absolute;
        width: 30px;
        z-index: -1;
        height: 4px;
        top: 50%;
        right: 80px;
        background: ${({ $index, theme }) =>
            $index % 2 === 1 ? "transparent" : theme.colors.surface.secondary};
    }
`;
