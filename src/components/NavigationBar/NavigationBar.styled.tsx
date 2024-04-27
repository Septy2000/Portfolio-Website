"use client";
import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
    background-color: transparent;
`;

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const NavigationLink = styled(Link)`
    
`;
