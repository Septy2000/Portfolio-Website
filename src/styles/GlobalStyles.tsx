"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        background: ${({ theme }) => theme.colors.surface.primary};
        color: ${({ theme }) => theme.colors.text.primary};
        line-height: 1.6;
        overflow-x: hidden;
        position: relative;
        
        /* Subtle noise texture overlay */
        &::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            z-index: 9999;
        }
        
        /* Decorative border */
        border: ${({ theme }) => `${theme.border.xlarge} solid ${theme.colors.surface.secondary}`};
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', Georgia, serif;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.02em;
    }

    p {
        font-family: 'DM Sans', sans-serif;
        line-height: 1.7;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: 'DM Sans', sans-serif;
        cursor: pointer;
        border: none;
        outline: none;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* Custom selection color */
    ::selection {
        background: ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.text.secondary};
    }

    /* Smooth focus states */
    :focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.orange};
        outline-offset: 3px;
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.surface.primary_shade.dark_1};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.surface.primary_shade.dark_3};
        border-radius: 5px;
        
        &:hover {
            background: ${({ theme }) => theme.colors.orange};
        }
    }
`;

export default GlobalStyles;
