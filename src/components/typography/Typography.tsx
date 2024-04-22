// Header.tsx
"use client";
import React from "react";
import {
    HeaderSmallStyled,
    HeaderMediumStyled,
    HeaderLargeStyled,
    TextStyle,
} from "@/styles/Typography.styled";

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary" | "tertiary" | string;
type HeaderProps = {
    size: Size;
    color: Color;
    children: React.ReactNode;
    m: string;
};
type TextProps = {
    color: Color;
    children: React.ReactNode;
    m: string;
};

export function Header({ children, size, color, m }: HeaderProps) {
    return (
        <React.Fragment>
            {size === "small" ? (
                <HeaderSmallStyled color={color} margin={m}>
                    {children}
                </HeaderSmallStyled>
            ) : size === "medium" ? (
                <HeaderMediumStyled color={color} margin={m}>
                    {children}
                </HeaderMediumStyled>
            ) : (
                <HeaderLargeStyled color={color} margin={m}>
                    {children}
                </HeaderLargeStyled>
            )}
        </React.Fragment>
    );
}

export function Text({ children, color, m }: TextProps) {
    return (
        <TextStyle color={color} margin={m}>
            {children}
        </TextStyle>
    );
}
