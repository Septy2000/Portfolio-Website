"use client";
import styled from "styled-components";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.margin.small};
    width: 100%;
    max-width: 800px;
`;

export const InfoIcon = styled(BsFillInfoCircleFill)`
    color: rgba(255, 149, 0, 0.5);
    font-size: 1rem;
    margin-right: 8px;
    margin-top: 2px;
    flex-shrink: 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const InfoText = styled.p`
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.85rem;
    line-height: 1.4;
`;
