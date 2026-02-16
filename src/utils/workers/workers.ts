export const createFractalWorker = () => {
    return new Worker(
        new URL("@/utils/workers/fractalWorker.ts", import.meta.url)
    );
};

export const createPerlinWorker = () => {
    return new Worker(
        new URL("@/utils/workers/perlinWorker.ts", import.meta.url)
    );
};
