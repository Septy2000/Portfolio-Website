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
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media ((min-width: ${({ theme }) => theme.screen.medium}) and (max-width: ${({ theme }) => theme.screen.large})) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
        grid-template-columns: repeat(3, 1fr);
    }

    gap: ${({ theme }) => theme.padding.xlarge};
    column-gap: ${({ theme }) => theme.padding.xlarge};
    grid-auto-rows: auto;
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
