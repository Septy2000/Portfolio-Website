export const createMandelbrotWorker = () => {
    return new Worker(
        new URL("@/utils/workers/mandelbrotWorker.ts", import.meta.url)
    );
};

export const createJuliaWorker = () => {
    return new Worker(
        new URL("@/utils/workers/juliaWorker.ts", import.meta.url)
    );
};

export const createPerlinWorker = () => {
    return new Worker(
        new URL("@/utils/workers/perlinWorker.ts", import.meta.url)
    );
};
