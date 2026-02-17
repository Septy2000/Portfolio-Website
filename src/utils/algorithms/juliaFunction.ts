import { ComplexNumber } from "@/_types/math";
import { IterationResult } from "./mandelbrotFunction";

export default function juliaIterationCalculator(
    z: ComplexNumber,
    c: ComplexNumber,
    maxIterations: number,
    bailoutSq: number = 4
): IterationResult {
    let zx = z.x;
    let zy = z.y;
    let iteration = 0;
    let magnitudeSq = zx * zx + zy * zy;

    while (magnitudeSq <= bailoutSq && iteration < maxIterations) {
        const xTemp = zx * zx - zy * zy + c.x;
        zy = 2 * zx * zy + c.y;
        zx = xTemp;
        magnitudeSq = zx * zx + zy * zy;
        iteration++;
    }

    return { iterations: iteration, zMagnitudeSq: magnitudeSq };
}
