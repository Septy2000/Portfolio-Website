import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    padding: ${({ theme }) => theme.padding.small};
    margin: ${({ theme }) => theme.margin.medium};
`;

export const Canvas = styled.canvas`
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: ${({ theme }) =>
        `${theme.border.small} solid ${theme.colors.surface.secondary}`};
`;
