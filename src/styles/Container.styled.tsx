"use client";
import styled from "styled-components";

export const FlexCenterContainer = styled.div<{
    pt?: string;
    pb?: string;
    pr?: string;
    pl?: string;
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    p?: string;
    m?: string;
}>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.surface.primary};
    padding: ${({ p }) => (p ? p : "none")};
    padding-left: ${({ pl }) => (pl ? pl : "none")};
    padding-right: ${({ pr }) => (pr ? pr : "none")};
    padding-top: ${({ pt }) => (pt ? pt : "none")};
    padding-bottom: ${({ pb }) => (pb ? pb : "none")};
    margin: ${({ m }) => (m ? m : "none")};
    margin-top: ${({ mt }) => (mt ? mt : "none")};
    margin-left: ${({ ml }) => (ml ? ml : "none")};
    margin-bottom: ${({ mb }) => (mb ? mb : "none")};
    margin-right: ${({ mr }) => (mr ? mr : "none")};
`;
