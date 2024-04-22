"use client";
import React from "react";
import Paper from "@/components/Paper";
import PlainLink from "./PlainLink";

type Size = "small" | "medium" | "large";

type PaperProps = {
    elevation?: number;
    href: string;
    children: React.ReactNode;
};

function PaperLink({ children, elevation, href }: PaperProps) {
    return (
        <PlainLink href={href}>
            <Paper elevation={elevation}>{children}</Paper>
        </PlainLink>
    );
}

export default PaperLink;
