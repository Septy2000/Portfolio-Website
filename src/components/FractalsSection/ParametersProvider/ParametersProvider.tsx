import { createContext, useContext, useState, ReactNode } from "react";
import {
    DefaultParameters,
    MandelbrotParameters,
    JuliaParameters,
    PerlinNoiseParameters,
    ParametersContextType,
} from "@/_types/common";

const ParametersContext = createContext<ParametersContextType | undefined>(
    undefined
);

export const ParametersProvider = ({ children }: { children: ReactNode }) => {
    const [defaultParameters, setDefaultParameters] =
        useState<DefaultParameters>({
            algorithm: "mandelbrot",
            width: 800,
            height: 600,
        });

    const [mandelbrotParameters, setMandelbrotParameters] =
        useState<MandelbrotParameters>({
            colorModeParameters: { colorMode: "smooth", colorIntensity: 1 },
            iterations: 500,
        });

    const [juliaParameters, setJuliaParameters] = useState<JuliaParameters>({
        colorModeParameters: { colorMode: "smooth", colorIntensity: 1 },
        iterations: 500,
        valueOfC: "",
    });

    const [perlinNoiseParameters, setPerlinNoiseParameters] =
        useState<PerlinNoiseParameters>({
            colorModeParameters: { colorMode: "smooth", colorIntensity: 3 },
            scale: 1,
            zoomOut: 2,
            seed: "",
            currentSeed: "",
        });

    return (
        <ParametersContext.Provider
            value={{
                defaultParameters,
                setDefaultParameters,
                mandelbrotParameters,
                setMandelbrotParameters,
                juliaParameters,
                setJuliaParameters,
                perlinNoiseParameters,
                setPerlinNoiseParameters,
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
