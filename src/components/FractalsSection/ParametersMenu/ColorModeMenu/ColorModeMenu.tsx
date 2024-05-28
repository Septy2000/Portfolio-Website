import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React, { useEffect } from "react";
import ErrorText from "@/components/ErrorText/ErrorText";
export default function ColorModeMenu() {
    const { colorModeParameters, setColorModeParameters, parameters } =
        useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColorModeParameters({
            ...colorModeParameters,
            colorMode: e.target.value as "smooth" | "rgb" | "random",
        });
    };

    // Set color mode params to default when algorithm changes
    useEffect(() => {
        if (parameters.algorithm === "perlin") {
            setColorModeParameters({
                colorMode: "smooth",
                colorIntensity: "3",
                rgbWeights: { r: "1", g: "1", b: "1" },
                numberOfRandomColors: "10",
            });
        } else {
            setColorModeParameters({
                colorMode: "smooth",
                colorIntensity: "1",
                rgbWeights: { r: "1", g: "1", b: "1" },
                numberOfRandomColors: "10",
            });
        }
    }, [parameters.algorithm, setColorModeParameters]);

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
                                colorIntensity: e.target.value,
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
                                    r: e.target.value,
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
                                    g: e.target.value,
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
                                    b: e.target.value,
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
                                numberOfRandomColors: e.target.value,
                            })
                        }
                    />
                </React.Fragment>
            )}
        </div>
    );
}
