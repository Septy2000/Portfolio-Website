import { ComplexNumber } from "@/_types/math";

export interface NewtonResult {
    iterations: number;
    rootIndex: number;
    zMagnitudeSq: number;
}

/**
 * Newton's method iteration for z^n - 1 = 0.
 * z_{n+1} = z - (z^n - 1) / (n * z^(n-1))
 *         = z * (1 - 1/n) + 1 / (n * z^(n-1))
 *
 * Converges to one of the n-th roots of unity.
 * Root detection uses the angle of the final z value.
 */
export default function newtonIterationCalculator(
    z: ComplexNumber,
    degree: number,
    maxIterations: number
): NewtonResult {
    let zx = z.x;
    let zy = z.y;
    let iteration = 0;

    for (; iteration < maxIterations; iteration++) {
        // Compute z^(n-1) using repeated squaring-style approach
        // For small degrees, direct computation is fine
        let powX = 1;
        let powY = 0;
        for (let i = 0; i < degree - 1; i++) {
            const tx = powX * zx - powY * zy;
            const ty = powX * zy + powY * zx;
            powX = tx;
            powY = ty;
        }
        // powX + i*powY = z^(n-1)

        // z^n = z^(n-1) * z
        const znX = powX * zx - powY * zy;
        const znY = powX * zy + powY * zx;

        // f(z) = z^n - 1
        const fX = znX - 1;
        const fY = znY;

        // f'(z) = n * z^(n-1)
        const fpX = degree * powX;
        const fpY = degree * powY;

        // f(z) / f'(z)
        const denom = fpX * fpX + fpY * fpY;
        if (denom === 0) break;

        const divX = (fX * fpX + fY * fpY) / denom;
        const divY = (fY * fpX - fX * fpY) / denom;

        // z_{n+1} = z - f(z)/f'(z)
        const newZx = zx - divX;
        const newZy = zy - divY;

        // Convergence check
        const dx = newZx - zx;
        const dy = newZy - zy;
        if (dx * dx + dy * dy < 1e-10) {
            zx = newZx;
            zy = newZy;
            iteration++;
            break;
        }

        zx = newZx;
        zy = newZy;
    }

    // Determine which root z converged to using the angle
    const angle = Math.atan2(zy, zx);
    const normalizedAngle = ((angle / (2 * Math.PI)) * degree + degree) % degree;
    const rootIndex = Math.round(normalizedAngle) % degree;

    return {
        iterations: iteration,
        rootIndex,
        zMagnitudeSq: zx * zx + zy * zy,
    };
}
