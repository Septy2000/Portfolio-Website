import Image from "next/image";
import styled from "styled-components";

export const PortraitImage = styled(Image)`
    border: ${({ theme }) =>
        `${theme.border.xlarge} solid ${theme.colors.surface.secondary}`};
    border-radius: 50%;
`;
