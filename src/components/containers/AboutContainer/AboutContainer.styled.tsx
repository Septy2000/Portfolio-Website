import styled from "styled-components";

export const AboutContainer = styled.div`
    margin: ${({ theme }) => theme.margin.small};
    align-items: start;
    max-width: 512px;
`;

export const AboutNameHeader = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.orange};
`;

export const AboutBody = styled.p`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.3rem;
    line-height: 1.2;
`;
