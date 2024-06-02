"use client";
import styled from "styled-components";

export const Container = styled.div`
    margin: ${({ theme }) => theme.margin.small};
    align-items: start;
    max-width: 512px;
`;

export const NameHeader = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.orange};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    line-height: 1.2;
`;
