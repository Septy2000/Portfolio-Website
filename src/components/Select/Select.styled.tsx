"use client";
import styled from "styled-components";

export const SelectDefault = styled.select`
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
