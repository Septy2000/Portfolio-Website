"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    overflow: hidden;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: 2rem;
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    line-height: 1.2;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.padding.medium} 0`};
`;

export const Button = styled.button`
    background-color: ${({ theme }) =>
        theme.colors.surface.secondary_shade.light_2};
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    width: 45%;
    padding: ${({ theme }) => theme.padding.small};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    &:disabled {
        background-color: ${({ theme }) => theme.colors.surface.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.text.primary};
    }
`;

export const ButtonLink = styled(Link)`
    background-color: ${({ theme }) =>
        theme.colors.surface.secondary_shade.light_2};
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    width: 45%;
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
