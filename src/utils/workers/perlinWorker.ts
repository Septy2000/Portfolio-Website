import * as noise from "@/utils/algorithms/perlinNoise";

self.onmessage = (event) => {
    const { columns, rows, scale, zoomOutFactor, customSeed } = event.data;

    noise.seed(customSeed);

    let xChange;
    let yChange;

    for (let col = 0; col < columns; col++) {
        xChange = 0;
        yChange = col * zoomOutFactor;
        for (let row = 0; row < rows; row++) {
            const pointValues = noise.computeEndPoints(
                col,
                row,
                scale,
                xChange,
                yChange
            );
            self.postMessage({ row, col, pointValues });
            xChange += zoomOutFactor;
        }
    }
};
