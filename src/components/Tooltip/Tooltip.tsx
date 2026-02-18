"use client";
import React, { useRef, useCallback } from "react";
import { BsInfoCircle } from "react-icons/bs";
import * as Styled from "./Tooltip.styled";

export default function Tooltip({ text }: { text: string }) {
    const textRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = useCallback(() => {
        const el = textRef.current;
        if (!el) return;
        el.style.left = "25%";
        el.style.right = "auto";
        el.style.transform = "translateX(-25%)";
        const rect = el.getBoundingClientRect();
        if (rect.left < 8) {
            el.style.left = "0";
            el.style.transform = "none";
        } else if (rect.right > window.innerWidth - 8) {
            el.style.left = "auto";
            el.style.right = "0";
            el.style.transform = "none";
        }
    }, []);

    return (
        <Styled.Container onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter}>
            <Styled.Icon>
                <BsInfoCircle />
            </Styled.Icon>
            <Styled.Text ref={textRef}>{text}</Styled.Text>
        </Styled.Container>
    );
}
