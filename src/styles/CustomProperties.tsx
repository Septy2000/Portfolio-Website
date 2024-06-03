"use client";
import { css } from "styled-components";

export type CustomStylingProps = {
    $pv?: string;
    $ph?: string;
    $mv?: string;
    $mh?: string;
    $p?: string;
    $m?: string;
    $fontSize?: string;
};

export const customPropertiesMixin = css<CustomStylingProps>`
    ${({ $p }) => $p && `padding: ${$p};`}
    ${({ $ph }) => $ph && `padding-left: ${$ph};`}
    ${({ $ph }) => $ph && `padding-right: ${$ph};`}
    ${({ $pv }) => $pv && `padding-top: ${$pv};`}
    ${({ $pv }) => $pv && `padding-bottom: ${$pv};`}
    ${({ $m }) => $m && `margin: ${$m};`}
    ${({ $mv }) => $mv && `margin-top: ${$mv};`}
    ${({ $mh }) => $mh && `margin-left: ${$mh};`}
    ${({ $mv }) => $mv && `margin-bottom: ${$mv};`}
    ${({ $mh }) => $mh && `margin-right: ${$mh};`}
    ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}
`;
