import { useParameters } from "@/components/Sections/FractalsGeneratorSections/FractalsSection/ParametersProvider/ParametersProvider";

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
                        height: String((parseInt(e.target.value) * 3) / 4),
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
                        width: String((parseInt(e.target.value) * 4) / 3),
                        height: e.target.value,
                    })
                }
            />
        </div>
    );
}
