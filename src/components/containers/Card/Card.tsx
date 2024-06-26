import React from "react";
import * as Styled from "./Card.styled";
import { missing_image_src } from "@/components/Images/Images";

type CardProps = {
    imagePath?: string;
    title: string;
    description: string;
};

export default function Card({ imagePath, title, description }: CardProps) {
    return (
        <Styled.Card>
            <Styled.CardImage
                src={imagePath ?? missing_image_src}
                alt="Image could not load"
                width={300}
                height={300}
                priority
            />
            <Styled.Header>{title}</Styled.Header>

            <Styled.Body>{description}</Styled.Body>
        </Styled.Card>
    );
}
