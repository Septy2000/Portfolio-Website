"use client";
import styled from "styled-components";
import Link from "next/link";
import { ButtonDefault } from "@/components/Button/Button.styled";

export const Container = styled.div<{ $inView: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${({ $inView, theme }) =>
        $inView ? theme.colors.surface.primary : theme.colors.surface.primary_shade.dark_1};
    overflow: hidden;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.1rem;
    line-height: 1.2;
`;

export const Note = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.2;
    margin: ${({ theme }) => theme.margin.small} 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.padding.medium} 0`};
`;

export const Button = styled(ButtonDefault)`
    width: 48%;
`;

export const ButtonLink = styled(Link)`
    background-color: ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    width: 48%;
    padding: ${({ theme }) => theme.padding.small};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.4s, box-shadow 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.orange};
    }
    &:active {
        box-shadow: ${({ theme }) =>
            `inset 5px 5px 5px -1px ${theme.colors.orange_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.orange}`};
    }
`;
