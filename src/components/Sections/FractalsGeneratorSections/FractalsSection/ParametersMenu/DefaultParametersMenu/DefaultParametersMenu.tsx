import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import * as Styled from "./DefaultParametersMenu.styled";
import { HorizontalLabelledInputsContainer } from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput.styled";
import HorizontalLabelledInput from "@/components/LabelledInput/HorizontalLabelledInput/HorizontalLabelledInput";
import LabelledSelect from "@/components/LabelledSelect/LabelledSelect";
import { Label } from "@/components/LabelledInput/LabelledInput.styled";
export default function DefaultParametersMenu() {
    const { parameters, setParameters } = useParameters();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParameters({
            ...parameters,
            algorithm: e.target.value as "mandelbrot" | "julia" | "perlin",
        });
    };

    return (
        <Styled.Container>
            <LabelledSelect
                id="algorithm"
                label="Algorithm:"
                value={parameters.algorithm}
                onChange={handleChange}
            >
                <option value="mandelbrot">Mandelbrot Set</option>
                <option value="julia">Julia Set</option>
                <option value="perlin">Perlin Noise</option>
            </LabelledSelect>
            <Label htmlFor="resolution">Resolution:</Label>
            <HorizontalLabelledInputsContainer>
                <HorizontalLabelledInput
                    id="width"
                    label="W:"
                    type="number"
                    value={parameters.width}
                    onChange={(e) =>
                        setParameters({
                            ...parameters,
                            width: e.target.value,
                            height: String(Math.round((parseInt(e.target.value) * 3) / 4)),
                        })
                    }
                />
                x
                <HorizontalLabelledInput
                    id="height"
                    label="H:"
                    type="number"
                    value={parameters.height}
                    onChange={(e) =>
                        setParameters({
                            ...parameters,
                            width: String(Math.round((parseInt(e.target.value) * 4) / 3)),
                            height: e.target.value,
                        })
                    }
                />
            </HorizontalLabelledInputsContainer>
        </Styled.Container>
    );
}
