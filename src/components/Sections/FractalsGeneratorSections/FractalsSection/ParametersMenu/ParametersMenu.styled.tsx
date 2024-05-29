import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    font-size: 16px;
`;

export const Select = styled.select`
    margin-bottom: 10px;
    padding: 5px;
    font-size: 16px;
`;
