import React from "react";
import * as Styled from "./LabelledInput.styled";
import { LabelledInputProps } from "@/_types/components";
import Tooltip from "@/components/Tooltip/Tooltip";
export default function LabelledInput({
    id,
    label,
    type,
    value,
    onChange,
    tooltip,
}: LabelledInputProps) {
    return (
        <Styled.Container>
            <Styled.LabelRow>
                <Styled.Label htmlFor={id}>{label}</Styled.Label>
                {tooltip && <Tooltip text={tooltip} />}
            </Styled.LabelRow>
            <Styled.Input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Styled.Container>
    );
}
