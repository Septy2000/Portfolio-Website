import type { Metadata } from "next";
import GlobalStyles from "@/styles/GlobalStyles";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";
import ThemeClient from "@/styles/theme/ThemeClient";

export const metadata: Metadata = {
    title: "Personal Portfolio Website",
    description: "Created by Septimiu-Iulian Calin",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeClient>
            <GlobalStyles />
            <html lang="en">
                <body>
                    <NavigationBar />
                    {children}
                </body>
            </html>
        </ThemeClient>
    );
}
