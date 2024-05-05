"use client";
import styled from "styled-components";
const Container = styled.div`
    width: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
    height: 100%;
    padding: ${({ theme }) => theme.padding.small};
`;

export const ContainerRight = styled(Container)`
    margin-left: 30px;
    &:before {
        content: "";
        position: absolute;
        width: 30px;
        z-index: -1;
        height: 4px;
        top: 50%;
        left: 80px;
        background: ${({ theme }) => theme.colors.surface.secondary};
    }
`;

export const ContainerLeft = styled(Container)`
    margin-right: 30px;
    &:after {
        content: "";
        position: absolute;
        width: 30px;
        z-index: -1;
        height: 4px;
        top: 50%;
        right: 80px;
        background: ${({ theme }) => theme.colors.surface.secondary};
    }
`;
