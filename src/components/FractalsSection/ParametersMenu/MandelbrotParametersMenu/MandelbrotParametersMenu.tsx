import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function MandelbrotParametersMenu() {
    const { mandelbrotParameters, setMandelbrotParameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMandelbrotParameters({
            ...mandelbrotParameters,
            colorModeParameters: {
                ...mandelbrotParameters.colorModeParameters,
                colorMode: e.target.value as "smooth" | "rgb" | "random",
            },
        });
    };

    return (
        <div>
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={mandelbrotParameters.colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                <option value="random">Random</option>
            </select>
            {mandelbrotParameters.colorModeParameters.colorMode ===
                "smooth" && (
                <React.Fragment>
                    <label htmlFor="intensity">Intensity:</label>
                    <input
                        id="intensity"
                        type="number"
                        value={
                            mandelbrotParameters.colorModeParameters
                                .colorIntensity
                        }
                        onChange={(e) =>
                            setMandelbrotParameters({
                                ...mandelbrotParameters,
                                colorModeParameters: {
                                    ...mandelbrotParameters.colorModeParameters,
                                    colorIntensity: parseFloat(e.target.value),
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            {mandelbrotParameters.colorModeParameters.colorMode === "rgb" && (
                <React.Fragment>
                    <label htmlFor="r">R:</label>
                    <input
                        id="r"
                        type="number"
                        value={
                            mandelbrotParameters.colorModeParameters.rgbWeights
                                .r
                        }
                        onChange={(e) =>
                            setMandelbrotParameters({
                                ...mandelbrotParameters,
                                colorModeParameters: {
                                    ...mandelbrotParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...mandelbrotParameters
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
                            mandelbrotParameters.colorModeParameters.rgbWeights
                                .g
                        }
                        onChange={(e) =>
                            setMandelbrotParameters({
                                ...mandelbrotParameters,
                                colorModeParameters: {
                                    ...mandelbrotParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...mandelbrotParameters
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
                            mandelbrotParameters.colorModeParameters.rgbWeights
                                .b
                        }
                        onChange={(e) =>
                            setMandelbrotParameters({
                                ...mandelbrotParameters,
                                colorModeParameters: {
                                    ...mandelbrotParameters.colorModeParameters,
                                    rgbWeights: {
                                        ...mandelbrotParameters
                                            .colorModeParameters.rgbWeights,
                                        b: parseFloat(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
            {mandelbrotParameters.colorModeParameters.colorMode ===
                "random" && (
                <React.Fragment>
                    <label htmlFor="numberOfRandomColors">
                        Number of Random Colors:
                    </label>
                    <input
                        id="numberOfRandomColors"
                        type="number"
                        value={
                            mandelbrotParameters.colorModeParameters
                                .numberOfRandomColors
                        }
                        onChange={(e) =>
                            setMandelbrotParameters({
                                ...mandelbrotParameters,
                                colorModeParameters: {
                                    ...mandelbrotParameters.colorModeParameters,
                                    numberOfRandomColors: parseInt(
                                        e.target.value
                                    ),
                                },
                            })
                        }
                    />
                </React.Fragment>
            )}
        </div>
    );
}
