"use client";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.padding.medium};
    padding-top: ${({ theme }) => theme.padding.small};
    padding-bottom: 0;
    position: relative;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        padding: ${({ theme }) => theme.padding.small};
        padding-bottom: 0;
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
    background: #0d0e14;
`;

export const CoordinateOverlay = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: rgba(255, 255, 255, 0.85);
    font-family: monospace;
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    pointer-events: none;
    user-select: none;
`;

// --- Desktop Sidebar ---

export const Sidebar = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    padding-top: var(--navbar-height, 62px);
    background: rgba(13, 14, 20, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
    color: ${({ theme }) => theme.colors.text.secondary};
    z-index: 50;
    display: flex;
    flex-direction: column;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
    transition: transform 0.3s ease;

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px ${({ theme }) => theme.padding.small};
    flex-shrink: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const SidebarContent = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 ${({ theme }) => theme.padding.small};
    padding-bottom: ${({ theme }) => theme.padding.small};

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.25);
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.12) transparent;
`;

export const SidebarTitle = styled.span`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
`;

export const SidebarToggle = styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.35);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: color 0.2s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const SidebarOpenTab = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    top: 50%;
    right: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
    transform: translateY(-50%);
    width: 28px;
    height: 56px;
    border: none;
    border-radius: 8px 0 0 8px;
    background: rgba(19, 20, 26, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.9rem;
    cursor: pointer;
    z-index: 51;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
        right 0.3s ease,
        color 0.2s ease,
        background 0.2s ease;

    &:hover {
        background: rgba(13, 14, 20, 0.9);
        color: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;

// --- Mobile Bottom Sheet ---

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
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(255, 149, 0, 0.3);
    background: rgba(13, 14, 20, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.3rem;
    cursor: pointer;
    z-index: 100;
    box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(255, 149, 0, 0.1);
    align-items: center;
    justify-content: center;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(255, 149, 0, 0.15);
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
    background: rgba(0, 0, 0, 0.6);
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
    max-height: 80dvh;
    overflow-y: auto;
    overscroll-behavior: contain;
    z-index: 100;
    background: #13141c;
    border-radius: ${({ theme }) => theme.borderRadius.medium}
        ${({ theme }) => theme.borderRadius.medium} 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.5);
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const BottomSheetTitle = styled.span`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
`;

export const BottomSheetClose = styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.35);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: color 0.2s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }
`;
