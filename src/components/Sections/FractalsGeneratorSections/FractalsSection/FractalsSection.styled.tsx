import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: ${({ theme }) => theme.margin.medium};
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Canvas = styled.canvas`
    width: 800px;
    height: 600px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: ${({ theme }) =>
        `${theme.border.small} solid ${theme.colors.surface.secondary}`};
`;
