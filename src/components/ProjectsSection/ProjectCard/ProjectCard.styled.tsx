"use client";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    overflow: hidden;
`;

export const Icon = styled(Image)`
    width: 100%;
    height: 100%;
    border: ${({ theme }) =>
        `${theme.border.small} solid ${theme.colors.surface.secondary}`};
    margin-bottom: ${({ theme }) => theme.margin.small};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    object-fit: cover;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.3rem;
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
    width: 45%;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: ${({ theme }) => theme.padding.small};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
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
