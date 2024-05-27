import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";
import React from "react";
export default function PerlinNoiseParametersMenu() {
    const { perlinNoiseParameters, setPerlinNoiseParameters } = useParameters();

    return (
        <div>
            <label htmlFor="scale">Scale:</label>
            <input
                id="scale"
                type="number"
                value={perlinNoiseParameters.scale}
                onChange={(e) =>
                    setPerlinNoiseParameters({
                        ...perlinNoiseParameters,
                        scale: parseFloat(e.target.value),
                    })
                }
            />
            <label htmlFor="zoomOut">Zoom Out:</label>
            <input
                id="zoomOut"
                type="number"
                value={perlinNoiseParameters.zoomOut}
                onChange={(e) =>
                    setPerlinNoiseParameters({
                        ...perlinNoiseParameters,
                        zoomOut: parseFloat(e.target.value),
                    })
                }
            />
            <label htmlFor="seed">Seed:</label>
            <input
                id="seed"
                type="text"
                value={perlinNoiseParameters.seed}
                onChange={(e) =>
                    setPerlinNoiseParameters({
                        ...perlinNoiseParameters,
                        seed: e.target.value,
                    })
                }
            />
            <p>Current Seed: {perlinNoiseParameters.currentSeed}</p>
        </div>
    );
}
