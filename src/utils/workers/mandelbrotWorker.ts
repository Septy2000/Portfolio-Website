import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";

self.onmessage = (event) => {
    const { column, boundaries, width, height, maxIterations } = event.data;
    const columnValues: number[] = [];
    for (let row = 0; row < height; row++) {
        const complexPoint = complexPlanePoint(
            column,
            row,
            boundaries,
            width,
            height
        );
        const iterationsReached = mandelbrotIterationCalculator(
            complexPoint,
            maxIterations
        );
        columnValues.push(iterationsReached);
    }

    self.postMessage({ column, columnValues });
};
