"use client";
import { createGlobalStyle } from "styled-components";
import theme from "./theme/theme";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Helvetica", sans-serif, Arial;
    }

    html, body {
        margin: 0;
        height: 100%;
    }

    body {
        background: linear-gradient(180deg, #3d3a3a, #dbdbdb); /* Diagonal gradient */
    }
`;
export default GlobalStyles;
