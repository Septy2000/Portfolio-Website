import React from "react";
import styled from "styled-components";
import { Header, Text } from "@/components/typography/Typography";
import Image from "next/image";
const CardStyled = styled.div`
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.margin.small};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    height: 100%;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.03);
    }
`;

const CardImageStyled = styled(Image)`
    border-radius: ${({ theme }) =>
        `${theme.borderRadius.xlarge} ${theme.borderRadius.xlarge} 0 0`};
    width: 100%;
    height: 70%;
    transition: filter 0.2s;
    filter: blur(2px);
    ${CardStyled}:hover & {
        filter: none;
    }
`;

type CardProps = {
    imagePath: string;
    title: string;
    description: string;
};

export default function Card({ imagePath, title, description }: CardProps) {
    return (
        <CardStyled>
            <CardImageStyled
                src={imagePath}
                alt="Image could not load"
                width={300}
                height={300}
            />
            <Header size="medium" color="secondary" m="0.5rem">
                {title}
            </Header>

            <Text color="secondary" m="0.5rem">
                {description}
            </Text>
        </CardStyled>
    );
}
