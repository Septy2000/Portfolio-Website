import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Procedural Art Generator",
    description:
        "Interactive fractal and procedural art generator. Explore Mandelbrot, Julia, Burning Ship, and more with real-time rendering and custom color palettes.",
    keywords: [
        "fractal generator",
        "Mandelbrot set",
        "Julia set",
        "procedural art",
        "interactive",
        "web app",
    ],
};

export default function ProceduralArtGeneratorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
