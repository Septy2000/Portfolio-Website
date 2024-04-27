import React from "react";
import * as Styled from "./PlainLinkWrapper.styled";
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
        <Styled.PlainLinkWrapper>
            <Link href={href}>{children}</Link>
        </Styled.PlainLinkWrapper>
    );
}
