"use client";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { ButtonDefault } from "@/components/Button/Button.styled";

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.article<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    background: ${({ $inView, theme }) =>
        $inView ? theme.colors.surface.primary : theme.colors.surface.primary_shade.dark_1};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.neumorphic.raised};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${fadeInUp} 0.5s ease-out;

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${({ theme }) => theme.shadows.strong};
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    aspect-ratio: 16/10;

    /* Overlay gradient */
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 50%, rgba(26, 27, 37, 0.1) 100%);
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    &:hover {
        img {
            transform: scale(1.05);
        }

        &::after {
            opacity: 0;
        }
    }
`;

export const ContentWrapper = styled.div`
    padding: ${({ theme }) => theme.padding.medium};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.margin.small};

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        padding: ${({ theme }) => theme.padding.small};
    }
`;

export const Header = styled.h2`
    font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    font-weight: 700;
    line-height: 1.3;
`;

export const Body = styled.p`
    font-family: "Nunito", sans-serif;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
`;

export const Note = styled.p`
    font-family: "Nunito", sans-serif;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
    padding: ${({ theme }) => `${theme.padding.xsmall} ${theme.padding.small}`};
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};
    border-left: 3px solid ${({ theme }) => theme.colors.orange};
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
`;

export const Tag = styled.span`
    font-family: "Nunito", sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 4px 12px;
    background: ${({ theme }) => theme.colors.surface.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    letter-spacing: 0.02em;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
    padding-top: ${({ theme }) => theme.padding.small};
    border-top: 1px solid ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
`;

export const Button = styled(ButtonDefault)`
    flex: 1;
    padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all 0.3s ease;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ButtonLink = styled(Link)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.orange};
    }

    &:active {
        transform: scale(0.98);
        box-shadow: ${({ theme }) =>
            `inset 5px 5px 5px -1px ${theme.colors.orange_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.orange}`};
    }
`;
