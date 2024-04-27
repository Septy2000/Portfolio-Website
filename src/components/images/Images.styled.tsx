import Image from "next/image";
import styled from "styled-components";

export const PortraitImage = styled(Image)`
    border: 8px solid ${({ theme }) => theme.colors.surface.secondary};
    border-radius: 50%;
`;
