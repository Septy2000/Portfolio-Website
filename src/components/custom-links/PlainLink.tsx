import React from "react";
import { WrapperNoDecoration } from "@/styles/WrapperNoDecoration.styled";
import Link from "next/link";

type PlainLinkProps = {
    children: React.ReactNode;
    href: string;
};

export default function PlainLink({ children, href }: PlainLinkProps) {
    return (
        <WrapperNoDecoration>
            <Link href={href}>{children}</Link>
        </WrapperNoDecoration>
    );
}
