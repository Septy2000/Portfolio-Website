import { createContext, useContext, useState, ReactNode } from "react";
import {
    Parameters,
    ParametersContextType,
    ColorModeParameters,
} from "@/_types/common";

const ParametersContext = createContext<ParametersContextType | undefined>(
    undefined
);

export const ParametersProvider = ({ children }: { children: ReactNode }) => {
    const [parameters, setParameters] = useState<Parameters>({
        algorithm: "mandelbrot",
        width: "800",
        height: "600",
        maxIterations: "500",
        valueOfC: { x: 0.355, y: 0.355 },
        scale: "1",
        zoomOut: "2",
        seed: "",
    });

    const [colorModeParameters, setColorModeParameters] =
        useState<ColorModeParameters>({
            colorMode: "smooth",
            colorIntensity: "1",
            rgbWeights: { r: "1", g: "1", b: "1" },
            numberOfRandomColors: "16",
        });

    return (
        <ParametersContext.Provider
            value={{
                parameters,
                setParameters,
                colorModeParameters,
                setColorModeParameters,
            }}
        >
            {children}
        </ParametersContext.Provider>
    );
};

export const useParameters = () => {
    const context = useContext(ParametersContext);
    if (!context) {
        throw new Error(
            "useParameters must be used within a ParametersProvider"
        );
    }
    return context;
};
