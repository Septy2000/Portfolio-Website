"use client";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { Header as BaseHeader } from "../NavigationBar/NavigationBar.styled";

export const Header = styled(BaseHeader)`
    background: rgba(13, 14, 20, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 149, 0, 0.3) 30%,
            rgba(255, 149, 0, 0.3) 70%,
            transparent
        );
        opacity: 1;
    }
`;

export const BackButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NavigationLink = styled(Link)`
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    margin: 0 ${({ theme }) => theme.margin.medium};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        margin: 0 ${({ theme }) => theme.margin.small};
    }
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.85);
    }
`;

export const BackIcon = styled(BsArrowLeft)`
    font-size: 1rem;
    color: inherit;
`;
