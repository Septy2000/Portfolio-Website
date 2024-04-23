"use client";
import React from "react";
import { PaperStyled } from "@/styles/Paper.styled";

type Size = "small" | "medium" | "large";

type PaperProps = {
    elevation?: number;
    children: React.ReactNode;
};

function Paper({ children, elevation }: PaperProps) {
    return <PaperStyled $elevation={elevation}>{children}</PaperStyled>;
}

export default Paper;
