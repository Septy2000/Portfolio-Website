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
        background: #fff9f0
    }
`;
export default GlobalStyles;
