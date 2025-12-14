"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.large} 0;
    background: ${({ theme }) => theme.colors.surface.primary};
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.margin.medium};
    padding: 0 ${({ theme }) => theme.padding.medium};
`;

export const Title = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 8px 0;
    font-weight: 600;
`;

export const Subtitle = styled.p`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.6;
    margin: 0;
`;

export const ScrollWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
    position: absolute;
    ${({ $position }) => ($position === "left" ? "left: 16px;" : "right: 16px;")}
    z-index: 10;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: ${({ theme, disabled }) =>
        disabled ? theme.colors.surface.primary_shade.dark_1 : theme.colors.surface.secondary};
    color: ${({ theme, disabled }) =>
        disabled ? theme.colors.surface.primary_shade.dark_3 : theme.colors.text.secondary};
    font-size: 1.2rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.2s;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.orange};
    }
`;

export const ScrollContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 24px;
    padding: 16px calc(50vw - 170px);
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Card = styled.div`
    flex: 0 0 auto;
    width: 340px;
    background: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: ${({ theme }) => theme.padding.medium};
    box-shadow: ${({ theme }) => `0 8px 10px ${theme.colors.surface.primary_shade.dark_3}50`};
    scroll-snap-align: center;
    border: 1px solid ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
`;

export const TitleWrapper = styled.div`
    flex: 1;
    min-width: 0;
`;

export const CardTitle = styled.h3`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 4px 0;
    font-weight: 600;
`;

export const Company = styled.a`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        text-decoration: underline;
    }
`;

export const MetaInfo = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: ${({ theme }) => theme.margin.small};
    padding-bottom: ${({ theme }) => theme.padding.small};
    border-bottom: 1px solid ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
`;

export const MetaItem = styled.span`
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.7;
`;

export const ResponsibilitiesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 ${({ theme }) => theme.margin.small} 0;
`;

export const ResponsibilityItem = styled.li`
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    font-size: 0.88rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text.primary};

    &::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.orange};
        font-weight: bold;
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
    background: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 5px 12px;
    border-radius: 14px;
    font-size: 0.75rem;
    font-weight: 500;
`;

export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: ${({ theme }) => theme.margin.medium};
`;

export const Dot = styled.button<{ $isActive: boolean }>`
    width: ${({ $isActive }) => ($isActive ? "24px" : "10px")};
    height: 10px;
    border-radius: 5px;
    background: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.orange : theme.colors.surface.primary_shade.dark_2};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${({ theme, $isActive }) =>
            $isActive ? theme.colors.orange : theme.colors.surface.primary_shade.dark_3};
    }
`;
