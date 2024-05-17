"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
    background: ${({ theme }) => theme.colors.surface.secondary};
`;

export const ScrollToExperienceHeader = styled.h1`
    margin-bottom: ${({ theme }) => theme.margin.medium};
    color: ${({ theme }) => theme.colors.text.secondary};
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
        background: ${({ theme }) => theme.colors.surface.primary};
        top: 0;
        bottom: 0;
        left: 50%;
        @media (max-width: ${({ theme }) => theme.screen.medium}) {
            left: 40px;
        }
        margin-left: -2px;
        z-index: 0;
    }

    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.surface.primary};
        top: 0;
        left: 50%;
        @media (max-width: ${({ theme }) => theme.screen.medium}) {
            left: 40px;
        }
        margin-left: -15px;
        z-index: 0;
    }
`;

export const TimelineItemGroup = styled.div<{ $index: number }>`
    display: grid;
    grid-template-columns: 1fr min-content 1fr;

    grid-template-areas: ${({ $index }) =>
        $index % 2 === 0
            ? "'filler icon description'"
            : "'description icon filler'"};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-columns: min-content 1fr;
        grid-template-areas: "icon description";
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
        padding-left: 0px;
    }
    position: relative;
    grid-area: icon;
`;

export const TimelineIconItemRight = styled(TimelineIconItem)`
    &:after {
        content: "";
        position: absolute;
        width: 64px;
        z-index: -1;
        height: 4px;
        top: 50%;
        right: 0;
        background: ${({ theme }) => theme.colors.surface.primary};
    }
`;

export const TimelineIconItemLeft = styled(TimelineIconItem)`
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        &:before {
            content: "";
            position: absolute;
            width: 64px;
            z-index: -1;
            height: 4px;
            top: 50%;
            left: 0;
            background: ${({ theme }) => theme.colors.surface.primary};
        }
    }
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        &:after {
            content: "";
            position: absolute;
            width: 64px;
            z-index: -1;
            height: 4px;
            top: 50%;
            right: 0;
            background: ${({ theme }) => theme.colors.surface.primary};
        }
    }
`;

export const GridFiller = styled.div`
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-area: left;
    }
`;
