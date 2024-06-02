import React from "react";
import * as Styled from "./HorizontalLabelledInput.styled";
import { LabelledInputProps } from "@/_types/components";
export default function HorizontalLabelledInput({
    id,
    label,
    type,
    value,
    onChange,
}: LabelledInputProps) {
    return (
        <Styled.HorizontalContainer>
            <Styled.HorizontalLabel htmlFor={id}>
                {label}
            </Styled.HorizontalLabel>
            <Styled.HorizontalInput
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Styled.HorizontalContainer>
    );
}
