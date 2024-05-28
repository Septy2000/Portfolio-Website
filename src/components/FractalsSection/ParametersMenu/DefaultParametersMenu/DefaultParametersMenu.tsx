import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function DefaultParametersMenu() {
    const { defaultParameters, setDefaultParameters } = useParameters();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDefaultParameters({
            ...defaultParameters,
            algorithm: e.target.value as "mandelbrot" | "julia" | "perlin",
        });
    };

    return (
        <div>
            <label htmlFor="algorithm">Algorithm:</label>
            <select
                id="algorithm"
                value={defaultParameters.algorithm}
                onChange={handleChange}
            >
                <option value="mandelbrot">Mandelbrot Set</option>
                <option value="julia">Julia Set</option>
                <option value="perlin">Perlin Noise</option>
            </select>
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                type="number"
                value={defaultParameters.width}
                onChange={(e) =>
                    setDefaultParameters({
                        ...defaultParameters,
                        width: e.target.value,
                    })
                }
            />
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                type="number"
                value={defaultParameters.height}
                onChange={(e) =>
                    setDefaultParameters({
                        ...defaultParameters,
                        height: e.target.value,
                    })
                }
            />
        </div>
    );
}
