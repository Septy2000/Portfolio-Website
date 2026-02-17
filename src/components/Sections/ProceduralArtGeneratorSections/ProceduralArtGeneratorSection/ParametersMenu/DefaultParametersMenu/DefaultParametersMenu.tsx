import { useState } from "react";
import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./DefaultParametersMenu.styled";
import { HorizontalLabelledInputsContainer } from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput.styled";
import HorizontalLabelledInput from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput";
import LabelledSelect from "@/components/LabelledSelect/LabelledSelect";

const RESOLUTION_PRESETS: Record<string, { width: string; height: string }> = {
    "800x600": { width: "800", height: "600" },
    "1280x960": { width: "1280", height: "960" },
    "1920x1440": { width: "1920", height: "1440" },
    "2560x1920": { width: "2560", height: "1920" },
    "3840x2880": { width: "3840", height: "2880" },
};

export default function DefaultParametersMenu() {
    const { parameters, setParameters, setColorModeParameters } = useParameters();
    const [selectedPreset, setSelectedPreset] = useState("800x600");

    const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const algorithm = e.target.value as "mandelbrot" | "julia" | "perlin";
        setParameters({ ...parameters, algorithm });
        if (algorithm === "perlin") {
            setColorModeParameters({
                colorMode: "smooth",
                smoothColoring: false,
                colorIntensity: "3",
                rgbWeights: { r: "1", g: "1", b: "1" },
                numberOfRandomColors: "10",
                palette: "fire",
            });
        } else {
            setColorModeParameters({
                colorMode: "smooth",
                smoothColoring: true,
                colorIntensity: "1",
                rgbWeights: { r: "1", g: "1", b: "1" },
                numberOfRandomColors: "10",
                palette: "fire",
            });
        }
    };

    const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const preset = e.target.value;
        setSelectedPreset(preset);
        if (preset !== "custom") {
            const { width, height } = RESOLUTION_PRESETS[preset];
            setParameters({ ...parameters, width, height });
        }
    };

    return (
        <Styled.Container>
            <LabelledSelect
                id="algorithm"
                label="Algorithm:"
                value={parameters.algorithm}
                onChange={handleAlgorithmChange}
            >
                <option value="mandelbrot">Mandelbrot Set</option>
                <option value="julia">Julia Set</option>
                <option value="perlin">Perlin Noise</option>
            </LabelledSelect>
            <Styled.PseudoLabel>Resolution:</Styled.PseudoLabel>
            <LabelledSelect
                id="resolution-preset"
                label="Preset:"
                value={selectedPreset}
                onChange={handlePresetChange}
            >
                <option value="custom">Custom</option>
                <option value="800x600">800 x 600</option>
                <option value="1280x960">1280 x 960</option>
                <option value="1920x1440">1920 x 1440</option>
                <option value="2560x1920">2560 x 1920</option>
                <option value="3840x2880">3840 x 2880</option>
            </LabelledSelect>
            <HorizontalLabelledInputsContainer>
                <HorizontalLabelledInput
                    id="width"
                    label="W:"
                    type="number"
                    value={parameters.width}
                    onChange={(e) => {
                        setSelectedPreset("custom");
                        setParameters({
                            ...parameters,
                            width: e.target.value,
                            height: String(Math.round((parseInt(e.target.value) * 3) / 4)),
                        });
                    }}
                />
                x
                <HorizontalLabelledInput
                    id="height"
                    label="H:"
                    type="number"
                    value={parameters.height}
                    onChange={(e) => {
                        setSelectedPreset("custom");
                        setParameters({
                            ...parameters,
                            width: String(Math.round((parseInt(e.target.value) * 4) / 3)),
                            height: e.target.value,
                        });
                    }}
                />
            </HorizontalLabelledInputsContainer>
        </Styled.Container>
    );
}
