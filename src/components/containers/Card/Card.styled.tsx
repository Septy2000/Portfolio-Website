import styled from "styled-components";
import Image from "next/image";

export const Card = styled.div`
    width: 100%;
    max-width: 500px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    background-color: orange;
    height: 100%;
    padding: ${({ theme }) => theme.padding.small};
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.03);
    }
`;

export const CardImage = styled(Image)`
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin-bottom: ${({ theme }) => theme.margin.small};
    width: 100%;
    height: 70%;
    transition: filter 0.2s;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const Body = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.margin.small};
`;
