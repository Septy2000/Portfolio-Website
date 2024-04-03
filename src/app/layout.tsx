import type { Metadata } from "next";
import GlobalStyles from "@/styles/GlobalStyles";
import NavBar from "@/components/NavBar";
import React from "react";
import ThemeClient from "@/styles/theme/ThemeClient";

export const metadata: Metadata = {
    title: "Personal Website",
    description: "Created by Septimiu-Iulian Calin",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeClient>
            <GlobalStyles />
            <html lang="en">
                <body>
                    <NavBar />
                    {children}
                </body>
            </html>
        </ThemeClient>
    );
}
