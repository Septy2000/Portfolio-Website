"use client";
import Link from "next/link";
import styled from "styled-components";

export const PlainLinkWrapper = styled(Link)`
    * {
        text-decoration: none;
    }

    a {
        color: inherit;
    }
`;
