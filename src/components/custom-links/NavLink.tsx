import React from "react";
import PlainLink from "../wrappers/PlainLinkWrapper";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
    return (
        <PlainLink href={href}>
            <h3>{children}</h3>
        </PlainLink>
    );
}
