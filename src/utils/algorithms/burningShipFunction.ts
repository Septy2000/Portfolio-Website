import { ComplexNumber } from "@/_types/math";
import { IterationResult } from "./mandelbrotFunction";

export default function burningShipIterationCalculator(
    c: ComplexNumber,
    maxIterations: number,
    bailoutSq: number = 4
): IterationResult {
    let zx = 0;
    let zy = 0;
    let iteration = 0;
    let magnitudeSq = 0;

    while (magnitudeSq <= bailoutSq && iteration < maxIterations) {
        const xTemp = zx * zx - zy * zy + c.x;
        zy = 2 * Math.abs(zx) * Math.abs(zy) + c.y;
        zx = xTemp;
        magnitudeSq = zx * zx + zy * zy;
        iteration++;
    }

    return { iterations: iteration, zMagnitudeSq: magnitudeSq };
}
