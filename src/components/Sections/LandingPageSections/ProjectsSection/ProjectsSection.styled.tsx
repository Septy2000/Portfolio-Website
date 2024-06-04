"use client";
import styled, { css } from "styled-components";

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.xlarge} ${theme.padding.medium}`};
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

export const ProjectsSectionTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.medium};
`;

export const ProjectsContainer = styled.div`
    display: grid;
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-rows: min-content 1fr;
    }
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }
    gap: ${({ theme }) => theme.margin.large};
    align-items: start;
    width: 100%;
    max-width: ${({ theme }) => theme.screen.xlarge};
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProjectItemContainer = styled.div<{ $isSelected: boolean }>`
    padding: ${({ theme }) => theme.padding.small};
    cursor: pointer;
    user-select: none;
    width: 100%;
    background: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.surface.primary_shade.dark_1 : theme.colors.surface.primary};

    transition: ${({ $isSelected }) => ($isSelected ? "box-shadow 0.4s" : "box-shadow 1s")};
    box-shadow: ${({ theme, $isSelected }) =>
        $isSelected
            ? `inset 5px 5px 5px -1px ${theme.colors.surface.primary_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.surface.primary_shade.dark_1}`
            : "none"};
    h2 {
        transition: ${({ $isSelected }) => ($isSelected ? "text-shadow 0.4s" : "text-shadow 1s")};
        text-shadow: ${({ theme, $isSelected }) =>
            $isSelected ? `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}` : "none"};
    }
`;

export const ProjectItemTitle = styled.h2`
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text.primary};
`;
