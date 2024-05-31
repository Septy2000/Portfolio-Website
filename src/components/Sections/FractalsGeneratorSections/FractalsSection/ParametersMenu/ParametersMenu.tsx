import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import * as Styled from "./ParametersMenu.styled";
import DefaultParametersMenu from "./DefaultParametersMenu/DefaultParametersMenu";
import MandelbrotParametersMenu from "./MandelbrotParametersMenu/MandelbrotParametersMenu";
import JuliaParametersMenu from "./JuliaParametersMenu/JuliaParametersMenu";
import PerlinNoiseParametersMenu from "./PerlinNoiseParametersMenu/PerlinNoiseParametersMenu";
import ColorModeMenu from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersMenu/ColorModeMenu/ColorModeMenu";
import { isParametersMenuInputValid } from "@/utils/parametersValidation";
import InputError from "./InputError";
export default function ParametersMenu({
    generate,
    isImageGenerated,
    stopGeneration,
}: {
    generate: () => void;
    isImageGenerated: boolean;
    stopGeneration: () => void;
}) {
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
                <Styled.HorizontalButtonsContainer>
                    <Styled.ControlButton onClick={() => {}}>
                        undo zoom
                        <Styled.UndoZoomIcon />
                    </Styled.ControlButton>
                    <Styled.ControlButton onClick={() => {}}>
                        reset zoom
                        <Styled.ResetZoomIcon />
                    </Styled.ControlButton>
                </Styled.HorizontalButtonsContainer>
                <Styled.HorizontalButtonsContainer>
                    <Styled.ControlButton
                        onClick={generate}
                        disabled={
                            !isParametersMenuInputValid(
                                typedParameters,
                                typedColorModeParameters
                            ) || !isImageGenerated
                        }
                    >
                        generate
                        <Styled.PlayIcon />
                    </Styled.ControlButton>
                    <Styled.ControlButton
                        onClick={stopGeneration}
                        disabled={isImageGenerated}
                    >
                        stop
                        <Styled.StopIcon />
                    </Styled.ControlButton>
                </Styled.HorizontalButtonsContainer>
            </Styled.ButtonsContainer>
        </Styled.Container>
    );
}
