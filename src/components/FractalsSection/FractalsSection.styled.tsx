import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: ${({ theme }) =>
        `${theme.border.medium} solid ${theme.colors.surface.secondary}`};
`;
