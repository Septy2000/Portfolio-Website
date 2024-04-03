import React from "react";
import Link from "next/link";

type NavLinkProps = {
    children: string;
    href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
    return (
        <Link href={`/${href.toLowerCase()}`}>
            <h3>{children.toUpperCase()}</h3>
        </Link>
    );
}
