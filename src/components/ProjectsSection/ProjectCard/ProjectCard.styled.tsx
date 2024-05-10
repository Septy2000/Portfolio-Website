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
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    font-size: 1.3rem;
    width: 45%;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: ${({ theme }) => theme.padding.small};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: background-color 0.4s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.orange};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.green};
    }
`;
