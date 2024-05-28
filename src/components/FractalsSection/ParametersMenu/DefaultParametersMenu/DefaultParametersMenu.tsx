import { useParameters } from "@/components/FractalsSection/ParametersProvider/ParametersProvider";

export default function DefaultParametersMenu() {
    const { parameters, setParameters } = useParameters();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParameters({
            ...parameters,
            algorithm: e.target.value as "mandelbrot" | "julia" | "perlin",
        });
    };

    return (
        <div>
            <label htmlFor="algorithm">Algorithm:</label>
            <select
                id="algorithm"
                value={parameters.algorithm}
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
                value={parameters.width}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        width: e.target.value,
                    })
                }
            />
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                type="number"
                value={parameters.height}
                onChange={(e) =>
                    setParameters({
                        ...parameters,
                        height: e.target.value,
                    })
                }
            />
        </div>
    );
}
