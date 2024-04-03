"use client";
import { createGlobalStyle } from "styled-components";
import theme from "./theme/theme";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif, Arial;
    }

    body {
        background: ${theme.colors.surface.primary};
        color: ${theme.colors.text};
    }
`;

export default GlobalStyles;
