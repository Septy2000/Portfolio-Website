"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 8px 0;
    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    padding: 2px;
    font-size: 1.1rem;
    border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.surface.secondary}`};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: border-color 0.5s;
    outline: none;
    &:focus {
        border-color: ${({ theme }) => theme.colors.orange};
    }

    option {
        font-size: 1.2rem;
        background-color: ${({ theme }) => theme.colors.surface.primary};
        color: ${({ theme }) => theme.colors.text.primary};
        transition: background-color 0.5s;
        &:hover {
            background-color: ${({ theme }) => theme.colors.orange};
        }
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.1rem;
    margin-bottom: 2px;
`;
