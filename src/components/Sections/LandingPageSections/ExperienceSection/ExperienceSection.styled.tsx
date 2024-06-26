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
`;

export const ScrollToExperienceHeader = styled.h2<{ $inView: boolean }>`
    margin-bottom: ${({ theme }) => theme.margin.medium};
    color: ${({ theme }) => theme.colors.text.primary};
    text-shadow: ${({ $inView, theme }) =>
        $inView ? "none" : `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}`};
    text-align: center;
`;

export const TimelineGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.padding.medium};
    position: relative;
    padding-top: 128px;
    padding-bottom: 128px;
    max-width: ${({ theme }) => theme.screen.xlarge};
    &:after {
        content: "";
        position: absolute;
        width: 4px;
        background: ${({ theme }) => theme.colors.surface.secondary};
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -2px;
        z-index: 0;
    }

    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.surface.secondary};
        top: 0;
        left: 50%;
        margin-left: -15px;
        z-index: 0;
    }
`;

export const TimelineItemGroup = styled.div<{ $index: number }>`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr min-content 1fr;
    grid-template-areas: ${({ $index }) =>
        $index % 2 === 0 ? "'filler icon description'" : "'description icon filler'"};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-rows: 1fr min-content;
        grid-template-columns: 1fr;
        grid-template-areas: "icon" "description";
        justify-items: center;
        row-gap: ${({ theme }) => theme.padding.medium};
    }
    align-items: center;
    width: 100%;
    padding-top: ${({ theme }) => theme.padding.small};
    padding-bottom: ${({ theme }) => theme.padding.small};
    z-index: 1;
`;

const TimelineIconItem = styled.div`
    padding-left: ${({ theme }) => theme.padding.large};
    padding-right: ${({ theme }) => theme.padding.large};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        padding: 0px;
    }
    grid-area: icon;
    position: relative;
`;

export const TimelineIconItemRight = styled(TimelineIconItem)`
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        &:after {
            content: "";
            position: absolute;
            width: 64px;
            height: 4px;
            top: 50%;
            right: 0;
            background: ${({ theme }) => theme.colors.surface.secondary};
            z-index: -1;
        }
    }
`;

export const TimelineIconItemLeft = styled(TimelineIconItem)`
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        &:before {
            content: "";
            position: absolute;
            width: 64px;
            height: 4px;
            top: 50%;
            left: 0;
            background: ${({ theme }) => theme.colors.surface.secondary};
            z-index: -1;
        }
    }
`;

export const GridFiller = styled.div`
    grid-area: filler;
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;
