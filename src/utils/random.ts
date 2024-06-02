/**
 * Generates a random integer between a lower and an upper bound (inclusive).
 * @param {number} lowerBound - The lower bound of the range.
 * @param {number} upperBound - The upper bound of the range.
 * @returns {number} - The generated random integer.
 */
export function randomWithinBounds(
    lowerBound: number,
    upperBound: number
): number {
    return (
        Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound
    );
}
