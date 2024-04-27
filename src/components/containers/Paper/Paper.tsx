"use client";
import React from "react";
import * as Styled from "./Paper.styled";

type PaperProps = {
    elevation?: number;
    children: React.ReactNode;
};

export default function Paper({ children, elevation }: PaperProps) {
    return <Styled.Paper $elevation={elevation}>{children}</Styled.Paper>;
}
