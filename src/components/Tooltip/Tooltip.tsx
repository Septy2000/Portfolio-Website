import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import * as Styled from "./Tooltip.styled";

export default function Tooltip({ text }: { text: string }) {
    return (
        <Styled.Container>
            <Styled.Icon>
                <BsInfoCircle />
            </Styled.Icon>
            <Styled.Text>{text}</Styled.Text>
        </Styled.Container>
    );
}
