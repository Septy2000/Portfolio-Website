"use client";
import styled, { keyframes } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const slideDown = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    position: sticky;
    top: 0;
    z-index: 100;
    animation: ${slideDown} 0.6s ease-out;

    /* Subtle gradient overlay */
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.surface.secondary} 0%,
        ${({ theme }) => theme.colors.surface.secondary_shade.light_1} 100%
    );

    /* Bottom accent line */
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(
            90deg,
            transparent,
            ${({ theme }) => theme.colors.orange} 20%,
            ${({ theme }) => theme.colors.orange} 80%,
            transparent
        );
        opacity: 0.6;
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.small}`};
    }
`;

export const Name = styled.h2`
    font-family: "Nunito", sans-serif;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    transition: ${({ theme }) => theme.transitions.normal};
    cursor: default;

    /* Subtle glow effect */
    text-shadow: 0 0 20px rgba(255, 149, 0, 0.3);

    &:hover {
        text-shadow: 0 0 30px rgba(255, 149, 0, 0.5);
        transform: scale(1.02);
    }
`;

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${({ theme }) => theme.margin.small};

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

export const NavigationLink = styled.h2`
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.03em;
    text-transform: lowercase;
    margin: 0 ${({ theme }) => theme.margin.small};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    position: relative;
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};
    transition: ${({ theme }) => theme.transitions.normal};

    /* Hover background */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.colors.orange};
        border-radius: inherit;
        opacity: 0;
        transform: scale(0.8);
        transition: ${({ theme }) => theme.transitions.normal};
        z-index: -1;
    }

    /* Underline effect */
    &::after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: 16px;
        right: 16px;
        height: 2px;
        background: ${({ theme }) => theme.colors.orange};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        color: ${({ theme }) => theme.colors.surface.secondary};

        &::before {
            opacity: 1;
            transform: scale(1);
        }
    }

    &:not(:hover)::after {
        transform: scaleX(0);
        transform-origin: left;
    }
`;

export const HamburgerIcon = styled(FaBars)`
    display: none;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.5rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.normal};
    padding: 8px;
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};

    &:hover {
        background: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: block;
    }
`;

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

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

export const CloseIcon = styled(FaTimes)`
    display: none;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.8rem;
    cursor: pointer;
    position: absolute;
    top: ${({ theme }) => theme.margin.medium};
    right: ${({ theme }) => theme.margin.medium};
    padding: 8px;
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};
    transition: ${({ theme }) => theme.transitions.normal};

    &:hover {
        background: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
        transform: rotate(90deg);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.surface.secondary} 0%,
        ${({ theme }) => theme.colors.surface.secondary_shade.light_1} 100%
    );
    z-index: 999;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    /* Decorative elements */
    &::before {
        content: "";
        position: absolute;
        top: -50%;
        right: -50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            circle,
            ${({ theme }) => theme.colors.orange}15 0%,
            transparent 50%
        );
        pointer-events: none;
    }

    &.open {
        transform: translateX(0);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: flex;
    }
`;

export const MobileNavigationLink = styled(NavigationLink)`
    font-size: 1.8rem;
    margin: ${({ theme }) => theme.margin.small} 0;
    padding: 16px 32px;

    .open & {
        animation: ${fadeIn} 0.5s ease-out backwards;

        &:nth-child(2) {
            animation-delay: 0.1s;
        }
        &:nth-child(3) {
            animation-delay: 0.2s;
        }
        &:nth-child(4) {
            animation-delay: 0.3s;
        }
    }
`;
