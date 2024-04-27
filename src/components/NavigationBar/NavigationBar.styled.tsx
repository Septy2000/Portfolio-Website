import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium};
    background-color: transparent;
`;

export const Name = styled.h1`
    font-size: 2rem;
    color: orange;
`;

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-left: ${({ theme }) => theme.margin.medium};
`;

export const NavigationLink = styled(Link)`
    font-size: 1.5rem;
    margin-left: ${({ theme }) => theme.margin.medium};
    margin-right: ${({ theme }) => theme.margin.medium};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
`;
