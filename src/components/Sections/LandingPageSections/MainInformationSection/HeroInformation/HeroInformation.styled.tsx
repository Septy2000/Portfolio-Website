"use client";
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
    margin: ${({ theme }) => theme.margin.small};
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.screen.medium};
    text-align: center;
`;

export const NameHeader = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.6rem;
    line-height: 1.4;
    margin: 0 ${({ theme }) => theme.margin.small};
`;

export const ConnectCta = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.6rem;
    margin: ${({ theme }) => theme.margin.small};
`;

export const ConnectLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${({ theme }) => theme.margin.small};
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
