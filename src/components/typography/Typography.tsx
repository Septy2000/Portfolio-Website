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
};
type TextProps = {
    color: Color;
    children: React.ReactNode;
};

export function Header({ children, size, color }: HeaderProps) {
    return (
        <React.Fragment>
            {size === "small" ? (
                <HeaderSmallStyled color={color}>{children}</HeaderSmallStyled>
            ) : size === "medium" ? (
                <HeaderMediumStyled color={color}>
                    {children}
                </HeaderMediumStyled>
            ) : (
                <HeaderLargeStyled color={color}>{children}</HeaderLargeStyled>
            )}
        </React.Fragment>
    );
}

export function Text({ children, color }: TextProps) {
    return <TextStyle color={color}>{children}</TextStyle>;
}
