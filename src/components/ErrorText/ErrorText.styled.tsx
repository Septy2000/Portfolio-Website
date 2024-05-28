import styled from "styled-components";

export const ErrorText = styled.p`
    color: ${({ theme }) => theme.colors.error};
    margin-top: ${({ theme }) => theme.margin.small};
`;
