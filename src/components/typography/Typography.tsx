// Header.tsx
"use client";
import React from "react";
import { HeaderSmallStyle, HeaderMediumStyle, HeaderLargeStyle, TextStyle } from "@/styles/Typography.styled";

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary" | "tertiary" | string;
type HeaderProps = {
    size: Size;
    color: Color;
    children: Color;
};
type TextProps = {
    color: Color;
    children: string;
};

export function Header({ children, size, color }: HeaderProps) {
    return (
        <React.Fragment>
            {size === "small" ? (
                <HeaderSmallStyle color={color}>{children}</HeaderSmallStyle>
            ) : size === "medium" ? (
                <HeaderMediumStyle color={color}>{children}</HeaderMediumStyle>
            ) : (
                <HeaderLargeStyle color={color}>{children}</HeaderLargeStyle>
            )}
        </React.Fragment>
    );
}

export function Text({ children, color }: TextProps) {
    return <TextStyle color={color}>{children}</TextStyle>;
}
