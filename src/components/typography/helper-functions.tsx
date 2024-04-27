import { DefaultTheme } from "styled-components";

export function determineColor(color: string, theme: DefaultTheme) {
    switch (color) {
        case "primary":
            return theme.colors.text.primary;
        case "secondary":
            return theme.colors.text.secondary;
        case "tertiary":
            return theme.colors.text.tertiary;
        default:
            return color;
    }
}
