"use client";
import styled, { css } from "styled-components";

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium} 0;
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

export const HorizontalScrollContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar */
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    padding: 0 calc(50vw - 10rem);
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.screen.large}) {
        padding: 0 calc(50vw - 17.5rem);
        gap: 4rem;
    }
`;

export const ScrollToExperienceHeader = styled.h2<{ $inView: boolean }>`
    margin-bottom: ${({ theme }) => theme.margin.medium};
    color: ${({ theme }) => theme.colors.text.primary};
    text-shadow: ${({ $inView, theme }) =>
        $inView ? "none" : `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}`};
    text-align: center;
`;
