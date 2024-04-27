"use client";
import styled from "styled-components";

export const MainInformationContainer = styled.div`
    display: flex;
    margin-left: ${({ theme }) => theme.margin.variable};
    margin-right: ${({ theme }) => theme.margin.variable};

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
