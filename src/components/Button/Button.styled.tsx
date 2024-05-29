import styled from "styled-components";

export const ButtonDefault = styled.button`
    background-color: ${({ theme }) =>
        theme.colors.surface.secondary_shade.light_2};
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 8px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    &:disabled {
        background-color: ${({ theme }) => theme.colors.surface.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.text.primary};
    }
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.orange};
    }
    &:not(:disabled):active {
        box-shadow: ${({ theme }) =>
            `inset 5px 5px 5px -1px ${theme.colors.orange_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.orange}`};
    }
`;
