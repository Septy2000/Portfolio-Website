"use client";
import styled from "styled-components";

export const TimelineCard = styled.div<{ $inView: boolean }>`
    flex: 0 0 auto;
    width: 20rem;
    transition: box-shadow 0.5s, background 0.5s;
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme, $inView }) =>
        $inView
            ? `inset 5px 5px 5px -1px ${theme.colors.surface.primary_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.surface.primary_shade.dark_1}`
            : "none"};
    padding: ${({ theme }) => theme.padding.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: ${({ theme }) => theme.screen.large}) {
        width: 35rem;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.25rem;
`;

export const Company = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const Date = styled.h4`
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const Location = styled.h4`
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const Responsibilities = styled.ul`
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6; /* Increased for readability */
    padding-left: ${({ theme }) => theme.padding.small};
    font-size: 1rem;
    list-style-position: inside; /* Ensures list aligns nicely */
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.padding.small};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: ${({ theme }) => theme.margin.small} 0;
`;

export const CardBody = styled.div`
    margin-top: ${({ theme }) => theme.margin.small};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.9rem;
`;

export const TimelineIcon = styled.div``;
