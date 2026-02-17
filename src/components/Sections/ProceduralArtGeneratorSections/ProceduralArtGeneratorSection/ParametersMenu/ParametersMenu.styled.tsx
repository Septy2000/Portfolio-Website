"use client";
import styled from "styled-components";
import { ButtonClassic } from "@/components/Button/Button.styled";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillStopFill } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

export const Container = styled.div`
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

    @media (max-width: ${({ theme }) => theme.screen.small}) {
        margin: ${({ theme }) => theme.margin.small} 0;
        width: 100%;
        max-width: none;
    }
`;

export const MenusContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const HorizontalButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.screen.small}) {
        flex-direction: column;
        align-items: center;

        button {
            width: 100%;
            margin-bottom: ${({ theme }) => theme.margin.small};
        }
    }
`;

export const ControlButton = styled(ButtonClassic)`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    @media (max-width: ${({ theme }) => theme.screen.small}) {
        width: 100%;
    }
`;

export const GenerateButton = styled(ControlButton)`
    background-color: #1a3a2a;
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.green};
    }
    &:not(:disabled):active {
        background-color: ${({ theme }) => theme.colors.green};
    }
`;

export const StopButton = styled(ControlButton)`
    background-color: #3a1a1a;
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.error};
    }
    &:not(:disabled):active {
        background-color: ${({ theme }) => theme.colors.error};
    }
`;

export const SaveButton = styled(ControlButton)`
    background-color: #3a2a1a;
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.orange};
    }
    &:not(:disabled):active {
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
    color: ${({ theme }) => theme.colors.orange};
`;

export const LinkIcon = styled(BsLink45Deg)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.orange};
`;
