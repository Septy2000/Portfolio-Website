import React from "react";
import styled from "styled-components";
import { Header, Text } from "@/components/typography/Typography";
import Image from "next/image";
const CardStyled = styled.div`
    width: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: 0px 10px 8px #999;
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.margin.small};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    height: 100%;
    transition: box-shadow 0.2s, transform 0.2s; /* Add transition for both box-shadow and transform */
    &:hover {
        transform: scale(1.03);
        box-shadow: 0px 15px 12px #999;
    }
`;

const CardImageStyled = styled(Image)`
    border-radius: ${({ theme }) =>
        `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0 0`};
    width: 100%;
    height: auto;
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
