import { ComplexNumber } from "@/_types/math";

const THRESHOLD_VALUE = 2;

/**
 * Calculates the number of iterations for a given complex number in the Julia set.
 * @param {ComplexNumber} z - The complex number z to use as the starting point.
 * @param {ComplexNumber} c - The complex number for which to calculate iterations.
 * @param {number} maxIterations - The maximum number of iterations to perform.
 * @returns {number} - The number of iterations before reaching the escape condition.
 */
export default function juliaIterationCalculator(
    z: ComplexNumber,
    c: ComplexNumber,
    maxIterations: number
): number {
    // Initialize the iteration counter
    let iteration = 0;

    // Iterate until z escapes the threshold or we reach the maximum number of iterations
    do {
        // Calculate z^2
        const zSquared = {
            x: z.x * z.x - z.y * z.y, // Real part: x^2 - y^2
            y: 2 * z.x * z.y, // Imaginary part: 2xy
        };

        // Update z to z^2 + c
        z = {
            x: zSquared.x + c.x,
            y: zSquared.y + c.y,
        };

        // Increment the iteration counter
        iteration += 1;
    } while (
        Math.abs(z.x) + Math.abs(z.y) <= THRESHOLD_VALUE &&
        iteration < maxIterations
    );

    return iteration;
}
