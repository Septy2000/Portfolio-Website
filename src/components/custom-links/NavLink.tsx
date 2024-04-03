import React from "react";
import Link from "next/link";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
    return (
        <Link href={href}>
            <h3>{children}</h3>
        </Link>
    );
}
