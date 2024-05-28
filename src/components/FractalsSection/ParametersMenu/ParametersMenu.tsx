import styled from "styled-components";
import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import * as Styled from "./ParametersMenu.styled";
import DefaultParametersMenu from "./DefaultParametersMenu/DefaultParametersMenu";
import MandelbrotParametersMenu from "./MandelbrotParametersMenu/MandelbrotParametersMenu";
import JuliaParametersMenu from "./JuliaParametersMenu/JuliaParametersMenu";
import PerlinNoiseParametersMenu from "./PerlinNoiseParametersMenu/PerlinNoiseParametersMenu";
import ColorModeMenu from "@/components/FractalsSection/ParametersMenu/ColorModeMenu/ColorModeMenu";

export default function ParametersMenu({ generate }: { generate: () => void }) {
    const { parameters } = useParameters();

    return (
        <Styled.MenuContainer>
            <DefaultParametersMenu />
            <ColorModeMenu />
            {parameters.algorithm === "mandelbrot" && (
                <MandelbrotParametersMenu />
            )}
            {parameters.algorithm === "julia" && <JuliaParametersMenu />}
            {parameters.algorithm === "perlin" && <PerlinNoiseParametersMenu />}
            <button onClick={generate}>Generate</button>
        </Styled.MenuContainer>
    );
}
