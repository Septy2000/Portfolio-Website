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
    size?: Size;
    color: Color;
    children: React.ReactNode;
    m?: string;
};
type TextProps = {
    color: Color;
    children: React.ReactNode;
    m: string;
};

export function Header({ children, size, color, m }: HeaderProps) {
    let StyledHeader;
    switch (size) {
        case "small":
            StyledHeader = HeaderSmallStyled;
            break;
        case "medium":
            StyledHeader = HeaderMediumStyled;
            break;
        case "large":
            StyledHeader = HeaderLargeStyled;
            break;
        default:
            StyledHeader = HeaderLargeStyled;
            break;
    }
    return (
        <React.Fragment>
            <StyledHeader color={color} $m={m}>
                {children}
            </StyledHeader>
        </React.Fragment>
    );
}

export function Text({ children, color, m }: TextProps) {
    return (
        <TextStyle color={color} $m={m}>
            {children}
        </TextStyle>
    );
}

