import styled from "styled-components";
import {
    Container,
    Label,
    Input,
} from "@/components/LabelledInput/LabelledInput.styled";

export const HorizontalContainer = styled(Container)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
    width: 100%;
`;

export const HorizontalLabel = styled(Label)`
    margin-bottom: 0;
    margin-right: 2px;
`;

export const HorizontalInput = styled(Input)`
    width: 100%;
`;

export const HorizontalLabelledInputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 6px 0;
`;
