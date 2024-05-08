"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${({ theme }) => `${theme.margin.xlarge} ${theme.margin.medium}`};
`;

export const ProjectsSectionTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 700px;
    margin: ${({ theme }) => `${theme.margin.xlarge} 0px`};
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.margin.medium};
`;

export const ProjectItemContainer = styled.div<{ $isSelected: boolean }>`
    padding: ${({ theme }) => theme.padding.small};
    cursor: pointer;
    user-select: none;
    background: ${({ theme, $isSelected }) =>
        $isSelected
            ? theme.colors.surface.primary_shade_1
            : theme.colors.surface.primary};

    transition: ${({ $isSelected }) =>
        $isSelected
            ? "box-shadow 0.4s" /* Transition duration when selected */
            : "box-shadow 1s"}; /* Transition duration when not selected */
    box-shadow: ${({ theme, $isSelected }) =>
        $isSelected
            ? `inset 5px 5px 5px -1px ${theme.colors.surface.primary_shade_3}, inset -5px -5px 5px -1px ${theme.colors.surface.primary_shade_1}`
            : "none"};
    p {
        transition: ${({ $isSelected }) =>
            $isSelected ? "text-shadow 0.4s" : "text-shadow 1s"};
        text-shadow: ${({ theme, $isSelected }) =>
            $isSelected
                ? `5px 5px 10px ${theme.colors.surface.primary_shade_3}`
                : "none"};
    }
`;

export const ProjectItemTitle = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
`;
