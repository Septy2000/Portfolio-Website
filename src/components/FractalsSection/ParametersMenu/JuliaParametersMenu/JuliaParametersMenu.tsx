"use client";
import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React, { useState } from "react";
import { ComplexNumber } from "@/_types/math";
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

    const [selectedCValue, setSelectedCValue] = useState<string>(
        COMPLEX_LIST_OPTIONS_STRINGS[0]
    );

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
        <div>
            <label htmlFor="maxIterations">Max Iterations:</label>
            <input
                id="maxIterations"
                type="number"
                value={parameters.maxIterations}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        maxIterations: e.target.value,
                    })
                }
            />
            <label htmlFor="c">C:</label>
            <select id="c" value={selectedCValue} onChange={handleCValueChange}>
                {COMPLEX_LIST_OPTIONS_STRINGS.map((complexNumber, id) => (
                    <option key={id} value={complexNumber}>
                        {complexNumber}
                    </option>
                ))}
            </select>
            {parameters.customCValueSelected && (
                <React.Fragment>
                    <label htmlFor="customCRealValue">
                        Custom C Real Value:
                    </label>
                    <input
                        id="customCRealValue"
                        type="number"
                        value={parameters.customCRealValue}
                        onChange={(e) =>
                            setParameters({
                                ...parameters,
                                customCRealValue: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="customCImaginaryValue">
                        Custom C Imaginary Value:
                    </label>
                    <input
                        id="customCImaginaryValue"
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
        </div>
    );
}
