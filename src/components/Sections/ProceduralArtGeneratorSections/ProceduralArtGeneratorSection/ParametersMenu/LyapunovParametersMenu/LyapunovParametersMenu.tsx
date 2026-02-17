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
