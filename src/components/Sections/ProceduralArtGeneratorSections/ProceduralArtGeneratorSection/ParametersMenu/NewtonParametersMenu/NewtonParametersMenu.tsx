import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./NewtonParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";
import LabelledSelect from "@/components/LabelledSelect/LabelledSelect";

export default function NewtonParametersMenu() {
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
            <LabelledSelect
                id="newtonDegree"
                label="Polynomial Degree (z^n - 1):"
                value={parameters.newtonDegree}
                tooltip="Higher degrees create more roots and symmetry in the fractal"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        newtonDegree: e.target.value,
                    })
                }
            >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </LabelledSelect>
        </Styled.Container>
    );
}
