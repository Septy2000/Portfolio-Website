import juliaIterationCalculator from "@/utils/algorithms/juliaFunction";
import { ComplexPlaneBoundary } from "@/_types/math";
import { complexPlanePoint } from "@/utils/complexNumbers";

self.onmessage = (event) => {
    const {
        column,
        boundaries,
        width,
        height,
        maxIterations,
        selectedComplexNumber,
    } = event.data;
    const columnValues: number[] = [];

    for (let row = 0; row < height; row++) {
        const complexPoint = complexPlanePoint(
            column,
            row,
            boundaries,
            width,
            height
        );
        const iterationsReached = juliaIterationCalculator(
            complexPoint,
            selectedComplexNumber,
            maxIterations
        );
        columnValues.push(iterationsReached);
    }

    self.postMessage({ column, columnValues });
};
