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
    align-items: start;
    width: 100%;
    margin: ${({ theme }) => `${theme.margin.xlarge} 0px`};
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectItemContainer = styled.div`
    padding: ${({ theme }) => theme.padding.small};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) =>
            theme.colors.surface.primary_shade_1};
    }

    &:active {
        background-color: ${({ theme }) =>
            theme.colors.surface.primary_shade_2};
    }
`;

export const ProjectItemTitle = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
`;
