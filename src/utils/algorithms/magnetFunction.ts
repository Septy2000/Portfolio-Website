import { ComplexNumber } from "@/_types/math";
import { IterationResult } from "./mandelbrotFunction";

/**
 * Magnet fractal Type I: z_{n+1} = ((z^2 + c - 1) / (2z + c - 2))^2
 * Mandelbrot-like: c = pixel, z_0 = 0.
 * Has both escape (|z| > bailout) and convergence to fixed point 1.
 */
export default function magnetIterationCalculator(
    c: ComplexNumber,
    maxIterations: number,
    bailoutSq: number = 10000
): IterationResult {
    let zx = 0;
    let zy = 0;
    let iteration = 0;
    let magnitudeSq = 0;

    for (; iteration < maxIterations; iteration++) {
        // numerator = z^2 + c - 1
        const numX = zx * zx - zy * zy + c.x - 1;
        const numY = 2 * zx * zy + c.y;

        // denominator = 2z + c - 2
        const denX = 2 * zx + c.x - 2;
        const denY = 2 * zy + c.y;

        // |denominator|^2
        const denMagSq = denX * denX + denY * denY;
        if (denMagSq < 1e-10) {
            return { iterations: maxIterations, zMagnitudeSq: magnitudeSq };
        }

        // division: num / den
        const divX = (numX * denX + numY * denY) / denMagSq;
        const divY = (numY * denX - numX * denY) / denMagSq;

        // square the result: (num/den)^2
        zx = divX * divX - divY * divY;
        zy = 2 * divX * divY;

        magnitudeSq = zx * zx + zy * zy;

        // Escape check
        if (magnitudeSq > bailoutSq) {
            iteration++;
            break;
        }

        // Convergence to fixed point 1
        const dx = zx - 1;
        const dy = zy;
        if (dx * dx + dy * dy < 1e-6) {
            return { iterations: maxIterations, zMagnitudeSq: magnitudeSq };
        }
    }

    return { iterations: iteration, zMagnitudeSq: magnitudeSq };
}
