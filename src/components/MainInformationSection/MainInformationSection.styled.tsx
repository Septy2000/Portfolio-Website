"use client";
import styled, { css } from "styled-components";

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.padding.medium};
    height: 65vh;
    box-shadow: ${({ theme }) =>
        `inset 10px 10px 10px -1px ${theme.colors.surface.primary_shade.dark_3}, inset -10px -10px 10px -1px ${theme.colors.surface.primary_shade.dark_1}`};
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    transition: box-shadow 0.5s, background 0.5s;
    ${({ $inView }) =>
        $inView &&
        css`
            box-shadow: none;
            background: ${({ theme }) => theme.colors.surface.primary};
        `}
`;

export const InfoFlexContainer = styled.div`
    display: flex;
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;
