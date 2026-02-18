import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./LyapunovParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";

export default function LyapunovParametersMenu() {
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
            <LabelledInput
                id="lyapunovSequence"
                label="Sequence (A/B):"
                type="text"
                value={parameters.lyapunovSequence}
                tooltip="A/B pattern controlling parameter switching (e.g. AABB)"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        lyapunovSequence: e.target.value.toUpperCase().replace(/[^AB]/g, ""),
                    })
                }
            />
        </Styled.Container>
    );
}
