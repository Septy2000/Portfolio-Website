"use client";
import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.orange};
`;

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-left: ${({ theme }) => theme.margin.medium};
`;

export const NavigationLink = styled.h2`
    font-weight: normal;
    margin: 0 ${({ theme }) => theme.margin.medium};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        margin: 0 ${({ theme }) => theme.margin.small};
    }
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    &:after {
        content: "";
        position: relative;
        display: block;
        bottom: -5px;
        height: 2px;
        width: 0;
        background: ${({ theme }) => theme.colors.orange};
        z-index: 1;
        cursor: default;
        transition: width 0.3s;
    }
    &:hover:after {
        width: 100%;
    }
`;
