/**
 * Computes the Lyapunov exponent for the logistic map x_{n+1} = r * x * (1 - x)
 * with parameter r alternating between a and b based on the sequence string.
 *
 * λ = (1/N) * Σ ln|r_n * (1 - 2*x_n)|
 *
 * Negative λ = stable (colored), positive λ = chaotic (black).
 */
export default function lyapunovExponentCalculator(
    a: number,
    b: number,
    sequence: string,
    maxIterations: number
): number {
    const seqLen = sequence.length;
    let x = 0.5;
    let sum = 0;

    // Warm up: run 100 iterations to settle into the attractor
    for (let i = 0; i < 100; i++) {
        const r = sequence[i % seqLen] === "A" ? a : b;
        x = r * x * (1 - x);
        if (x <= 0 || x >= 1 || !isFinite(x)) {
            x = 0.5;
        }
    }

    // Compute Lyapunov exponent
    for (let i = 0; i < maxIterations; i++) {
        const r = sequence[i % seqLen] === "A" ? a : b;
        const derivative = Math.abs(r * (1 - 2 * x));
        if (derivative > 0) {
            sum += Math.log(derivative);
        }
        x = r * x * (1 - x);
        if (x <= 0 || x >= 1 || !isFinite(x)) {
            x = 0.5;
        }
    }

    return sum / maxIterations;
}
