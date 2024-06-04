"use client";
import { useParameters } from "@/components/Sections/ProceduralArtGeneratorSections/ProceduralArtGeneratorSection/ParametersProvider/ParametersProvider";
import React, { useState } from "react";
import { ComplexNumber } from "@/_types/math";
import * as Styled from "./JuliaParametersMenu.styled";
import LabelledInput from "@/components/LabelledInput/LabelledInput";
import LabelledSelect from "@/components/LabelledSelect/LabelledSelect";
export default function JuliaParametersMenu() {
    const { parameters, setParameters } = useParameters();

    const COMPLEX_LIST: ComplexNumber[] = [
        { x: 0.355, y: 0.355 },
        { x: 0, y: 0.8 },
        { x: 0.37, y: 0.1 },
        { x: -0.54, y: 0.54 },
        { x: -0.4, y: -0.59 },
        { x: 0.355534, y: -0.337292 },
    ];
    const COMPLEX_LIST_OPTIONS_STRINGS: string[] = [
        "0.355 + 0.355",
        "0 + 0.8",
        "0.37 + 0.1",
        "-0.54 + 0.54",
        "-0.4 - 0.59",
        "0.355534 - 0.337292",
        "Custom",
    ];

    const [selectedCValue, setSelectedCValue] = useState<string>(COMPLEX_LIST_OPTIONS_STRINGS[0]);

    function handleCValueChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCValue(e.target.value);
        const selectedIndex = e.target.selectedIndex;
        if (selectedIndex === COMPLEX_LIST.length) {
            setParameters({
                ...parameters,
                customCValueSelected: true,
            });
        } else {
            setParameters({
                ...parameters,
                valueOfC: COMPLEX_LIST[selectedIndex],
                customCValueSelected: false,
            });
        }
    }

    return (
        <Styled.Container>
            <LabelledInput
                id="maxIterations"
                label="Max Iterations:"
                type="number"
                value={parameters.maxIterations}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        maxIterations: e.target.value,
                    })
                }
            />
            <LabelledSelect id="c" label="C:" value={selectedCValue} onChange={handleCValueChange}>
                {COMPLEX_LIST_OPTIONS_STRINGS.map((complexNumber, id) => (
                    <option key={id} value={complexNumber}>
                        {complexNumber}
                    </option>
                ))}
            </LabelledSelect>
            {parameters.customCValueSelected && (
                <React.Fragment>
                    <LabelledInput
                        id="customCRealValue"
                        label="Custom C Real Value:"
                        type="number"
                        value={parameters.customCRealValue}
                        onChange={(e) =>
                            setParameters({
                                ...parameters,
                                customCRealValue: e.target.value,
                            })
                        }
                    />
                    <LabelledInput
                        id="customCImaginaryValue"
                        label="Custom C Imaginary Value:"
                        type="number"
                        value={parameters.customCImaginaryValue}
                        onChange={(e) =>
                            setParameters({
                                ...parameters,
                                customCImaginaryValue: e.target.value,
                            })
                        }
                    />
                </React.Fragment>
            )}
        </Styled.Container>
    );
}
