"use client";
import styled from "styled-components";
export const Container = styled.div<{ $index: number }>`
    width: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border: ${({ theme }) => `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    box-shadow: ${({ theme }) => `5px 5px 10px ${theme.colors.surface.primary_shade.dark_3}`};
    height: 100%;
    padding: ${({ theme }) => theme.padding.small};
    justify-self: ${({ $index }) => ($index % 2 === 0 ? "start" : "end")};
    grid-area: description;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.8rem;
`;

export const Company = styled.h3`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: 1.8rem;
`;

export const Date = styled.h4`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: 1.5rem;
`;

export const Location = styled.h4`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
`;

export const Responsibilities = styled.ul`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.4rem;
    line-height: 1.2;
    padding: ${({ theme }) => theme.padding.small};
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    margin: 6px 0;
`;
