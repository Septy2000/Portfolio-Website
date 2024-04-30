"use client";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.margin.medium};
    margin-top: 40vh;
`;

export const ScrollToExperienceHeader = styled.h1`
    margin: auto;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export const TimelineItem = styled.div`
    width: 30%;
    border: ${({ theme }) =>
        `${theme.border.small} solid ${theme.colors.orange}`};
`;

export const Timeline = styled.div`
    ${TimelineItem} {
        border-left: ${({ theme }) =>
            `${theme.border.xxlarge} solid ${theme.colors.orange}`};
        padding-left: 20px;
        &:before {
            content: "";
            position: absolute;
            width: 60px;
            height: 10px;
            background-color: ${({ theme }) => theme.colors.orange};
        }
    }
`;
