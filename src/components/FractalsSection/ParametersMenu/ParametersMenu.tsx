import * as Styled from "./ParametersMenu.styled";
import React from "react";
import { Parameters, ParametersMenuProps } from "@/_types/datamodels";

export default function ParametersMenu({
    parameters,
    setParameters,
}: ParametersMenuProps) {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setParameters((prev) => ({
            ...prev,
            [name]:
                name === "colorIntensity"
                    ? parseFloat(value)
                    : parseInt(value, 10),
            fractalType:
                name === "fractalType"
                    ? (value as "mandelbrot" | "julia" | "perlin")
                    : prev.fractalType,
        }));
    };

    return (
        <Styled.Container>
            <Styled.Label>Width</Styled.Label>
            <Styled.Input
                type="number"
                name="width"
                value={parameters.width}
                onChange={handleChange}
            />

            <Styled.Label>Height</Styled.Label>
            <Styled.Input
                type="number"
                name="height"
                value={parameters.height}
                onChange={handleChange}
            />

            <Styled.Label>Color Intensity</Styled.Label>
            <Styled.Input
                type="number"
                name="colorIntensity"
                value={parameters.colorIntensity}
                onChange={handleChange}
            />

            <Styled.Label>Fractal Type</Styled.Label>
            <Styled.Select
                name="fractalType"
                value={parameters.fractalType}
                onChange={handleChange}
            >
                <option value="mandelbrot">Mandelbrot</option>
                <option value="julia">Julia</option>
                <option value="perlin">Perlin Noise</option>
            </Styled.Select>
        </Styled.Container>
    );
}
