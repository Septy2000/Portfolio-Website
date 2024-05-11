"use client";
import styled from "styled-components";
import Image from "next/image";

export const Card = styled.div`
    max-width: 200px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    height: 100%;
    padding: ${({ theme }) => theme.padding.small};
    transition: transform 0.2s, border 0.2s;
`;

export const CardImage = styled(Image)`
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    margin-bottom: ${({ theme }) => theme.margin.small};
    width: 100%;
    height: 70%;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: 1.3rem;
    line-height: 1.2;
`;
