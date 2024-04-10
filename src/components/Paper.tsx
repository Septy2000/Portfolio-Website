"use client";
import React from "react";
import { PaperStyled } from "@/styles/Paper.styled";

type Size = "small" | "medium" | "large";

type PaperProps = {
    elevation?: number;
    size: Size;
    children: React.ReactNode;
};

function Paper({ children, elevation, size }: PaperProps) {
    return (
        <PaperStyled elevation={elevation} size={size}>
            {children}
        </PaperStyled>
    );
}

export default Paper;
