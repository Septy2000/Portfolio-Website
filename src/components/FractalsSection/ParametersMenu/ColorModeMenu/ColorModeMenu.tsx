import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React, { useEffect } from "react";
export default function ColorModeMenu() {
    const { colorModeParameters, setColorModeParameters, defaultParameters } =
        useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColorModeParameters({
            ...colorModeParameters,
            colorMode: e.target.value as "smooth" | "rgb" | "random",
        });
    };

    // Set default color mode parameters based on the default algorithm
    useEffect(() => {
        setColorModeParameters({
            colorMode: "smooth",
            colorIntensity: 1,
            rgbWeights: { r: 1, g: 1, b: 1 },
            numberOfRandomColors: 10,
        });
    }, [defaultParameters.algorithm, setColorModeParameters]);

    return (
        <div>
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                {}
                <option value="random">Random</option>
            </select>
            {colorModeParameters.colorMode === "smooth" && (
                <React.Fragment>
                    <label htmlFor="intensity">Intensity:</label>
                    <input
                        id="intensity"
                        type="number"
                        value={colorModeParameters.colorIntensity}
                        onChange={(e) =>
                            setColorModeParameters({
                                ...colorModeParameters,
                                colorIntensity: parseFloat(e.target.value),
                            })
                        }
                    />
                </React.Fragment>
            )}
            {colorModeParameters.colorMode === "rgb" && (
                <React.Fragment>
                    <label htmlFor="r">R:</label>
                    <input
                        id="r"
                        type="number"
                        value={colorModeParameters.rgbWeights.r}
                        onChange={(e) =>
                            setColorModeParameters({
                                ...colorModeParameters,
                                rgbWeights: {
                                    ...colorModeParameters.rgbWeights,
                                    r: parseFloat(e.target.value),
                                },
                            })
                        }
                    />
                    <label htmlFor="g">G:</label>
                    <input
                        id="g"
                        type="number"
                        value={colorModeParameters.rgbWeights.g}
                        onChange={(e) =>
                            setColorModeParameters({
                                ...colorModeParameters,
                                rgbWeights: {
                                    ...colorModeParameters.rgbWeights,
                                    g: parseFloat(e.target.value),
                                },
                            })
                        }
                    />
                    <label htmlFor="b">B:</label>
                    <input
                        id="b"
                        type="number"
                        value={colorModeParameters.rgbWeights.b}
                        onChange={(e) =>
                            setColorModeParameters({
                                ...colorModeParameters,
                                rgbWeights: {
                                    ...colorModeParameters.rgbWeights,
                                    b: parseFloat(e.target.value),
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            {colorModeParameters.colorMode === "random" && (
                <React.Fragment>
                    <label htmlFor="numberOfRandomColors">
                        Number of Random Colors:
                    </label>
                    <input
                        id="numberOfRandomColors"
                        type="number"
                        value={colorModeParameters.numberOfRandomColors}
                        onChange={(e) =>
                            setColorModeParameters({
                                ...colorModeParameters,
                                numberOfRandomColors: parseInt(e.target.value),
                            })
                        }
                    />
                </React.Fragment>
            )}
        </div>
    );
}
