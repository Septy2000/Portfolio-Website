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
    width: "device-width ",
    initialScale: 1,
    minimumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <ThemeClient>
                    <GlobalStyles />
                    <body>{children}</body>
                </ThemeClient>
            </StyledComponentsRegistry>
        </html>
    );
}
