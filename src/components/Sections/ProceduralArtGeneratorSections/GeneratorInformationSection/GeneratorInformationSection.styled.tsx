"use client";
import styled from "styled-components";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: ${({ theme }) => theme.margin.medium};
`;

export const InfoIcon = styled(BsFillInfoCircleFill)`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.4rem;
    margin-right: 4px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const InfoText = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
`;
