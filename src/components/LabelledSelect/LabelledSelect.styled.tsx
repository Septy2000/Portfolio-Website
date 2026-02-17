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
    padding: 4px 6px;
    font-size: 1.1rem;
    border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.surface.secondary_shade.light_3}`};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.surface.secondary_shade.light_1};
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: border-color 0.3s;
    outline: none;
    &:focus {
        border-color: ${({ theme }) => theme.colors.orange};
    }

    option {
        font-size: 1.2rem;
        background-color: ${({ theme }) => theme.colors.surface.secondary_shade.light_1};
        color: ${({ theme }) => theme.colors.text.secondary};
    }
`;

export const LabelRow = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.1rem;
`;
