"use client";
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.large} ${theme.padding.medium}`};
    background: ${({ theme }) => theme.colors.surface.secondary};
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 10%;
        right: 10%;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            ${({ theme }) => theme.colors.orange}40 50%,
            transparent
        );
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${({ theme }) => theme.screen.xlarge};
    gap: ${({ theme }) => theme.margin.medium};

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: column;
        text-align: center;
        gap: ${({ theme }) => theme.margin.small};
    }
`;

export const Copyright = styled.p`
    font-family: "Nunito", sans-serif;
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.text.muted};
    margin: 0;
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.margin.small};
`;

export const SocialLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.text.muted};
    transition: ${({ theme }) => theme.transitions.normal};
    font-size: 1.1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.orange};
        transform: translateY(-2px);
    }
`;
