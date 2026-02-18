import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import React from "react";
import * as Styled from "./PerlinNoiseParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";
export default function PerlinNoiseParametersMenu() {
    const { parameters, setParameters } = useParameters();

    return (
        <Styled.Container>
            <LabelledInput
                id="scale"
                label="Scale:"
                type="number"
                value={parameters.scale}
                tooltip="Size of each noise cell in pixels"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        scale: e.target.value,
                    })
                }
            />
            <LabelledInput
                id="zoomOut"
                label="Zoom:"
                type="number"
                value={parameters.zoomOut}
                tooltip="How far out to view the noise field"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        zoomOut: e.target.value,
                    })
                }
            />

            <LabelledInput
                id="customSeed"
                label="Custom seed:"
                type="number"
                value={parameters.customSeed}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        customSeed: e.target.value,
                        seed: e.target.value,
                    })
                }
            />
            <p>Current Seed: {parameters.seed}</p>
        </Styled.Container>
    );
}
