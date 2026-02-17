"use client";
import styled from "styled-components";

export const Container = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: help;

    &:hover > span {
        opacity: 1;
        visibility: visible;
    }
`;

export const Icon = styled.span`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.muted};
    display: inline-flex;
    align-items: center;
`;

export const Text = styled.span`
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.75rem;
    line-height: 1.4;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: normal;
    width: max-content;
    max-width: 200px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s ease, visibility 0.15s ease;
    z-index: 20;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;
