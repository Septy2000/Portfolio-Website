"use client";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    padding: ${({ theme }) => theme.padding.small};
    width: 100%;
    max-width: 500px;
    max-height: 700px;
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    overflow: hidden;
`;

export const Icon = styled(Image)`
    width: 100%;
    height: 100%;
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
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
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: 1.3rem;
    line-height: 1.2;
`;
