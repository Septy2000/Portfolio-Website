import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function MandelbrotParametersMenu() {
    const { mandelbrotParameters, setMandelbrotParameters } = useParameters();

    return (
        <div>
            <label htmlFor="maxIterations">Max Iterations:</label>
            <input
                id="maxIterations"
                type="number"
                value={mandelbrotParameters.maxIterations}
                onChange={(e) =>
                    setMandelbrotParameters({
                        ...mandelbrotParameters,
                        maxIterations: parseInt(e.target.value),
                    })
                }
            />
        </div>
    );
}
