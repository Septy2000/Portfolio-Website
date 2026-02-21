"use client";
import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const float = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
`;

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.xlarge} ${theme.padding.medium}`};
    min-height: calc(100vh - 80px);
    position: relative;

    /* Base background */
    background: ${({ theme }) => theme.colors.surface.primary};

    /* Smooth transition for in-view state */
    transition: ${({ theme }) => theme.transitions.slow};

    ${({ $inView, theme }) =>
        !$inView &&
        css`
            background: ${theme.colors.surface.primary_shade.dark_1};
            box-shadow: ${theme.shadows.neumorphic.inset};
        `}

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        min-height: auto;
        padding: ${({ theme }) => `${theme.padding.large} ${theme.padding.small}`};
    }
`;

export const InfoFlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.margin.xlarge};
    max-width: ${({ theme }) => theme.screen.xlarge};
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: column-reverse;
        gap: ${({ theme }) => theme.margin.medium};
        text-align: center;
    }
`;

export const ContentWrapper = styled.div`
    flex: 1;
    max-width: 600px;
    animation: ${fadeInUp} 0.8s ease-out;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        max-width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;

    /* Decorative ring around image */
    &::before {
        content: "";
        position: absolute;
        inset: -12px;
        border-radius: 50%;
        border: 2px dashed ${({ theme }) => theme.colors.orange};
        opacity: 0.3;
        animation: ${float} 4s ease-in-out infinite;
    }

    /* Subtle shadow/glow */
    &::after {
        content: "";
        position: absolute;
        inset: 10px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.orange};
        filter: blur(40px);
        opacity: 0.2;
        z-index: -1;
    }
`;

export const ScrollIndicator = styled.div`
    position: absolute;
    bottom: ${({ theme }) => theme.margin.medium};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    animation: ${float} 2s ease-in-out infinite;
    cursor: pointer;

    span {
        font-size: ${({ theme }) => theme.typography.small};
        color: ${({ theme }) => theme.colors.text.muted};
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    &::after {
        content: "↓";
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.orange};
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;
