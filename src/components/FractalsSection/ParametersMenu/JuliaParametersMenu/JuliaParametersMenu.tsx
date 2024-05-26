import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function JuliaParametersMenu() {
    const { juliaParameters, setJuliaParameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setJuliaParameters({
            ...juliaParameters,
            colorModeParameters: {
                ...juliaParameters.colorModeParameters,
                colorMode: e.target.value as "smooth" | "rgb" | "random",
            },
        });
    };

    return (
        <div>
            {/* Add controls specific to Julia set */}
            <button>Reset</button>
            <button>Undo Zoom</button>
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={juliaParameters.colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                <option value="random">Random</option>
            </select>
            {/* Additional controls based on selected color mode */}
            <label htmlFor="valueOfC">Value of C:</label>
            <input
                id="valueOfC"
                type="text"
                value={juliaParameters.valueOfC}
                onChange={(e) =>
                    setJuliaParameters({
                        ...juliaParameters,
                        valueOfC: e.target.value,
                    })
                }
            />
        </div>
    );
}
