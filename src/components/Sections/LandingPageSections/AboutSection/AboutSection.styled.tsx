"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
    box-shadow: ${({ theme }) =>
        `inset 10px 10px 10px -1px ${theme.colors.surface.primary_shade.dark_3}, inset -10px -10px 10px -1px ${theme.colors.surface.primary_shade.dark_1}`};
    background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    transition: box-shadow 0.5s, background 0.5s;
    ${({ $inView }) =>
        $inView &&
        css`
            box-shadow: none;
            background: ${({ theme }) => theme.colors.surface.primary};
        `}
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.medium};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    line-height: 1.6;
    margin: 0 ${({ theme }) => theme.margin.small};
`;

export const Section = styled.div`
    margin-top: ${({ theme }) => theme.margin.medium};
    text-align: left;
`;

export const SectionHeader = styled.h3`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const ListItem = styled.li`
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const ConnectLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.margin.small};
    margin-top: ${({ theme }) => theme.margin.medium};
`;

export const LinkWrapper = styled(Link)`
    text-decoration: none;
`;

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.surface.secondary};
    font-size: 3rem;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.2);
    }
`;
