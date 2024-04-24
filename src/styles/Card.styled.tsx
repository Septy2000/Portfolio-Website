import styled from "styled-components";
import Image from "next/image";

const CardStyled = styled.div`
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.margin.small};
    background-color: ${({ theme }) => theme.colors.surface.secondary};
    height: 100%;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.03);
    }
`;

const CardImageStyled = styled(Image)`
    border-radius: ${({ theme }) => theme.borderRadius.small};
    width: 100%;
    height: 70%;
    transition: filter 0.2s;
    padding: ${({ theme }) => theme.padding.large};
`;

export { CardStyled, CardImageStyled };
