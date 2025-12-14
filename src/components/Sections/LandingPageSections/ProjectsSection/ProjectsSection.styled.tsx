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
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.large};
    text-align: center;
    position: relative;

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
        grid-template-columns: 280px 1fr;
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.margin.medium};
    }
`;

export const ProjectsList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: sticky;
    top: 100px;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        position: static;
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: ${({ theme }) => theme.padding.small};

        &::-webkit-scrollbar {
            height: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.surface.primary_shade.dark_2};
            border-radius: 2px;
        }
    }
`;

export const ProjectItemContainer = styled.button<{ $isSelected: boolean; $inView: boolean }>`
    padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
    cursor: pointer;
    user-select: none;
    width: 100%;
    text-align: left;
    border: none;
    background: transparent;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    /* Active indicator */
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) scaleY(0);
        width: 4px;
        height: 60%;
        background: ${({ theme }) => theme.colors.orange};
        border-radius: 0 4px 4px 0;
        transition: transform 0.3s ease;
    }

    ${({ $isSelected, $inView, theme }) =>
        $isSelected && $inView
            ? css`
                  background: ${theme.colors.surface.primary_shade.dark_1};
                  box-shadow: ${theme.shadows.neumorphic.inset};

                  &::before {
                      transform: translateY(-50%) scaleY(1);
                  }

                  h2 {
                      color: ${theme.colors.orange};
                  }
              `
            : css`
                  &:hover {
                      background: ${theme.colors.surface.primary_shade.dark_1};

                      h2 {
                          transform: translateX(8px);
                      }
                  }
              `}

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: auto;
        white-space: nowrap;
        flex-shrink: 0;
        padding: ${({ theme }) => `${theme.padding.xsmall} ${theme.padding.small}`};

        &::before {
            display: none;
        }

        ${({ $isSelected, theme }) =>
            $isSelected &&
            css`
                border-bottom: 2px solid ${theme.colors.orange};
                border-radius: 0;
                background: transparent;
                box-shadow: none;
            `}
    }
`;

export const ProjectItemTitle = styled.h2`
    font-family: "Playfair Display", serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    transition: all 0.3s ease;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        font-size: 0.95rem;
    }
`;

export const ProjectCardWrapper = styled.div`
    animation: ${slideIn} 0.4s ease-out;
`;
