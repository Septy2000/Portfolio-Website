"use client";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Helvetica", sans-serif, Arial;
    }
    
    body {
        background: #fff9f0;
        border: ${({ theme }) => `${theme.border.xxlarge} solid ${theme.colors.surface.secondary}`};
    }

    html body {
        width: 100%;
        overflow-x: auto;
    }
`;
export default GlobalStyles;
