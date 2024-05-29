import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import * as Styled from "./ParametersMenu.styled";
import DefaultParametersMenu from "./DefaultParametersMenu/DefaultParametersMenu";
import MandelbrotParametersMenu from "./MandelbrotParametersMenu/MandelbrotParametersMenu";
import JuliaParametersMenu from "./JuliaParametersMenu/JuliaParametersMenu";
import PerlinNoiseParametersMenu from "./PerlinNoiseParametersMenu/PerlinNoiseParametersMenu";
import ColorModeMenu from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersMenu/ColorModeMenu/ColorModeMenu";
import { isParametersMenuInputValid } from "@/utils/ParametersValidation";
import InputError from "./InputError";
export default function ParametersMenu({ generate }: { generate: () => void }) {
    const { typedColorModeParameters, typedParameters } = useParameters();

    return (
        <Styled.MenuContainer>
            <DefaultParametersMenu />
            <ColorModeMenu />
            {typedParameters.algorithm === "mandelbrot" && (
                <MandelbrotParametersMenu />
            )}
            {typedParameters.algorithm === "julia" && <JuliaParametersMenu />}
            {typedParameters.algorithm === "perlin" && (
                <PerlinNoiseParametersMenu />
            )}
            <InputError />
            <button
                onClick={generate}
                disabled={
                    !isParametersMenuInputValid(
                        typedParameters,
                        typedColorModeParameters
                    )
                }
            >
                Generate
            </button>
        </Styled.MenuContainer>
    );
}
