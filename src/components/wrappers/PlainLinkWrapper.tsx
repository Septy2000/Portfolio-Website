import React from "react";
import WrapperNoDecoration from "@/components/wrappers/WrapperNoDecoration";
import Link from "next/link";

type PlainLinkWrapperProps = {
    children: React.ReactNode;
    href: string;
};

export default function PlainLinkWrapper({
    children,
    href,
}: PlainLinkWrapperProps) {
    return (
        <WrapperNoDecoration>
            <Link href={href}>{children}</Link>
        </WrapperNoDecoration>
    );
}
