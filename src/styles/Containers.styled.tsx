"use client";
import styled from "styled-components";
import {
    CustomStylingProps,
    customPropertiesMixin,
} from "./custom-properties/CustomProperties";

export const CardsContainer = styled.div<CustomStylingProps>`
    display: grid;
    margin: ${({ theme }) =>
        `${theme.margin.xlarge} ${theme.margin.variable} ${theme.margin.xlarge} ${theme.margin.variable} `};
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

    ${customPropertiesMixin}
`;

export const MainInformationContainer = styled.div<CustomStylingProps>`
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

    ${customPropertiesMixin}
`;

export const AboutContainer = styled.div`
    align-items: start;
    max-width: 500px;
`;
