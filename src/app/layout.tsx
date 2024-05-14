import type { Metadata } from "next";
import GlobalStyles from "@/styles/GlobalStyles";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";
import ThemeClient from "@/styles/theme/ThemeClient";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
    title: "Personal Portfolio Website",
    description: "Created by Septimiu-Iulian Calin",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <ThemeClient>
                    <GlobalStyles />
                    <body>
                        <NavigationBar />
                        {children}
                    </body>
                </ThemeClient>
            </StyledComponentsRegistry>
        </html>
    );
}
