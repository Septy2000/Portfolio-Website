"use client";
const theme = {
    colors: {
        surface: {
            primary: "#fff9f0",
            primary_shade: {
                dark_1: "#f0ebe3",
                dark_2: "#e0dbd3",
                dark_3: "#c8c3bb",
                dark_4: "#a8a49d",
            },
            secondary: "#1A1B25",
            secondary_shade: {
                light_1: "#2C2D3C",
                light_2: "#3E4052",
                light_3: "#525367",
                light_4: "#66687D",
            },
        },
        text: {
            primary: "#2d2e38",
            secondary: "#fff9f0",
            tertiary: "#BBE2EC",
            muted: "#6b6c78",
        },
        green: "#0D9276",
        orange: "#ff9500",
        orange_shade: {
            light_1: "#ffaa33",
            light_2: "#ffbb55",
            light_3: "#ffcc77",
            dark_1: "#e68600",
            dark_2: "#cc7700",
            dark_3: "#b36800",
        },
        error: "#FF4444",
        // New accent colors for variety
        accent: {
            warm: "#ff6b35",
            cool: "#4ecdc4",
            soft: "#f7dc6f",
        },
    },

    padding: {
        xsmall: "8px",
        small: "16px",
        medium: "32px",
        large: "48px",
        xlarge: "64px",
        xxlarge: "96px",
    },

    margin: {
        xsmall: "8px",
        small: "16px",
        medium: "32px",
        large: "48px",
        xlarge: "64px",
    },

    borderRadius: {
        xsmall: "8px",
        small: "12px",
        medium: "20px",
        large: "32px",
        xlarge: "48px",
        round: "50%",
    },

    border: {
        small: "2px",
        medium: "3px",
        large: "4px",
        xlarge: "6px",
        xxlarge: "8px",
    },

    screen: {
        small: "480px",
        medium: "768px",
        large: "1024px",
        xlarge: "1200px",
        xxlarge: "1440px",
    },

    // New: Typography scale
    typography: {
        hero: "clamp(2.5rem, 5vw, 4rem)",
        h1: "clamp(2rem, 4vw, 3rem)",
        h2: "clamp(1.5rem, 3vw, 2rem)",
        h3: "clamp(1.25rem, 2vw, 1.5rem)",
        body: "1.125rem",
        small: "0.875rem",
        tiny: "0.75rem",
    },

    // New: Shadows
    shadows: {
        soft: "0 4px 20px rgba(26, 27, 37, 0.08)",
        medium: "0 8px 30px rgba(26, 27, 37, 0.12)",
        strong: "0 12px 40px rgba(26, 27, 37, 0.18)",
        neumorphic: {
            raised: "8px 8px 16px rgba(200, 195, 187, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)",
            inset: "inset 6px 6px 12px rgba(200, 195, 187, 0.5), inset -6px -6px 12px rgba(255, 255, 255, 0.7)",
            subtle: "4px 4px 10px rgba(200, 195, 187, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.6)",
        },
        glow: "0 0 30px rgba(255, 149, 0, 0.3)",
    },

    // New: Transitions
    transitions: {
        fast: "0.15s ease",
        normal: "0.3s ease",
        slow: "0.5s ease",
        bounce: "0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
};

export default theme;
