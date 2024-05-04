"use client";
import styled from "styled-components";
import { ExperienceImage } from "@/components/images/Images.styled";

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

export const Timeline = styled.div`
    position: relative;
    width: 100%;
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

export const TimelineGroup = styled.div<{ $index: number }>`
    display: flex;
    position: relative;
    align-items: center;
    width: 50%;
    padding-top: ${({ theme }) => theme.padding.small};
    padding-bottom: ${({ theme }) => theme.padding.small};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: row;
    }
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: ${({ $index }) =>
            $index % 2 === 1 ? "row" : "row-reverse"};
    }
    left: ${({ $index }) => ($index % 2 === 1 ? "calc(50% - 40px)" : "40px")};
    margin-top: ${({ $index }) => ($index === 1 ? "128px" : "0px")};
`;
