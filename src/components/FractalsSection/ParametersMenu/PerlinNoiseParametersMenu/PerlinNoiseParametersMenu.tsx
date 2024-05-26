import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function PerlinNoiseParametersMenu() {
    const { perlinNoiseParameters, setPerlinNoiseParameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerlinNoiseParameters({
            ...perlinNoiseParameters,
            colorModeParameters: {
                ...perlinNoiseParameters.colorModeParameters,
                colorMode: e.target.value as "smooth" | "rgb" | "random",
            },
        });
    };

    return (
        <div>
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={perlinNoiseParameters.colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
            </select>
            {perlinNoiseParameters.colorModeParameters.colorMode ===
                "smooth" && (
                <React.Fragment>
                    <label htmlFor="intensity">Intensity:</label>
                    <input
                        id="intensity"
                        type="number"
                        value={
                            perlinNoiseParameters.colorModeParameters
                                .colorIntensity
                        }
                        onChange={(e) =>
                            setPerlinNoiseParameters({
                                ...perlinNoiseParameters,
                                colorModeParameters: {
                                    ...perlinNoiseParameters.colorModeParameters,
                                    colorIntensity: parseFloat(e.target.value),
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            {perlinNoiseParameters.colorModeParameters.colorMode === "rgb" && (
                <React.Fragment>
                    <label htmlFor="r">R:</label>
                    <input
                        id="r"
                        type="number"
                        value={
                            perlinNoiseParameters.colorModeParameters.rgbWeights
                                .r
                        }
                        onChange={(e) =>
                            setPerlinNoiseParameters({
                                ...perlinNoiseParameters,
                                colorModeParameters: {
                                    ...perlinNoiseParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...perlinNoiseParameters
                                            .colorModeParameters.rgbWeights,
                                        r: parseFloat(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                    <label htmlFor="g">G:</label>
                    <input
                        id="g"
                        type="number"
                        value={
                            perlinNoiseParameters.colorModeParameters.rgbWeights
                                .g
                        }
                        onChange={(e) =>
                            setPerlinNoiseParameters({
                                ...perlinNoiseParameters,
                                colorModeParameters: {
                                    ...perlinNoiseParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...perlinNoiseParameters
                                            .colorModeParameters.rgbWeights,
                                        g: parseFloat(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                    <label htmlFor="b">B:</label>
                    <input
                        id="b"
                        type="number"
                        value={
                            perlinNoiseParameters.colorModeParameters.rgbWeights
                                .b
                        }
                        onChange={(e) =>
                            setPerlinNoiseParameters({
                                ...perlinNoiseParameters,
                                colorModeParameters: {
                                    ...perlinNoiseParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...perlinNoiseParameters
                                            .colorModeParameters.rgbWeights,
                                        b: parseFloat(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            <label htmlFor="scale">Scale:</label>
            <input
                id="scale"
                type="number"
                value={perlinNoiseParameters.scale}
                onChange={(e) =>
                    setPerlinNoiseParameters({
                        ...perlinNoiseParameters,
                        scale: parseFloat(e.target.value),
                    })
                }
            />
            <label htmlFor="zoomOut">Zoom Out:</label>
            <input
                id="zoomOut"
                type="number"
                value={perlinNoiseParameters.zoomOut}
                onChange={(e) =>
                    setPerlinNoiseParameters({
                        ...perlinNoiseParameters,
                        zoomOut: parseFloat(e.target.value),
                    })
                }
            />
            <label htmlFor="seed">Seed:</label>
            <input
                id="seed"
                type="text"
                value={perlinNoiseParameters.seed}
                onChange={(e) =>
                    setPerlinNoiseParameters({
                        ...perlinNoiseParameters,
                        seed: e.target.value,
                    })
                }
            />
            <p>Current Seed: {perlinNoiseParameters.currentSeed}</p>
        </div>
    );
}
