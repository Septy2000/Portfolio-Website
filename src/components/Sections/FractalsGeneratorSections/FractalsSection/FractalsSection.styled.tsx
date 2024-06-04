"use client";
import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.margin.medium};

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        margin: ${({ theme }) => theme.margin.small};
    }
`;

export const GeneratorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Canvas = styled.canvas`
    width: 800px;
    height: 600px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.surface.secondary}`};

    @media (max-width: ${({ theme }) => theme.screen.small}) {
        width: 100%;
        height: auto;
    }
`;
