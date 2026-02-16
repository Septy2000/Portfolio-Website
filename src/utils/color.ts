/**
 * Returns an HSL color based on the number of iterations.
 * @param {number} iterations - The number of iterations for the point.
 * @param {number} maxIterations - The maximum number of iterations.
 * @returns {string} - The HSL color as a string.
 */
export function getHSLColor(
    iterations: number,
    maxIterations: number,
    colorIntensity: number
): string {
    // If the point reached the maximum number of iterations, it's part of the Mandelbrot/Julia set and is colored black
    if (iterations === maxIterations) {
        return "black";
    }

    // Calculate the hue based on the number of iterations
    // Increase color intensity to make the colors pop more and add more colors overall
    const hue = colorIntensity * 360 * (iterations / maxIterations);
    return `hsl(${Math.floor(hue)}, 100%, 50%)`;
}

/**
 * Returns an RGB color based on the number of iterations and user-defined RGB weights.
 * @param {number} iterations - The number of iterations for the point.
 * @param {number} maxIterations - The maximum number of iterations.
 * @param {number} redWeight - The weight for the red component.
 * @param {number} greenWeight - The weight for the green component.
 * @param {number} blueWeight - The weight for the blue component.
 * @returns {string} - The RGB color as a string.
 */
export function getRGBColor(
    iterations: number,
    maxIterations: number,
    redWeight: number,
    greenWeight: number,
    blueWeight: number
): string {
    // Represent the number of iterations as a value 0 - 255
    const colorValue = Math.floor(255 * (iterations / maxIterations));
    const red = colorValue * redWeight;
    const green = colorValue * greenWeight;
    const blue = colorValue * blueWeight;

    return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Returns a random HSL color based on the number of iterations and a predefined color palette.
 * @param {number} iterations - The number of iterations for the point.
 * @param {number} maxIterations - The maximum number of iterations.
 * @param {number[]} colors - An array of hue values representing the color palette.
 * @returns {string} - The HSL color as a string.
 */
export function getRandomHSLColor(
    iterations: number,
    maxIterations: number,
    colors: number[]
): string {
    if (iterations === maxIterations) {
        return "black";
    }
    const hue = colors[iterations % colors.length];
    return `hsl(${hue}, 100%, 50%)`;
}

/**
 * Returns an HSL color for a noise value in the range [0, 1].
 */
export function getNoiseHSLColor(noise: number, colorIntensity: number): string {
    const hue = colorIntensity * 360 * noise;
    return `hsl(${Math.floor(hue)}, 100%, 50%)`;
}

/**
 * Returns an RGB color for a noise value in the range [0, 1].
 */
export function getNoiseRGBColor(
    noise: number,
    redWeight: number,
    greenWeight: number,
    blueWeight: number
): string {
    return `rgb(${Math.floor(noise * redWeight * 255)}, ${Math.floor(noise * greenWeight * 255)}, ${Math.floor(noise * blueWeight * 255)})`;
}
