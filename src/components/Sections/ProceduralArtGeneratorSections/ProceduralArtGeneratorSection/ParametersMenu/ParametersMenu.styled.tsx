"use client";
import styled from "styled-components";
import { ButtonClassic } from "@/components/Button/Button.styled";
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

export const ControlButton = styled(ButtonClassic)`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        width: 100%;
    }
`;

export const GenerateButton = styled(ControlButton)`
    background-color: #1a3a2a;
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.green};
    }
    &:not(:disabled):active {
        box-shadow: inset 5px 5px 5px -1px #064d3a, inset -5px -5px 5px -1px ${({ theme }) => theme.colors.green};
        background-color: ${({ theme }) => theme.colors.green};
    }
`;

export const StopButton = styled(ControlButton)`
    background-color: #3a1a1a;
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.error};
    }
    &:not(:disabled):active {
        box-shadow: inset 5px 5px 5px -1px #991111, inset -5px -5px 5px -1px ${({ theme }) => theme.colors.error};
        background-color: ${({ theme }) => theme.colors.error};
    }
`;

export const SaveButton = styled(ControlButton)`
    background-color: #3a2a1a;
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.orange};
    }
    &:not(:disabled):active {
        box-shadow: ${({ theme }) =>
            `inset 5px 5px 5px -1px ${theme.colors.orange_shade.dark_3}, inset -5px -5px 5px -1px ${theme.colors.orange}`};
        background-color: ${({ theme }) => theme.colors.orange};
    }
`;

export const PlayIcon = styled(BsFillPlayFill)`
    font-size: 1.3rem;
    color: limegreen;
`;

export const StopIcon = styled(BsFillStopFill)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.error};
`;

export const UndoZoomIcon = styled(BsArrow90DegLeft)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ResetZoomIcon = styled(BsArrowCounterclockwise)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FullWidthButton = styled(ButtonClassic)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`;

export const DownloadIcon = styled(BsDownload)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const LinkIcon = styled(BsLink45Deg)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const InputErrorWrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-column: 1 / -1;
    }
`;

export const ProgressContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        grid-column: 1 / -1;
    }
`;

export const ProgressText = styled.span`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.muted};
    text-align: right;
`;

export const ProgressBarTrack = styled.div`
    width: 100%;
    height: 6px;
    background: ${({ theme }) => theme.colors.surface.secondary_shade.light_1};
    border-radius: 3px;
    overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $progress: number }>`
    height: 100%;
    width: ${({ $progress }) => `${$progress * 100}%`};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.green}, #10b981);
    border-radius: 3px;

`;
