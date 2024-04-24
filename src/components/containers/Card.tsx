import React from "react";
import { Header, Text } from "@/components/typography/Typography";
import { CardStyled, CardImageStyled } from "@/styles/Card.styled";

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
                priority
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
