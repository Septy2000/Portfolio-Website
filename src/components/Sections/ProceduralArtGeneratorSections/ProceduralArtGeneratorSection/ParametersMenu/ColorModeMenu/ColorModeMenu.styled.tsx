"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const CheckboxGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 8px 0;
`;

export const CheckboxRow = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: orange;
`;
