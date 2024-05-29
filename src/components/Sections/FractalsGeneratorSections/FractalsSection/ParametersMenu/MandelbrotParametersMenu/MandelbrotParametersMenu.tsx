import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function MandelbrotParametersMenu() {
    const { parameters, setParameters } = useParameters();

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
        </div>
    );
}
