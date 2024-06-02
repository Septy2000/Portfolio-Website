import React from "react";
import * as Styled from "./LabelledInput.styled";
import { LabelledInputProps } from "@/_types/components";
export default function LabelledInput({
    id,
    label,
    type,
    value,
    onChange,
}: LabelledInputProps) {
    return (
        <Styled.Container>
            <Styled.Label htmlFor={id}>{label}</Styled.Label>
            <Styled.Input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Styled.Container>
    );
}
