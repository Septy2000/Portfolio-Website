"use client";
import styled, { css } from "styled-components";

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
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
    overflow: hidden;
`;

export const HorizontalScrollContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.padding.large};
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 100%;
    padding: ${({ theme }) => theme.padding.medium} 0;

    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar */
    }

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
`;

export const ScrollToExperienceHeader = styled.h2<{ $inView: boolean }>`
    margin-bottom: ${({ theme }) => theme.margin.medium};
    color: ${({ theme }) => theme.colors.text.primary};
    text-shadow: ${({ $inView, theme }) =>
        $inView ? "none" : `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}`};
    text-align: center;
`;

export const TimelineCard = styled.div`
    flex: 0 0 auto;
    width: 300px;
    background: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => `0 4px 8px ${theme.colors.surface.primary_shade.dark_2}`};
    padding: ${({ theme }) => theme.padding.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.padding.small};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const CardBody = styled.div`
    margin-top: ${({ theme }) => theme.margin.small};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.9rem;
`;

export const TimelineIcon = styled.div``;
