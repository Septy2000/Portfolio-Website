"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: ${({ theme }) => theme.margin.medium};
    height: 65vh;
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;
