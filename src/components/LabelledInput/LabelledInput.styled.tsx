"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 6px 0;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 6px 8px;
    font-size: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: border-color 0.2s ease, background 0.2s ease;
    outline: none;

    &:focus {
        border-color: rgba(255, 149, 0, 0.5);
        background: rgba(255, 255, 255, 0.08);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.25);
    }
`;

export const LabelRow = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 3px;
`;

export const Label = styled.label`
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    font-weight: 500;
`;
