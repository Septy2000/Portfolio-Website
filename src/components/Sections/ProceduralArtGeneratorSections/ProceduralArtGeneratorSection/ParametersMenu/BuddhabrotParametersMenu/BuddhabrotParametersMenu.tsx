import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./BuddhabrotParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";

export default function BuddhabrotParametersMenu() {
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
                id="buddhabrotSamples"
                label="Samples:"
                type="number"
                value={parameters.buddhabrotSamples}
                tooltip="Number of random sample points to test for escaping orbits"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        buddhabrotSamples: e.target.value,
                    })
                }
            />
        </Styled.Container>
    );
}
