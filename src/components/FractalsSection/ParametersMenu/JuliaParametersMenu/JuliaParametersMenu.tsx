import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
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
            <select
                id="c"
                value={`${parameters.valueOfC.x},${parameters.valueOfC.y}i`}
                onChange={(e) => {
                    const [x, y] = e.target.value.split(",");
                    setParameters({
                        ...parameters,
                        valueOfC: { x: parseFloat(x), y: parseFloat(y) },
                    });
                }}
            >
                {COMPLEX_LIST.map((complexNumber) => (
                    <option
                        key={`${complexNumber.x},${complexNumber.y}`}
                        value={`${complexNumber.x},${complexNumber.y}`}
                    >
                        {`${complexNumber.x},${complexNumber.y}i`}
                    </option>
                ))}
            </select>
        </div>
    );
}
