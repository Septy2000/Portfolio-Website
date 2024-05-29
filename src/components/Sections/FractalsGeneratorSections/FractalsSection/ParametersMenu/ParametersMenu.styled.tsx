import styled from "styled-components";
import { ButtonDefault } from "@/components/Button/Button.styled";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${({ theme }) => theme.margin.medium};
    background: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    max-width: 300px;
    height: 100%;
`;

export const MenusContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ZoomButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 0;
`;

export const GenerateButton = styled(ButtonDefault)`
    width: 100%;
`;

export const ZoomControlButton = styled(ButtonDefault)`
    width: 45%;
`;
