export type RGBA = [number, number, number, number];
export type ColorPalette = [number, number, number][];

// Page background color — used for "in-set" pixels so fractals blend with the page
const BG: RGBA = [0, 0, 0, 255];

/**
 * Logarithmic color mapping — spreads detail at low iteration counts
 * instead of wasting the gradient on high counts nobody sees.
 */
function logMap(iterations: number, maxIterations: number): number {
    return Math.log(1 + iterations) / Math.log(1 + maxIterations);
}

export const PALETTES: Record<string, ColorPalette> = {
    fire: [[0, 0, 0], [128, 0, 0], [255, 0, 0], [255, 128, 0], [255, 255, 0], [255, 255, 255]],
    ocean: [[0, 0, 32], [0, 0, 128], [0, 64, 255], [0, 200, 255], [200, 255, 255]],
    sunset: [[32, 0, 64], [128, 0, 128], [255, 0, 64], [255, 128, 0], [255, 255, 0]],
    neon: [[255, 0, 128], [0, 255, 128], [128, 0, 255], [255, 255, 0], [0, 255, 255]],
    electric: [[0, 0, 0], [0, 0, 255], [128, 0, 255], [255, 255, 255]],
    grayscale: [[0, 0, 0], [255, 255, 255]],
    forest: [[32, 16, 0], [0, 100, 0], [50, 205, 50], [218, 165, 32]],
    aurora: [[0, 64, 64], [0, 180, 100], [0, 255, 255], [128, 0, 255], [255, 100, 180]],
    plasma: [[128, 0, 255], [0, 0, 255], [0, 255, 255], [0, 255, 0], [255, 255, 0], [255, 0, 0]],
    candy: [[255, 0, 128], [200, 160, 255], [152, 255, 200], [255, 200, 160]],
    inferno: [[0, 0, 0], [40, 0, 80], [200, 0, 40], [255, 128, 0], [255, 255, 180]],
    toxic: [[0, 0, 0], [0, 80, 0], [0, 255, 0], [180, 255, 0]],
    frost: [[255, 255, 255], [160, 210, 255], [0, 80, 255], [0, 0, 128]],
    vintage: [[40, 20, 10], [160, 60, 20], [200, 160, 100], [255, 235, 205]],
    cosmic: [[13, 8, 35], [75, 20, 105], [180, 40, 120], [255, 120, 100], [255, 220, 150], [255, 255, 255]],
};

export function getNewtonColorRGBA(
    iterations: number,
    maxIterations: number,
    rootIndex: number,
    degree: number
): RGBA {
    const hue = (rootIndex * 360) / degree;
    const brightness = 1 - 0.6 * (iterations / maxIterations);
    const [r, g, b] = hslToRgb(hue);
    return [
        Math.round(r * brightness),
        Math.round(g * brightness),
        Math.round(b * brightness),
        255,
    ];
}

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
    colorIntensity: number,
    cyclic: boolean = false,
    logarithmic: boolean = false
): RGBA {
    if (iterations >= maxIterations) return BG;
    const t = logarithmic ? logMap(iterations, maxIterations) : iterations / maxIterations;
    const hue = cyclic
        ? (iterations * colorIntensity * 10) % 360
        : colorIntensity * 360 * t;
    const [r, g, b] = hslToRgb(hue);
    return [r, g, b, 255];
}

export function getRGBColorRGBA(
    iterations: number,
    maxIterations: number,
    redWeight: number,
    greenWeight: number,
    blueWeight: number,
    logarithmic: boolean = false
): RGBA {
    if (iterations >= maxIterations) return BG;
    const t = logarithmic ? logMap(iterations, maxIterations) : iterations / maxIterations;
    const colorValue = 255 * t;
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
    if (iterations >= maxIterations) return BG;
    const hue = colors[Math.floor(iterations) % colors.length];
    const [r, g, b] = hslToRgb(hue);
    return [r, g, b, 255];
}

export function getPaletteColorRGBA(
    iterations: number,
    maxIterations: number,
    palette: ColorPalette,
    logarithmic: boolean = false,
    colorIntensity: number = 1
): RGBA {
    if (iterations >= maxIterations) return BG;
    const raw = logarithmic ? logMap(iterations, maxIterations) : iterations / maxIterations;
    const t = colorIntensity === 1 ? raw : (((raw * colorIntensity) % 1) + 1) % 1;
    const pos = t * (palette.length - 1);
    const index = Math.min(Math.floor(pos), palette.length - 2);
    const frac = pos - index;
    const c1 = palette[index];
    const c2 = palette[index + 1];
    return [
        Math.round(c1[0] + (c2[0] - c1[0]) * frac),
        Math.round(c1[1] + (c2[1] - c1[1]) * frac),
        Math.round(c1[2] + (c2[2] - c1[2]) * frac),
        255,
    ];
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
