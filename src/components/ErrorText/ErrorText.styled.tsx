"use client";
import styled from "styled-components";
import { BsExclamationCircle } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ErrorText = styled.p`
    color: ${({ theme }) => theme.colors.error};
`;

export const BsExclamationCircleIcon = styled(BsExclamationCircle)`
    color: ${({ theme }) => theme.colors.error};
    margin-right: 2px;
    font-size: 1.4rem;
`;
