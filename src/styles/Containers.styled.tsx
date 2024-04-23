"use client";
import styled from "styled-components";

export const CardsContainer = styled.div<{
    $pv?: string;
    $ph?: string;
    $mv?: string;
    $mh?: string;
    $p?: string;
    $m?: string;
}>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    background-color: ${({ theme }) => theme.colors.surface.primary};
    padding: ${({ $p }) => ($p ? $p : "none")};
    padding-left: ${({ $ph }) => ($ph ? $ph : "none")};
    padding-right: ${({ $ph }) => ($ph ? $ph : "none")};
    padding-top: ${({ $pv }) => ($pv ? $pv : "none")};
    padding-bottom: ${({ $pv }) => ($pv ? $pv : "none")};
    margin: ${({ $m }) => ($m ? $m : "none")};
    margin-top: ${({ $mv }) => ($mv ? $mv : "none")};
    margin-left: ${({ $mh }) => ($mh ? $mh : "none")};
    margin-bottom: ${({ $mv }) => ($mv ? $mv : "none")};
    margin-right: ${({ $mh }) => ($mh ? $mh : "none")};
`;
