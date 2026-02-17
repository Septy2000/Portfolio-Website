import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import juliaIterationCalculator from "@/utils/algorithms/juliaFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";

self.onmessage = (event) => {
    const {
        column, boundaries, width, height, maxIterations,
        algorithm, selectedComplexNumber, smoothColoring, bailoutSq,
    } = event.data;
    const columnValues: number[] = [];

    for (let row = 0; row < height; row++) {
        const complexPoint = complexPlanePoint(column, row, boundaries, width, height);
        const result =
            algorithm === "mandelbrot"
                ? mandelbrotIterationCalculator(complexPoint, maxIterations, bailoutSq)
                : juliaIterationCalculator(complexPoint, selectedComplexNumber, maxIterations, bailoutSq);

        if (smoothColoring && result.iterations < maxIterations) {
            columnValues.push(
                result.iterations + 1 - Math.log2(Math.log2(result.zMagnitudeSq))
            );
        } else {
            columnValues.push(result.iterations);
        }
    }

    self.postMessage({ column, columnValues });
};
