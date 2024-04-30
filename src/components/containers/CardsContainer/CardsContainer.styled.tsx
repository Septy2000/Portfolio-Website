"use client";
import styled from "styled-components";
export const Container = styled.div`
    display: grid;
    margin: ${({ theme }) => theme.margin.medium};
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-columns: repeat(1, 1fr);
    }

    /* prettier-ignore */
    @media ((min-width: ${({ theme }) => theme.screen.medium}) and 
            (max-width: ${({ theme }) => theme.screen.large})) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
        grid-template-columns: repeat(3, 1fr);
    }

    gap: ${({ theme }) => theme.padding.xlarge};
    grid-auto-rows: 1fr;
`;
