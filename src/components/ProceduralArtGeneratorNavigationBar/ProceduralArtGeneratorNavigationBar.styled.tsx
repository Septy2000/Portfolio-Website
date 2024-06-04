"use client";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export const BackButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NavigationLink = styled(Link)`
    font-size: 1.5rem;
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

export const BackIcon = styled(BsArrowLeft)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-right: 4px;
`;
