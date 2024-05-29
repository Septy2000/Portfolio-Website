import React from "react";
import { LabelledSelectProps } from "@/_types/components";
import * as Styled from "./LabelledSelect.styled";

const LabelledSelect: React.FC<LabelledSelectProps> = ({
    id,
    label,
    value,
    onChange,
    children,
}) => {
    return (
        <Styled.Container>
            <Styled.Label htmlFor={id}>{label}</Styled.Label>
            <Styled.Select id={id} value={value} onChange={onChange}>
                {children}
            </Styled.Select>
        </Styled.Container>
    );
};

export default LabelledSelect;
