import type { Metadata, Viewport } from "next";
import GlobalStyles from "@/styles/GlobalStyles";
import React from "react";
import ThemeClient from "@/styles/theme/ThemeClient";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
    title: "Personal Portfolio Website",
    description: "Created by Septimiu-Iulian Calin",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    // Critical for iOS safe area support (notch/Dynamic Island)
    viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        // Inline style ensures the background is set immediately before any CSS loads
        // This prevents content from being visible in the notch/safe area on iOS
        <html lang="en" style={{ background: "#fff9f0" }}>
            <StyledComponentsRegistry>
                <ThemeClient>
                    <GlobalStyles />
                    <body>{children}</body>
                </ThemeClient>
            </StyledComponentsRegistry>
        </html>
    );
}
