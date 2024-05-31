import * as noise from "@/utils/algorithms/perlinNoise";

self.onmessage = (event) => {
    const { isInitialising } = event.data;
    if (isInitialising) {
        const { seed } = event.data;
        noise.seed(seed);
    }
    const { columnIndex, numberOfRows, scale, zoomOutFactor } = event.data;

    const columnValues: number[][] = [];
    let xChange = 0;
    let yChange = columnIndex * zoomOutFactor;

    for (let row = 0; row < numberOfRows; row++) {
        const endPointsResult = noise.computeEndPoints(columnIndex, row, scale, xChange, yChange);

        columnValues.push(endPointsResult);

        xChange += zoomOutFactor;
    }

    postMessage({ columnIndex, columnValues });
};
