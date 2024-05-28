import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function PerlinNoiseParametersMenu() {
    const { parameters, setParameters } = useParameters();

    return (
        <div>
            <label htmlFor="scale">Scale:</label>
            <input
                id="scale"
                type="number"
                value={parameters.scale}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        scale: e.target.value,
                    })
                }
            />
            <label htmlFor="zoomOut">Zoom Out:</label>
            <input
                id="zoomOut"
                type="number"
                value={parameters.zoomOut}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        zoomOut: e.target.value,
                    })
                }
            />
            <label htmlFor="seed">Seed:</label>
            <input
                id="seed"
                type="number"
                value={parameters.seed}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        seed: e.target.value,
                    })
                }
            />
            <p>Current Seed: {parameters.seed}</p>
        </div>
    );
}
