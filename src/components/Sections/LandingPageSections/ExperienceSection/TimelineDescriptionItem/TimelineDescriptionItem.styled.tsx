"use client";
import styled from "styled-components";
export const Container = styled.div<{ $index: number }>`
    width: 100%; /* Adjusted for responsiveness */
    max-width: 800px; /* Ensure cards don't get too wide */
    min-height: 300px; /* Ensure a consistent height */
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures content is distributed nicely */
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border: ${({ theme }) => `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    box-shadow: ${({ theme }) => `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}`};
    padding: ${({ theme }) => theme.padding.medium}; /* Increased padding for better spacing */
    margin: 16px auto; /* Add spacing between cards */
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Company = styled.h3`
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Date = styled.h4`
    color: ${({ theme }) => theme.colors.text.tertiary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Location = styled.h4`
    color: ${({ theme }) => theme.colors.text.tertiary};
    margin-bottom: ${({ theme }) => theme.margin.small};
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
    height: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    margin: ${({ theme }) => theme.margin.medium} 0;
`;
