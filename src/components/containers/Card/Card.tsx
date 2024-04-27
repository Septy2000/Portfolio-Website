import React from "react";
import * as Styled from "./Card.styled";
import * as Typography from "@/components/typography/Typography";

type CardProps = {
    imagePath: string;
    title: string;
    description: string;
};

export default function Card({ imagePath, title, description }: CardProps) {
    return (
        <Styled.Card>
            <Styled.CardImage
                src={imagePath}
                alt="Image could not load"
                width={300}
                height={300}
                priority
            />
            <Typography.Header size="medium" color="secondary" m="0.5rem">
                {title}
            </Typography.Header>

            <Typography.Text color="secondary" m="0.5rem">
                {description}
            </Typography.Text>
        </Styled.Card>
    );
}
