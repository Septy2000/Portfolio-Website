"use client";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = styled.section<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.xxlarge} ${theme.padding.medium}`};
    position: relative;
    transition: all 0.6s ease;

    background: ${({ theme, $inView }) =>
        $inView ? theme.colors.surface.primary : theme.colors.surface.primary_shade.dark_1};

    ${({ $inView, theme }) =>
        !$inView &&
        css`
            box-shadow: ${theme.shadows.neumorphic.inset};
        `}

    /* Decorative elements */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 10%;
        right: 10%;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            ${({ theme }) => theme.colors.surface.primary_shade.dark_2} 20%,
            ${({ theme }) => theme.colors.surface.primary_shade.dark_2} 80%,
            transparent
        );
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        padding: ${({ theme }) => `${theme.padding.large} ${theme.padding.small}`};
    }
`;

export const ProjectsSectionTitle = styled.h2`
    font-family: "Nunito", sans-serif;
    font-size: ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.large};
    text-align: center;
    position: relative;
    font-weight: 700;

    &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: ${({ theme }) => theme.colors.orange};
        border-radius: 2px;
    }
`;

export const ProjectsContainer = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.margin.xlarge};
    align-items: start;
    width: 100%;
    max-width: ${({ theme }) => theme.screen.xlarge};

    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-columns: 360px 1fr;
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.margin.medium};
    }
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProjectItemContainer = styled.div<{ $isSelected: boolean; $inView: boolean }>`
    padding: ${({ theme }) => theme.padding.small};
    cursor: pointer;
    user-select: none;
    width: 100%;
    transition: box-shadow 0.5s, background 0.5s;

    background: ${({ theme, $inView, $isSelected }) =>
        $isSelected || !$inView
            ? theme.colors.surface.primary_shade.dark_1
            : theme.colors.surface.primary};
    box-shadow: ${({ theme, $inView, $isSelected }) =>
        $isSelected && $inView
            ? `inset 5px 5px 5px -1px ${theme.colors.surface.primary_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.surface.primary_shade.dark_1}`
            : "none"};
    h2 {
        transition: text-shadow 0.5s;
        text-shadow: ${({ theme, $inView, $isSelected }) =>
            $isSelected || !$inView
                ? `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}`
                : "none"};
    }
`;

export const ProjectItemTitle = styled.h2`
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProjectCardWrapper = styled.div`
    animation: ${slideIn} 0.4s ease-out;
`;
