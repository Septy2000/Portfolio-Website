"use client";
import styled, { keyframes } from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.margin.medium};

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        margin: ${({ theme }) => theme.margin.small};
    }
`;

export const GeneratorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CanvasWrapper = styled.div`
    position: relative;
    max-width: 800px;
    width: 100%;
`;

export const ButtonsUnderCanvas = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: ${({ theme }) => theme.margin.small};
`;

export const Canvas = styled.canvas`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.surface.secondary}`};
`;

export const CoordinateOverlay = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    background: rgba(0, 0, 0, 0.65);
    color: white;
    font-family: monospace;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 8px;
    pointer-events: none;
    user-select: none;
`;

export const SidePanelToggle = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
    width: 36px;
    height: 72px;
    border: none;
    border-radius: 0 ${({ theme }) => theme.borderRadius.small} ${({ theme }) => theme.borderRadius.small} 0;
    background: ${({ theme }) => theme.colors.surface.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.1rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.2);
    transition: background 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surface.secondary_shade.light_1};
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

const slideInFromRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const SidePanelOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 49;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

export const SidePanelContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    background: ${({ theme }) => theme.colors.surface.secondary};
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
    z-index: 50;
    overflow-y: auto;
    animation: ${slideInFromRight} 0.25s ease;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

export const SidePanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
`;

export const SidePanelTitle = styled.span`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
    font-weight: 600;
`;

export const SidePanelClose = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
        color: ${({ theme }) => theme.colors.text.secondary};
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
`;

export const MobileMenuToggle = styled.button`
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, background 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: flex;
    }
`;

export const BottomSheetOverlay = styled.div`
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: block;
    }
`;

export const BottomSheetContainer = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 80vh;
    overflow-y: auto;
    z-index: 100;
    background: ${({ theme }) => theme.colors.surface.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.medium} ${({ theme }) => theme.borderRadius.medium} 0 0;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
    animation: ${slideUp} 0.3s ease;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: block;
    }
`;

export const BottomSheetHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.surface.secondary_shade.light_2};
`;

export const BottomSheetTitle = styled.span`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
    font-weight: 600;
`;

export const BottomSheetClose = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
        color: ${({ theme }) => theme.colors.text.secondary};
    }
`;
