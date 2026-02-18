import type { Metadata, Viewport } from "next";
import GlobalStyles from "@/styles/GlobalStyles";
import React from "react";
import ThemeClient from "@/styles/theme/ThemeClient";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
    title: {
        default: "Septimiu Calin | Software Engineer",
        template: "%s | Septimiu Calin",
    },
    description:
        "Software Engineer based in London. Experienced in React, TypeScript, Java, Kotlin, C++ and more. Explore my projects and professional journey.",
    keywords: [
        "software engineer",
        "web developer",
        "React",
        "TypeScript",
        "Java",
        "Kotlin",
        "portfolio",
        "London",
        "Septimiu Calin",
        "Septimiu-Iulian Calin",
        "Septimiu Iulian Calin"
    ],
    authors: [{ name: "Septimiu-Iulian Calin" }],
    creator: "Septimiu-Iulian Calin",
    openGraph: {
        type: "website",
        locale: "en_GB",
        title: "Septimiu Calin | Software Engineer",
        description:
            "Software Engineer based in London. Explore my projects, experience, and procedural art generator.",
        siteName: "Septimiu Calin",
    },
    twitter: {
        card: "summary",
        title: "Septimiu Calin | Software Engineer",
        description:
            "Software Engineer based in London. Explore my projects, experience, and procedural art generator.",
    },
    robots: {
        index: true,
        follow: true,
    },
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
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Septimiu-Iulian Calin",
                            alternateName: ["Septimiu Calin", "Septimiu Iulian Calin"],
                            jobTitle: "Software Engineer",
                            worksFor: {
                                "@type": "Organization",
                                name: "American Express",
                            },
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "London",
                                addressCountry: "GB",
                            },
                            knowsAbout: [
                                "React",
                                "TypeScript",
                                "Java",
                                "Kotlin",
                                "C++",
                                "Swift",
                                "Web Development",
                                "Software Engineering",
                            ],
                            alumniOf: {
                                "@type": "CollegeOrUniversity",
                                name: "King's College London",
                            },
                        }),
                    }}
                />
            </head>
            <StyledComponentsRegistry>
                <ThemeClient>
                    <GlobalStyles />
                    <body>{children}</body>
                </ThemeClient>
            </StyledComponentsRegistry>
        </html>
    );
}
