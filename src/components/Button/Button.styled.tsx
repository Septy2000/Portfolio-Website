"use client";
import styled, { css } from "styled-components";

const baseButtonStyles = css`
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    letter-spacing: 0.02em;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
`;

export const ButtonDefault = styled.button`
    ${baseButtonStyles}
    background: ${({ theme }) => theme.colors.surface.secondary};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.shadows.soft};

    /* Hover effect background */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.colors.orange};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
        z-index: 0;
    }

    /* Text stays above background */
    span,
    svg {
        position: relative;
        z-index: 1;
    }

    &:disabled {
        background: ${({ theme }) => theme.colors.surface.primary_shade.dark_2};
        color: ${({ theme }) => theme.colors.text.muted};
        cursor: not-allowed;
        box-shadow: none;

        &::before {
            display: none;
        }
    }

    &:not(:disabled):hover {
        box-shadow: ${({ theme }) => theme.shadows.medium};

        &::before {
            transform: scaleX(1);
            transform-origin: left;
        }
    }

    &:not(:disabled):active {
        transform: scale(0.98);
        box-shadow: ${({ theme }) => theme.shadows.neumorphic.inset};
    }
`;

export const ButtonClassic = styled.button`
    background-color: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 8px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    &:disabled {
        background-color: ${({ theme }) => theme.colors.surface.secondary};
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.text.muted};
    }
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.orange};
    }
    &:not(:disabled):active {
        box-shadow: ${({ theme }) =>
            `inset 5px 5px 5px -1px ${theme.colors.orange_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.orange}`};
        background-color: ${({ theme }) => theme.colors.orange};
    }
`;

export const ButtonPrimary = styled(ButtonDefault)`
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.text.secondary};

    &::before {
        background: ${({ theme }) => theme.colors.surface.secondary};
    }
`;

export const ButtonOutline = styled.button`
    ${baseButtonStyles}
    background: transparent;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.surface.secondary};
    padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 2px solid ${({ theme }) => theme.colors.surface.secondary};

    &:hover {
        background: ${({ theme }) => theme.colors.surface.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const ButtonGhost = styled.button`
    ${baseButtonStyles}
    background: transparent;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => `${theme.padding.xsmall} ${theme.padding.small}`};
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};

    &:hover {
        background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    }

    &:active {
        background: ${({ theme }) => theme.colors.surface.primary_shade.dark_2};
    }
`;

export const IconButton = styled.button`
    ${baseButtonStyles}
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.text.primary};
    box-shadow: ${({ theme }) => theme.shadows.neumorphic.raised};

    &:hover {
        background: ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.text.secondary};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.medium};
    }

    &:active {
        transform: translateY(0);
        box-shadow: ${({ theme }) => theme.shadows.neumorphic.inset};
    }
`;
