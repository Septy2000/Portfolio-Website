import { ComplexPlaneBoundary } from "@/_types/math";

self.onmessage = (event) => {
    const {
        batchSize,
        boundaries,
        width,
        height,
        maxIterations,
    } = event.data as {
        batchSize: number;
        boundaries: ComplexPlaneBoundary;
        width: number;
        height: number;
        maxIterations: number;
    };

    const { RE_MIN, RE_MAX, IM_MIN, IM_MAX } = boundaries;
    const reRange = RE_MAX - RE_MIN;
    const imRange = IM_MAX - IM_MIN;

    const densityBuffer = new Float64Array(width * height);

    for (let s = 0; s < batchSize; s++) {
        const cx = RE_MIN + Math.random() * reRange;
        const cy = IM_MIN + Math.random() * imRange;

        // First pass: check if the point escapes
        let zx = 0;
        let zy = 0;
        let escapes = false;
        let escapeIter = 0;

        for (let i = 0; i < maxIterations; i++) {
            const zx2 = zx * zx;
            const zy2 = zy * zy;
            if (zx2 + zy2 > 4) {
                escapes = true;
                escapeIter = i;
                break;
            }
            zy = 2 * zx * zy + cy;
            zx = zx2 - zy2 + cx;
        }

        if (!escapes) continue;

        // Second pass: trace orbit and accumulate density
        zx = 0;
        zy = 0;
        for (let i = 0; i < escapeIter; i++) {
            const zx2 = zx * zx;
            const zy2 = zy * zy;
            zy = 2 * zx * zy + cy;
            zx = zx2 - zy2 + cx;

            // Map z to pixel coordinates
            const px = Math.floor(((zx - RE_MIN) / reRange) * width);
            const py = Math.floor(((zy - IM_MIN) / imRange) * height);

            if (px >= 0 && px < width && py >= 0 && py < height) {
                densityBuffer[py * width + px]++;
            }
        }
    }

    self.postMessage({ densityBuffer: Array.from(densityBuffer) });
};
