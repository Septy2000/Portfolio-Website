"use client";
import React from "react";
import { StyledPaper } from "@/styles/Paper.styled";

interface PaperProps {
    elevation?: number;
    children: React.ReactNode;
}

function Paper({ children, elevation }: PaperProps) {
    return <StyledPaper elevation={elevation}>{children}</StyledPaper>;
}

export default Paper;
