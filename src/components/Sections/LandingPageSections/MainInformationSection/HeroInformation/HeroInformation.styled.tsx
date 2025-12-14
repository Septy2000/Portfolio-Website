"use client";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -200% center;
    }
    100% {
        background-position: 200% center;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 550px;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        align-items: center;
        text-align: center;
    }
`;

export const Greeting = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: ${({ theme }) => theme.typography.body};
    color: ${({ theme }) => theme.colors.text.muted};
    letter-spacing: 0.05em;
    margin-bottom: ${({ theme }) => theme.margin.xsmall};
    animation: ${fadeInUp} 0.6s ease-out;

    &::before {
        content: "👋";
        margin-right: 8px;
    }
`;

export const NameHeader = styled.h1`
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.typography.hero};
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: ${({ theme }) => theme.margin.small};
    animation: ${fadeInUp} 0.6s ease-out 0.1s backwards;

    /* Gradient text with shimmer */
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.orange} 0%,
        ${({ theme }) => theme.colors.orange_shade.light_1} 25%,
        ${({ theme }) => theme.colors.accent.warm} 50%,
        ${({ theme }) => theme.colors.orange_shade.light_1} 75%,
        ${({ theme }) => theme.colors.orange} 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    /* Subtle animation on hover */
    transition: ${({ theme }) => theme.transitions.normal};

    &:hover {
        animation: ${shimmer} 2s linear infinite;
    }
`;

export const RoleTag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: ${({ theme }) => theme.colors.surface.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-bottom: ${({ theme }) => theme.margin.medium};
    animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;
    width: fit-content;

    &::before {
        content: "";
        width: 8px;
        height: 8px;
        background: ${({ theme }) => theme.colors.green};
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.6;
            transform: scale(1.2);
        }
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Body = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.margin.medium};
    animation: ${fadeInUp} 0.6s ease-out 0.3s backwards;

    strong {
        color: ${({ theme }) => theme.colors.orange};
        font-weight: 600;
    }
`;

export const ConnectCta = styled.p`
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.body};
    margin-bottom: ${({ theme }) => theme.margin.small};
    animation: ${fadeInUp} 0.6s ease-out 0.4s backwards;
`;

export const ConnectLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.margin.small};
    animation: ${fadeInUp} 0.6s ease-out 0.5s backwards;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        justify-content: center;
    }
`;

export const LinkWrapper = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    box-shadow: ${({ theme }) => theme.shadows.neumorphic.raised};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    /* Hover effect background */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.colors.orange};
        opacity: 0;
        transition: ${({ theme }) => theme.transitions.normal};
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${({ theme }) => theme.shadows.medium}, ${({ theme }) => theme.shadows.glow};

        &::before {
            opacity: 1;
        }

        svg {
            color: ${({ theme }) => theme.colors.text.secondary};
            transform: scale(1.1);
        }
    }

    &:active {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.neumorphic.inset};
    }
`;

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.surface.secondary};
    font-size: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CTAButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: ${({ theme }) => theme.colors.surface.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 14px 28px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin-top: ${({ theme }) => theme.margin.small};
    animation: ${fadeInUp} 0.6s ease-out 0.6s backwards;
    transition: all 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows.soft};

    &::after {
        content: "→";
        transition: transform 0.3s ease;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.orange};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.medium};

        &::after {
            transform: translateX(4px);
        }
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: 100%;
        justify-content: center;
    }
`;
