import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import * as Styled from "./PhoenixParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";

export default function PhoenixParametersMenu() {
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
                id="phoenixP"
                label="P (real):"
                type="number"
                value={parameters.phoenixP}
                tooltip="Real perturbation parameter for the Phoenix formula"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        phoenixP: e.target.value,
                    })
                }
            />
            <LabelledInput
                id="phoenixQ"
                label="Q (imaginary):"
                type="number"
                value={parameters.phoenixQ}
                tooltip="Imaginary perturbation parameter for the Phoenix formula"
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        phoenixQ: e.target.value,
                    })
                }
            />
        </Styled.Container>
    );
}
