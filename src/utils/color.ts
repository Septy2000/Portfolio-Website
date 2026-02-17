export type RGBA = [number, number, number, number];

/**
 * Converts an HSL hue (with fixed s=100%, l=50%) to RGB values (0-255).
 */
function hslToRgb(hue: number): [number, number, number] {
    const h = ((hue % 360) + 360) % 360;
    const x = 1 - Math.abs(((h / 60) % 2) - 1);

    let r: number, g: number, b: number;
    if (h < 60) {
        r = 1; g = x; b = 0;
    } else if (h < 120) {
        r = x; g = 1; b = 0;
    } else if (h < 180) {
        r = 0; g = 1; b = x;
    } else if (h < 240) {
        r = 0; g = x; b = 1;
    } else if (h < 300) {
        r = x; g = 0; b = 1;
    } else {
        r = 1; g = 0; b = x;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function getHSLColorRGBA(
    iterations: number,
    maxIterations: number,
    colorIntensity: number
): RGBA {
    if (iterations === maxIterations) return [0, 0, 0, 255];
    const hue = colorIntensity * 360 * (iterations / maxIterations);
    const [r, g, b] = hslToRgb(hue);
    return [r, g, b, 255];
}

export function getRGBColorRGBA(
    iterations: number,
    maxIterations: number,
    redWeight: number,
    greenWeight: number,
    blueWeight: number
): RGBA {
    const colorValue = 255 * (iterations / maxIterations);
    return [
        Math.floor(colorValue * redWeight),
        Math.floor(colorValue * greenWeight),
        Math.floor(colorValue * blueWeight),
        255,
    ];
}

export function getRandomHSLColorRGBA(
    iterations: number,
    maxIterations: number,
    colors: number[]
): RGBA {
    if (iterations === maxIterations) return [0, 0, 0, 255];
    const hue = colors[iterations % colors.length];
    const [r, g, b] = hslToRgb(hue);
    return [r, g, b, 255];
}

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
