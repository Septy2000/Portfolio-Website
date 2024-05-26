import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function JuliaParametersMenu() {
    const { juliaParameters, setJuliaParameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setJuliaParameters({
            ...juliaParameters,
            colorModeParameters: {
                ...juliaParameters.colorModeParameters,
                colorMode: e.target.value as "smooth" | "rgb" | "random",
            },
        });
    };

    return (
        <div>
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={juliaParameters.colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                <option value="random">Random</option>
            </select>
            {juliaParameters.colorModeParameters.colorMode === "smooth" && (
                <React.Fragment>
                    <label htmlFor="intensity">Intensity:</label>
                    <input
                        id="intensity"
                        type="number"
                        value={
                            juliaParameters.colorModeParameters.colorIntensity
                        }
                        onChange={(e) =>
                            setJuliaParameters({
                                ...juliaParameters,
                                colorModeParameters: {
                                    ...juliaParameters.colorModeParameters,
                                    colorIntensity: parseFloat(e.target.value),
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            {juliaParameters.colorModeParameters.colorMode === "rgb" && (
                <React.Fragment>
                    <label htmlFor="r">R:</label>
                    <input
                        id="r"
                        type="number"
                        value={juliaParameters.colorModeParameters.rgbWeights.r}
                        onChange={(e) =>
                            setJuliaParameters({
                                ...juliaParameters,
                                colorModeParameters: {
                                    ...juliaParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...juliaParameters.colorModeParameters
                                            .rgbWeights,
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
                        value={juliaParameters.colorModeParameters.rgbWeights.g}
                        onChange={(e) =>
                            setJuliaParameters({
                                ...juliaParameters,
                                colorModeParameters: {
                                    ...juliaParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...juliaParameters.colorModeParameters
                                            .rgbWeights,
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
                        value={juliaParameters.colorModeParameters.rgbWeights.b}
                        onChange={(e) =>
                            setJuliaParameters({
                                ...juliaParameters,
                                colorModeParameters: {
                                    ...juliaParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...juliaParameters.colorModeParameters
                                            .rgbWeights,
                                        b: parseFloat(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            {juliaParameters.colorModeParameters.colorMode === "random" && (
                <React.Fragment>
                    <label htmlFor="numberOfRandomColors">
                        Number of Random Colors:
                    </label>
                    <input
                        id="numberOfRandomColors"
                        type="number"
                        value={
                            juliaParameters.colorModeParameters
                                .numberOfRandomColors
                        }
                        onChange={(e) =>
                            setJuliaParameters({
                                ...juliaParameters,
                                colorModeParameters: {
                                    ...juliaParameters.colorModeParameters,
                                    numberOfRandomColors: parseInt(
                                        e.target.value
                                    ),
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}

            <label htmlFor="valueOfC">Value of C:</label>
            <input
                id="valueOfC"
                type="text"
                value={juliaParameters.valueOfC}
                onChange={(e) =>
                    setJuliaParameters({
                        ...juliaParameters,
                        valueOfC: e.target.value,
                    })
                }
            />
        </div>
    );
}
