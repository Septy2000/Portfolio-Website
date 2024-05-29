import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import React, { useEffect } from "react";
import * as Styled from "./ColorModeMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";
import HorizontalLabelledInput from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput";
import LabelledSelect from "@/components/LabelledSelect/LabelledSelect";
import { HorizontalLabelledInputsContainer } from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput.styled";
export default function ColorModeMenu() {
    const { colorModeParameters, setColorModeParameters, parameters } =
        useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColorModeParameters({
            ...colorModeParameters,
            colorMode: e.target.value as "smooth" | "rgb" | "random",
        });
    };

    const handleRGBChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        color: "r" | "g" | "b"
    ) => {
        setColorModeParameters({
            ...colorModeParameters,
            rgbWeights: {
                ...colorModeParameters.rgbWeights,
                [color]: e.target.value,
            },
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
        <Styled.Container>
            <LabelledSelect
                id="colorMode"
                label="Color Mode:"
                value={colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                <option value="random">Random</option>
            </LabelledSelect>
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
        </Styled.Container>
    );
}
