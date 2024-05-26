import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function PerlinNoiseParametersMenu() {
    const { perlinNoiseParameters, setPerlinNoiseParameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerlinNoiseParameters({
            ...perlinNoiseParameters,
            colorModeParameters: {
                ...perlinNoiseParameters.colorModeParameters,
                colorMode: e.target.value as "smooth" | "rgb" | "random",
            },
        });
    };

    return (
        <div>
            {/* Add controls specific to Perlin noise */}
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={perlinNoiseParameters.colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
            </select>
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
