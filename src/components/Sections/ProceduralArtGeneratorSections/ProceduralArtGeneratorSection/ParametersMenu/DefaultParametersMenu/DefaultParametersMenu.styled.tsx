"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const PseudoLabel = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.1rem;
    margin-bottom: 2px;
`;

export const HorizontalLabelledInputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 6px 0;
`;
