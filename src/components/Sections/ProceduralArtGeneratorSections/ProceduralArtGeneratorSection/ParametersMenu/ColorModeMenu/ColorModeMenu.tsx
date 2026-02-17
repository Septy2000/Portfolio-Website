"use client";
import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import React from "react";
import * as Styled from "./ColorModeMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";
import HorizontalLabelledInput from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput";
import LabelledSelect from "@/components/LabelledSelect/LabelledSelect";
import { HorizontalLabelledInputsContainer } from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput.styled";
export default function ColorModeMenu() {
    const { colorModeParameters, setColorModeParameters, parameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColorModeParameters({
            ...colorModeParameters,
            colorMode: e.target.value as "smooth" | "rgb" | "random" | "palette",
        });
    };

    const handleRGBChange = (e: React.ChangeEvent<HTMLInputElement>, color: "r" | "g" | "b") => {
        setColorModeParameters({
            ...colorModeParameters,
            rgbWeights: {
                ...colorModeParameters.rgbWeights,
                [color]: e.target.value,
            },
        });
    };

    return (
        <Styled.Container>
            <LabelledSelect
                id="colorMode"
                label="Color Mode:"
                value={colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                {parameters.algorithm !== "perlin" && <option value="random">Random</option>}
                {parameters.algorithm !== "perlin" && <option value="palette">Palette</option>}
            </LabelledSelect>
            {parameters.algorithm !== "perlin" && (
                <Styled.CheckboxRow>
                    <Styled.Checkbox
                        type="checkbox"
                        checked={colorModeParameters.smoothColoring}
                        onChange={(e) =>
                            setColorModeParameters({
                                ...colorModeParameters,
                                smoothColoring: e.target.checked,
                            })
                        }
                    />
                    Smooth Coloring
                </Styled.CheckboxRow>
            )}
            {colorModeParameters.colorMode === "smooth" && (
                <LabelledInput
                    id="intensity"
                    label="Intensity:"
                    type="number"
                    value={colorModeParameters.colorIntensity}
                    onChange={(e) =>
                        setColorModeParameters({
                            ...colorModeParameters,
                            colorIntensity: e.target.value,
                        })
                    }
                />
            )}

            {colorModeParameters.colorMode === "rgb" && (
                <HorizontalLabelledInputsContainer>
                    <HorizontalLabelledInput
                        id="r"
                        label="R:"
                        type="number"
                        value={colorModeParameters.rgbWeights.r}
                        onChange={(e) => handleRGBChange(e, "r")}
                    />
                    <HorizontalLabelledInput
                        id="g"
                        label="G:"
                        type="number"
                        value={colorModeParameters.rgbWeights.g}
                        onChange={(e) => handleRGBChange(e, "g")}
                    />
                    <HorizontalLabelledInput
                        id="b"
                        label="B:"
                        type="number"
                        value={colorModeParameters.rgbWeights.b}
                        onChange={(e) => handleRGBChange(e, "b")}
                    />
                </HorizontalLabelledInputsContainer>
            )}

            {colorModeParameters.colorMode === "random" && (
                <LabelledInput
                    id="numberOfRandomColors"
                    label="Number of Random Colors:"
                    type="number"
                    value={colorModeParameters.numberOfRandomColors}
                    onChange={(e) =>
                        setColorModeParameters({
                            ...colorModeParameters,
                            numberOfRandomColors: e.target.value,
                        })
                    }
                />
            )}

            {colorModeParameters.colorMode === "palette" && (
                <LabelledSelect
                    id="palette"
                    label="Palette:"
                    value={colorModeParameters.palette}
                    onChange={(e) =>
                        setColorModeParameters({
                            ...colorModeParameters,
                            palette: e.target.value,
                        })
                    }
                >
                    <option value="fire">Fire</option>
                    <option value="ocean">Ocean</option>
                    <option value="sunset">Sunset</option>
                    <option value="neon">Neon</option>
                    <option value="electric">Electric</option>
                    <option value="grayscale">Grayscale</option>
                </LabelledSelect>
            )}
        </Styled.Container>
    );
}
