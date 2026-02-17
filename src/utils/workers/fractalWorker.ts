import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import juliaIterationCalculator from "@/utils/algorithms/juliaFunction";
import burningShipIterationCalculator from "@/utils/algorithms/burningShipFunction";
import tricornIterationCalculator from "@/utils/algorithms/tricornFunction";
import newtonIterationCalculator from "@/utils/algorithms/newtonFunction";
import lyapunovExponentCalculator from "@/utils/algorithms/lyapunovFunction";
import phoenixIterationCalculator from "@/utils/algorithms/phoenixFunction";
import magnetIterationCalculator from "@/utils/algorithms/magnetFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";

self.onmessage = (event) => {
    const {
        column, boundaries, width, height, maxIterations,
        algorithm, selectedComplexNumber, smoothColoring, bailoutSq,
        newtonDegree, lyapunovSequence, phoenixP, phoenixQ,
    } = event.data;
    const columnValues: number[] = [];
    const rootIndices: number[] | null = algorithm === "newton" ? [] : null;

    for (let row = 0; row < height; row++) {
        const complexPoint = complexPlanePoint(column, row, boundaries, width, height);

        if (algorithm === "newton") {
            const result = newtonIterationCalculator(complexPoint, newtonDegree, maxIterations);
            columnValues.push(result.iterations);
            rootIndices!.push(result.rootIndex);
        } else if (algorithm === "lyapunov") {
            const a = complexPoint.x;
            const b = complexPoint.y;
            const exponent = lyapunovExponentCalculator(a, b, lyapunovSequence, maxIterations);
            if (exponent >= 0) {
                columnValues.push(maxIterations);
            } else {
                const LN4 = 1.3862943611198906;
                columnValues.push(Math.min((-exponent / LN4) * maxIterations, maxIterations - 1));
            }
        } else {
            const result =
                algorithm === "mandelbrot"
                    ? mandelbrotIterationCalculator(complexPoint, maxIterations, bailoutSq)
                    : algorithm === "julia"
                    ? juliaIterationCalculator(complexPoint, selectedComplexNumber, maxIterations, bailoutSq)
                    : algorithm === "burning-ship"
                    ? burningShipIterationCalculator(complexPoint, maxIterations, bailoutSq)
                    : algorithm === "tricorn"
                    ? tricornIterationCalculator(complexPoint, maxIterations, bailoutSq)
                    : algorithm === "phoenix"
                    ? phoenixIterationCalculator(complexPoint, phoenixP, phoenixQ, maxIterations, bailoutSq)
                    : magnetIterationCalculator(complexPoint, maxIterations, Math.max(bailoutSq, 10000));

            if (smoothColoring && result.iterations < maxIterations) {
                const smooth = result.iterations + 1 - Math.log2(Math.log2(result.zMagnitudeSq));
                columnValues.push(Number.isFinite(smooth) && smooth >= 0 ? smooth : result.iterations);
            } else {
                columnValues.push(result.iterations);
            }
        }
    }

    self.postMessage({ column, columnValues, rootIndices });
};
