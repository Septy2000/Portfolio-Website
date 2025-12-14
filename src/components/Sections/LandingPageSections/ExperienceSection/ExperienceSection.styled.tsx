"use client";
import styled, { keyframes } from "styled-components";

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

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.xxlarge} ${theme.padding.medium}`};
    background: ${({ theme }) => theme.colors.surface.primary};
    position: relative;

    /* Subtle top border fade */
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

export const Header = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.margin.large};
    max-width: 600px;
`;

export const Title = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 12px 0;
    font-weight: 600;
    position: relative;
    display: inline-block;

    /* Decorative underline */
    &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: ${({ theme }) => theme.colors.orange};
        border-radius: 2px;
    }
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.muted};
    margin: ${({ theme }) => theme.margin.small} 0 0;
    line-height: 1.6;
`;

export const ScrollWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${({ theme }) => theme.screen.xxlarge};
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
    position: absolute;
    ${({ $position }) => ($position === "left" ? "left: 8px;" : "right: 8px;")}
    z-index: 10;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    background: ${({ theme, disabled }) =>
        disabled ? theme.colors.surface.primary_shade.dark_1 : theme.colors.surface.secondary};
    color: ${({ theme, disabled }) =>
        disabled ? theme.colors.surface.primary_shade.dark_3 : theme.colors.text.secondary};
    font-size: 1.3rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme, disabled }) => (disabled ? "none" : theme.shadows.medium)};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.orange};
        transform: scale(1.08);
        box-shadow: ${({ theme }) => theme.shadows.glow};
    }

    &:active:not(:disabled) {
        transform: scale(0.95);
    }

    @media (max-width: ${({ theme }) => theme.screen.small}) {
        width: 44px;
        height: 44px;
        font-size: 1.1rem;
    }
`;

export const ScrollContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 28px;
    padding: 24px calc(50vw - 180px);
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        padding: 20px calc(50vw - 160px);
        gap: 20px;
    }
`;

export const Card = styled.article`
    flex: 0 0 auto;
    width: 360px;
    background: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => theme.padding.medium};
    box-shadow: ${({ theme }) => theme.shadows.neumorphic.raised};
    scroll-snap-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    /* Top accent bar */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.orange},
            ${({ theme }) => theme.colors.accent.warm}
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${({ theme }) => theme.shadows.strong};

        &::before {
            opacity: 1;
        }
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: 320px;
        padding: ${({ theme }) => theme.padding.small};
    }
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const IconWrapper = styled.div`
    width: 56px;
    height: 56px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    box-shadow: ${({ theme }) => theme.shadows.neumorphic.subtle};
    overflow: hidden;
    transition: ${({ theme }) => theme.transitions.normal};

    &:hover {
        transform: scale(1.05);
    }
`;

export const TitleWrapper = styled.div`
    flex: 1;
    min-width: 0;
`;

export const CardTitle = styled.h3`
    font-family: "Playfair Display", serif;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 4px 0;
    font-weight: 600;
`;

export const Company = styled.a`
    font-family: "DM Sans", sans-serif;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    display: inline-flex;
    align-items: center;
    gap: 4px;

    &:hover {
        color: ${({ theme }) => theme.colors.orange_shade.dark_1};

        &::after {
            content: "↗";
            font-size: 0.8em;
        }
    }
`;

export const MetaInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: ${({ theme }) => theme.margin.small};
    padding-bottom: ${({ theme }) => theme.padding.small};
    border-bottom: 1px solid ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
`;

export const MetaItem = styled.span`
    font-family: "DM Sans", sans-serif;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.muted};
    display: flex;
    align-items: center;
    gap: 6px;

    &::before {
        content: "";
        width: 4px;
        height: 4px;
        background: ${({ theme }) => theme.colors.surface.primary_shade.dark_3};
        border-radius: 50%;
    }

    &:first-child::before {
        display: none;
    }
`;

export const ResponsibilitiesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 ${({ theme }) => theme.margin.small} 0;
`;

export const ResponsibilityItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-family: "DM Sans", sans-serif;
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        width: 6px;
        height: 6px;
        background: ${({ theme }) => theme.colors.orange};
        border-radius: 50%;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: ${({ theme }) => theme.padding.small};
    border-top: 1px solid ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
`;

export const SkillTag = styled.span`
    font-family: "DM Sans", sans-serif;
    background: ${({ theme }) => theme.colors.surface.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 6px 14px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.orange};
        transform: translateY(-2px);
    }
`;

export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: ${({ theme }) => theme.margin.medium};
`;

export const Dot = styled.button<{ $isActive: boolean }>`
    width: ${({ $isActive }) => ($isActive ? "28px" : "10px")};
    height: 10px;
    border-radius: 5px;
    background: ${({ theme, $isActive }) =>
        $isActive
            ? `linear-gradient(90deg, ${theme.colors.orange}, ${theme.colors.accent.warm})`
            : theme.colors.surface.primary_shade.dark_2};
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({ $isActive, theme }) =>
        $isActive ? `0 2px 8px ${theme.colors.orange}50` : "none"};

    &:hover {
        background: ${({ theme, $isActive }) =>
            $isActive
                ? `linear-gradient(90deg, ${theme.colors.orange}, ${theme.colors.accent.warm})`
                : theme.colors.surface.primary_shade.dark_3};
        transform: scale(1.1);
    }
`;
