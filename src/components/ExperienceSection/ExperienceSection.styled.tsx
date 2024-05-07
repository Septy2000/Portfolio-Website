"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${({ theme }) => theme.margin.medium};
`;

export const ScrollToExperienceHeader = styled.h1`
    margin-bottom: ${({ theme }) => theme.margin.medium};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        font-size: 1.5rem;
    }
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.surface.secondary};
`;

export const TimelineGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
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
        z-index: -1;
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
    }
`;

export const TimelineItemGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    align-items: center;
    width: 100%;
    padding-top: ${({ theme }) => theme.padding.small};
    padding-bottom: ${({ theme }) => theme.padding.small};
`;

const TimelineIconItem = styled.div`
    padding-left: ${({ theme }) => theme.padding.large};
    padding-right: ${({ theme }) => theme.padding.large};
    position: relative;
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
        background: ${({ theme }) => theme.colors.surface.secondary};
    }
`;

export const TimelineIconItemLeft = styled(TimelineIconItem)`
    &:before {
        content: "";
        position: absolute;
        width: 64px;
        z-index: -1;
        height: 4px;
        top: 50%;
        left: 0;
        background: ${({ theme }) => theme.colors.surface.secondary};
    }
`;

export const GridFiller = styled.div``;
