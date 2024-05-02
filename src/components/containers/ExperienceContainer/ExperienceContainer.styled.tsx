"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${({ theme }) => theme.margin.medium};
`;

export const ScrollToExperienceHeader = styled.h1`
    margin: auto;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TimelineGroup = styled.div<{ index: number }>`
    display: flex;
    flex-direction: ${({ index }) => (index % 2 === 1 ? "row" : "row-reverse")};
    align-items: center;
`;
