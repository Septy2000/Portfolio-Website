import * as Styled from "./FractalsSection.styled";
import ParametersMenu from "./ParametersMenu/ParametersMenu";
import Canvas from "../canvas/Canvas";
import { useState } from "react";
import { Parameters } from "@/_types/datamodels";
import React, { useEffect } from "react";
import { ComplexNumber, ComplexPlaneBoundary } from "@/_types/math";
import mandelbrotIterationCalculator from "@/utils/algorithms/mandelbrotFunction";
import { complexPlanePoint } from "@/utils/complexNumbers";

export default function FractalsSection() {
    const [parameters, setParameters] = useState<Parameters>({
        width: 800,
        height: 600,
        colorIntensity: 1,
        fractalType: "mandelbrot",
    });
    const [isGenerated, setIsGenerated] = useState(false);

    let complexPlaneBoundaries: ComplexPlaneBoundary = {
        RE_MIN: -2,
        RE_MAX: 2,
        IM_MIN: -1.5,
        IM_MAX: 1.5,
    };

    const MAX_ITERATIONS = 500;

    const width = 800;
    const height = 600;

    // Scaling factor for taking into account resolution difference between the actual canvas
    // and the displayed canvas
    let scaling_factor = 1;

    useEffect(() => {
        if (!isGenerated) {
            generate();
            setIsGenerated(true);
        }
    }, [isGenerated]);

    function generate() {
        for (let column = 0; column < width; column++) {
            let columnValues: number[] = [];
            for (let row = 0; row < height; row++) {
                let iterationsReached = mandelbrotIterationCalculator(
                    complexPlanePoint(
                        column,
                        row,
                        complexPlaneBoundaries,
                        width,
                        height
                    ),
                    MAX_ITERATIONS
                );
                columnValues.push(iterationsReached);
            }

            // find a way to call drawColumn
        }
    }

    return (
        <Styled.Container>
            <ParametersMenu
                parameters={parameters}
                setParameters={setParameters}
            />
            <Canvas width={width} height={height} />
        </Styled.Container>
    );
}
