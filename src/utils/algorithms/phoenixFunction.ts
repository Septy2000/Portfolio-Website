import { ComplexNumber } from "@/_types/math";
import { IterationResult } from "./mandelbrotFunction";

/**
 * Phoenix fractal: z_{n+1} = z_n^2 + p + q * z_{n-1}
 * Julia-like: z_0 = pixel position, z_{-1} = 0.
 */
export default function phoenixIterationCalculator(
    z: ComplexNumber,
    p: number,
    q: number,
    maxIterations: number,
    bailoutSq: number = 4
): IterationResult {
    let zx = z.x;
    let zy = z.y;
    let prevZx = 0;
    let prevZy = 0;
    let iteration = 0;
    let magnitudeSq = zx * zx + zy * zy;

    while (magnitudeSq <= bailoutSq && iteration < maxIterations) {
        const xTemp = zx * zx - zy * zy + p + q * prevZx;
        const yTemp = 2 * zx * zy + q * prevZy;
        prevZx = zx;
        prevZy = zy;
        zx = xTemp;
        zy = yTemp;
        magnitudeSq = zx * zx + zy * zy;
        iteration++;
    }

    return { iterations: iteration, zMagnitudeSq: magnitudeSq };
}
