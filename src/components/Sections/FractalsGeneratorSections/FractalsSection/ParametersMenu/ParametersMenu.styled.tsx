"use client";
import styled from "styled-components";
import { ButtonDefault } from "@/components/Button/Button.styled";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillStopFill } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${({ theme }) => theme.margin.medium};
    background: ${({ theme }) => theme.colors.surface.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    max-width: 300px;
    height: 100%;
`;

export const MenusContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HorizontalButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 0;
`;

export const ControlButton = styled(ButtonDefault)`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
