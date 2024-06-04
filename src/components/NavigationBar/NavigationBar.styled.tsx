"use client";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.small};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.orange};
`;

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-left: ${({ theme }) => theme.margin.medium};

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

export const NavigationLink = styled.h2`
    font-weight: normal;
    margin: 0 ${({ theme }) => theme.margin.medium};
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

export const HamburgerIcon = styled(FaBars)`
    display: none;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: block;
    }
`;

export const CloseIcon = styled(FaTimes)`
    display: none;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 2rem;
    margin: ${({ theme }) => theme.margin.medium};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    z-index: 999;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);

    &.open {
        transform: translateX(0);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: flex;
    }
`;

export const MobileNavigationLink = styled(NavigationLink)`
    font-size: 2rem;
    margin: ${({ theme }) => theme.margin.medium} 0;
`;
