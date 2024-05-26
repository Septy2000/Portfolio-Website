import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function MandelbrotParametersMenu() {
    const { mandelbrotParameters, setMandelbrotParameters } = useParameters();

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMandelbrotParameters({
            ...mandelbrotParameters,
            colorModeParameters: {
                ...mandelbrotParameters.colorModeParameters,
                colorMode: e.target.value as "smooth" | "rgb" | "random",
            },
        });
    };

    return (
        <div>
            {/* Add controls specific to Mandelbrot set */}
            <button>Reset</button>
            <button>Undo Zoom</button>
            <label htmlFor="colorMode">Color Mode:</label>
            <select
                id="colorMode"
                value={mandelbrotParameters.colorModeParameters.colorMode}
                onChange={handleColorModeChange}
            >
                <option value="smooth">Smooth</option>
                <option value="rgb">RGB</option>
                <option value="random">Random</option>
            </select>
            {/* Additional controls based on selected color mode */}
        </div>
    );
}
