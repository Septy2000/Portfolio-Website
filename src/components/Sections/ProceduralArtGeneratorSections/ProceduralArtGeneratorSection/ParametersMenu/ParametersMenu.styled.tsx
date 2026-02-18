"use client";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillStopFill } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

export const Container = styled.div<{ $variant?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${({ theme }) => theme.margin.medium};
    background: ${({ theme }) => theme.colors.surface.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    padding: ${({ theme }) => theme.padding.small};
    max-width: 300px;
    height: 100%;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        margin: 0;
        width: 100%;
        max-width: none;
        border-radius: 0;
        box-shadow: none;
    }

    ${({ $variant }) =>
        $variant === "buttons-only" &&
        `
        background: transparent;
        box-shadow: none;
        margin-left: 0;
        padding: 0;
        max-width: none;
        width: 100%;
    `}

    ${({ $variant }) =>
        $variant === "menus-only" &&
        `
        margin-left: 0;
        max-width: none;
        width: 100%;
        box-shadow: none;
        border-radius: 0;
        background: transparent;
    `}
`;

export const MenusContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
    }

    @media (max-width: ${({ theme }) => theme.screen.small}) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const HorizontalButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: contents;
    }
`;

export const ControlButton = styled.button`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    padding: 10px 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: ${({ theme }) => theme.borderRadius.xsmall};
    background: rgba(255, 255, 255, 0.04);
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    gap: 4px;
    transition: all 0.2s ease;

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.15);
    }

    &:not(:disabled):active {
        transform: scale(0.97);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: 100%;
    }
`;

export const GenerateButton = styled(ControlButton)`
    border-color: rgba(13, 146, 118, 0.3);
    background: rgba(13, 146, 118, 0.1);

    &:not(:disabled):hover {
        background: rgba(13, 146, 118, 0.2);
        border-color: rgba(13, 146, 118, 0.5);
        box-shadow: 0 0 16px rgba(13, 146, 118, 0.15);
    }
`;

export const StopButton = styled(ControlButton)`
    border-color: rgba(255, 68, 68, 0.3);
    background: rgba(255, 68, 68, 0.08);

    &:not(:disabled):hover {
        background: rgba(255, 68, 68, 0.15);
        border-color: rgba(255, 68, 68, 0.5);
        box-shadow: 0 0 16px rgba(255, 68, 68, 0.1);
    }
`;

export const SaveButton = styled(ControlButton)`
    border-color: rgba(255, 149, 0, 0.25);
    background: rgba(255, 149, 0, 0.06);

    &:not(:disabled):hover {
        background: rgba(255, 149, 0, 0.12);
        border-color: rgba(255, 149, 0, 0.4);
        box-shadow: 0 0 16px rgba(255, 149, 0, 0.1);
    }
`;

export const PlayIcon = styled(BsFillPlayFill)`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.green};
`;

export const StopIcon = styled(BsFillStopFill)`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.error};
`;

export const UndoZoomIcon = styled(BsArrow90DegLeft)`
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.5);
`;

export const ResetZoomIcon = styled(BsArrowCounterclockwise)`
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.5);
`;

export const FullWidthButton = styled(ControlButton)`
    width: 100%;
`;

export const DownloadIcon = styled(BsDownload)`
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.5);
`;

export const LinkIcon = styled(BsLink45Deg)`
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.5);
`;

export const InputErrorWrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-column: 1 / -1;
    }
`;
