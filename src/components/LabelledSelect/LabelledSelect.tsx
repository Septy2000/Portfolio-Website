import React from "react";
import { LabelledSelectProps } from "@/_types/components";
import * as Styled from "./LabelledSelect.styled";
import Tooltip from "@/components/Tooltip/Tooltip";

const LabelledSelect: React.FC<LabelledSelectProps> = ({
    id,
    label,
    value,
    onChange,
    children,
    tooltip,
}) => {
    return (
        <Styled.Container>
            <Styled.LabelRow>
                <Styled.Label htmlFor={id}>{label}</Styled.Label>
                {tooltip && <Tooltip text={tooltip} />}
            </Styled.LabelRow>
            <Styled.Select id={id} value={value} onChange={onChange}>
                {children}
            </Styled.Select>
        </Styled.Container>
    );
};

export default LabelledSelect;
