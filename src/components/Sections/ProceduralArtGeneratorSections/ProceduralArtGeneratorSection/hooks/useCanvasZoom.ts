import { useRef, useState, useEffect, MutableRefObject, RefObject } from "react";
import { ComplexPlaneBoundary } from "@/_types/math";
import { TypedParameters } from "@/_types/common";

export const DEFAULT_COMPLEX_PLANE_BOUNDARIES: ComplexPlaneBoundary = {
    RE_MIN: -2,
    RE_MAX: 2,
    IM_MIN: -1.5,
    IM_MAX: 1.5,
};

export const LYAPUNOV_DEFAULT_BOUNDARIES: ComplexPlaneBoundary = {
    RE_MIN: 2,
    RE_MAX: 4,
    IM_MIN: 2,
    IM_MAX: 4,
};

export function useCanvasZoom({
    canvasRef,
    contextRef,
    scalingFactorRef,
    localTypedParametersRef,
    isGeneratingRef,
    complexPlaneBoundariesRef,
    generateImageRef,
}: {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    contextRef: MutableRefObject<CanvasRenderingContext2D | null>;
    scalingFactorRef: MutableRefObject<number>;
    localTypedParametersRef: MutableRefObject<TypedParameters>;
    isGeneratingRef: MutableRefObject<boolean>;
    complexPlaneBoundariesRef: MutableRefObject<ComplexPlaneBoundary>;
    generateImageRef: MutableRefObject<() => void>;
}) {
    const isZoomingRef = useRef(false);
    const zoomHistory = useRef<ComplexPlaneBoundary[]>([]);
    const zoomStartCoordinatesRef = useRef<{ xStart: number; yStart: number } | null>(null);
    const canvasImageDataRef = useRef<ImageData | null>(null);
    const [hoverCoords, setHoverCoords] = useState<{ re: number; im: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseout", handleMouseOut);
        canvas.addEventListener("touchstart", handleMouseDown, { passive: false });
        canvas.addEventListener("touchmove", handleMouseMove, { passive: false });
        canvas.addEventListener("touchend", handleMouseUp);
        canvas.addEventListener("touchcancel", handleMouseOut);

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseout", handleMouseOut);
            canvas.removeEventListener("touchstart", handleMouseDown);
            canvas.removeEventListener("touchmove", handleMouseMove);
            canvas.removeEventListener("touchend", handleMouseUp);
            canvas.removeEventListener("touchcancel", handleMouseOut);
        };
    }, []);

    function handleMouseDown(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (
            !canvasRef.current ||
            localTypedParametersRef.current.algorithm === "perlin" ||
            isGeneratingRef.current
        )
            return;

        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const xStart = (clientX - rect.left) * scalingFactorRef.current;
        const yStart = (clientY - rect.top) * scalingFactorRef.current;

        isZoomingRef.current = true;
        zoomStartCoordinatesRef.current = { xStart, yStart };

        canvasImageDataRef.current =
            contextRef.current?.getImageData(
                0,
                0,
                localTypedParametersRef.current.width,
                localTypedParametersRef.current.height
            ) || null;
    }

    function handleMouseMove(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (!canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const xMouse = (clientX - rect.left) * scalingFactorRef.current;
        const yMouse = (clientY - rect.top) * scalingFactorRef.current;

        if (localTypedParametersRef.current.algorithm !== "perlin") {
            setHoverCoords({
                re: reComplexPlanePoint(xMouse),
                im: imComplexPlanePoint(yMouse),
            });
        }

        if (!zoomStartCoordinatesRef.current || !isZoomingRef.current) return;

        const ctx = contextRef.current;
        if (!ctx || !canvasImageDataRef.current) return;

        const xStart = zoomStartCoordinatesRef.current.xStart;
        const yStart = zoomStartCoordinatesRef.current.yStart;

        ctx.putImageData(canvasImageDataRef.current, 0, 0);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.strokeRect(
            xStart,
            yStart,
            (((xMouse > xStart ? 1 : -1) * 4) / 3) * Math.abs(yMouse - yStart),
            yMouse - yStart
        );
    }

    function handleMouseUp(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (!canvasRef.current || !zoomStartCoordinatesRef.current || !isZoomingRef.current) return;

        isZoomingRef.current = false;

        zoomHistory.current = [...zoomHistory.current, complexPlaneBoundariesRef.current];

        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
        const clientY = "changedTouches" in e ? e.changedTouches[0].clientY : e.clientY;

        const xStart = zoomStartCoordinatesRef.current.xStart;
        const yStart = zoomStartCoordinatesRef.current.yStart;

        const xMouse = (clientX - rect.left) * scalingFactorRef.current;
        const yMouse = (clientY - rect.top) * scalingFactorRef.current;

        const xEnd = xStart + (((xMouse > xStart ? 1 : -1) * 4) / 3) * Math.abs(yMouse - yStart);
        const yEnd = yMouse;

        const tempComplexPlaneBoundaries: ComplexPlaneBoundary = {
            RE_MIN: Math.min(reComplexPlanePoint(xStart), reComplexPlanePoint(xEnd)),
            RE_MAX: Math.max(reComplexPlanePoint(xStart), reComplexPlanePoint(xEnd)),
            IM_MIN: Math.min(imComplexPlanePoint(yStart), imComplexPlanePoint(yEnd)),
            IM_MAX: Math.max(imComplexPlanePoint(yStart), imComplexPlanePoint(yEnd)),
        };

        complexPlaneBoundariesRef.current = tempComplexPlaneBoundaries;

        generateImageRef.current();
    }

    function handleMouseOut() {
        setHoverCoords(null);

        if (!isZoomingRef.current || !canvasRef.current) return;

        isZoomingRef.current = false;
        if (canvasImageDataRef.current && contextRef.current) {
            contextRef.current.putImageData(canvasImageDataRef.current, 0, 0);
        }
    }

    function reComplexPlanePoint(x: number) {
        const { RE_MIN, RE_MAX } = complexPlaneBoundariesRef.current;
        return RE_MIN + (x / localTypedParametersRef.current.width) * (RE_MAX - RE_MIN);
    }

    function imComplexPlanePoint(y: number) {
        const { IM_MIN, IM_MAX } = complexPlaneBoundariesRef.current;
        return IM_MIN + (y / localTypedParametersRef.current.height) * (IM_MAX - IM_MIN);
    }

    function undoZoom() {
        const previousBoundaries = zoomHistory.current.pop();

        if (previousBoundaries) {
            complexPlaneBoundariesRef.current = previousBoundaries;
            generateImageRef.current();
        }
    }

    function resetZoom() {
        complexPlaneBoundariesRef.current =
            localTypedParametersRef.current.algorithm === "lyapunov"
                ? LYAPUNOV_DEFAULT_BOUNDARIES
                : DEFAULT_COMPLEX_PLANE_BOUNDARIES;
        zoomHistory.current = [];
        generateImageRef.current();
    }

    function resetHistory() {
        zoomHistory.current = [];
    }

    function getZoomHistory() {
        return zoomHistory.current;
    }

    function loadZoomState(boundaries: ComplexPlaneBoundary, history: ComplexPlaneBoundary[]) {
        complexPlaneBoundariesRef.current = boundaries;
        zoomHistory.current = history;
    }

    return {
        undoZoom,
        resetZoom,
        resetHistory,
        zoomHistoryLength: zoomHistory.current.length,
        hoverCoords,
        getZoomHistory,
        loadZoomState,
    };
}
