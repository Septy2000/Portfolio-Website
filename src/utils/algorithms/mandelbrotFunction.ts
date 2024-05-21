import { ComplexNumber } from "@/_types/math";

const THRESHOLD_VALUE = 2;
/**
 * Calculates the number of iterations for a given complex number in the Mandelbrot set.
 * @param {ComplexNumber} c - The complex number for which to calculate iterations.
 * @param {number} maxIterations - The maximum number of iterations to perform.
 * @returns {number} - The number of iterations before reaching the escape condition.
 */
export default function mandelbrotIterationCalculator(
    c: ComplexNumber,
    maxIterations: number
): number {
    // Initialize Z to zero
    let z: ComplexNumber = { x: 0, y: 0 };
    let iterations = 0;

    // Iterate until escape condition or max iterations reached
    while (iterations < maxIterations && isWithinThreshold(z)) {
        // Calculate Z squared
        const zSquared: ComplexNumber = {
            x: z.x * z.x - z.y * z.y,
            y: 2 * z.x * z.y,
        };

        // Update Z by adding C
        z = {
            x: zSquared.x + c.x,
            y: zSquared.y + c.y,
        };

        iterations++;
    }

    return iterations;
}

/**
 * Checks if the absolute value of both parts of the given complex number are within the threshold.
 * @param {ComplexNumber} z - The complex number to check.
 * @returns {boolean} - True if the absolute value of both parts of z are less than or equal to 2, otherwise false.
 */
function isWithinThreshold(z: ComplexNumber): boolean {
    return Math.abs(z.x) + Math.abs(z.y) <= THRESHOLD_VALUE;
}
