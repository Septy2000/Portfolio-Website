import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import * as Styled from "./ParametersMenu.styled";
import DefaultParametersMenu from "./DefaultParametersMenu/DefaultParametersMenu";
import MandelbrotParametersMenu from "./MandelbrotParametersMenu/MandelbrotParametersMenu";
import JuliaParametersMenu from "./JuliaParametersMenu/JuliaParametersMenu";
import PerlinNoiseParametersMenu from "./PerlinNoiseParametersMenu/PerlinNoiseParametersMenu";
import ColorModeMenu from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersMenu/ColorModeMenu/ColorModeMenu";
import { isParametersMenuInputValid } from "@/utils/parametersValidation";
import InputError from "./InputError";
export default function ParametersMenu({ generate }: { generate: () => void }) {
    const { typedColorModeParameters, typedParameters } = useParameters();

    return (
        <Styled.Container>
            <Styled.MenusContainer>
                <DefaultParametersMenu />
                <ColorModeMenu />
                {typedParameters.algorithm === "mandelbrot" && (
                    <MandelbrotParametersMenu />
                )}
                {typedParameters.algorithm === "julia" && (
                    <JuliaParametersMenu />
                )}
                {typedParameters.algorithm === "perlin" && (
                    <PerlinNoiseParametersMenu />
                )}
            </Styled.MenusContainer>
            <Styled.ButtonsContainer>
                <InputError />
                <Styled.ZoomButtonsContainer>
                    <Styled.ZoomControlButton onClick={() => {}}>
                        undo zoom
                    </Styled.ZoomControlButton>
                    <Styled.ZoomControlButton onClick={() => {}}>
                        reset zoom
                    </Styled.ZoomControlButton>
                </Styled.ZoomButtonsContainer>
                <Styled.GenerateButton
                    onClick={generate}
                    disabled={
                        !isParametersMenuInputValid(
                            typedParameters,
                            typedColorModeParameters
                        )
                    }
                >
                    generate
                </Styled.GenerateButton>
            </Styled.ButtonsContainer>
        </Styled.Container>
    );
}
