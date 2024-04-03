"use client";
import styled from "styled-components";

export const Header = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    a {
        color: ${({ theme }) => theme.colors.text.primary};
        text-decoration: none;
        padding: ${({ theme }) => theme.padding.medium};
    }
`;
