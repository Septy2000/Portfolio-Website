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
    // Initialise complex number z
    let z = { x: 0, y: 0 };
    // Iteration number
    let n = 0;
    let z_sqr;
    do {
        // Complex number Z squared
        // The minus exists because i^2 is -1
        z_sqr = {
            x: Math.pow(z.x, 2) - Math.pow(z.y, 2),
            y: 2 * z.x * z.y,
        };

        // Complex number Z with added C (i.e z^2 + c)
        z = {
            x: z_sqr.x + c.x,
            y: z_sqr.y + c.y,
        };
        n += 1;
        // Repeat until the point passes the threshold or reaches maximum iterations
    } while (Math.abs(z.x) + Math.abs(z.y) <= 2 && n < maxIterations);

    return n;
}

/**
 * Checks if the absolute value of both parts of the given complex number are within the threshold.
 * @param {ComplexNumber} z - The complex number to check.
 * @returns {boolean} - True if the absolute value of both parts of z are less than or equal to 2, otherwise false.
 */
function isWithinThreshold(z: ComplexNumber): boolean {
    return Math.abs(z.x) + Math.abs(z.y) <= THRESHOLD_VALUE;
}
