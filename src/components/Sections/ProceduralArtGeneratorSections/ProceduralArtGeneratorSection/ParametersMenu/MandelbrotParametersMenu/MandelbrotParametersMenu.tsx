import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import React from "react";
import * as Styled from "./MandelbrotParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";
export default function MandelbrotParametersMenu() {
    const { parameters, setParameters } = useParameters();

    return (
        <Styled.Container>
            <LabelledInput
                id="maxIterations"
                label="Max Iterations:"
                type="number"
                value={parameters.maxIterations}
                tooltip="Higher values reveal more detail but take longer to render"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        maxIterations: e.target.value,
                    })
                }
            />
        </Styled.Container>
    );
}
