import { createContext, useContext, useState, ReactNode } from "react";
import {
    DefaultParameters,
    MandelbrotParameters,
    JuliaParameters,
    PerlinNoiseParameters,
    ParametersContextType,
    ColorModeParameters,
    InputParametersError,
} from "@/_types/common";

const ParametersContext = createContext<ParametersContextType | undefined>(
    undefined
);

export const ParametersProvider = ({ children }: { children: ReactNode }) => {
    const [defaultParameters, setDefaultParameters] =
        useState<DefaultParameters>({
            algorithm: "mandelbrot",
            width: "800",
            height: "600",
        });

    const [mandelbrotParameters, setMandelbrotParameters] =
        useState<MandelbrotParameters>({
            maxIterations: "500",
        });

    const [juliaParameters, setJuliaParameters] = useState<JuliaParameters>({
        maxIterations: "500",
        valueOfC: { x: 0.355, y: 0.355 },
    });

    const [perlinNoiseParameters, setPerlinNoiseParameters] =
        useState<PerlinNoiseParameters>({
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

    const [inputParametersError, setInputParametersError] =
        useState<InputParametersError>({
            width: false,
            height: false,
            maxIterations: false,
            intensity: false,
            r: false,
            g: false,
            b: false,
            randomColors: false,
            scale: false,
            zoomOut: false,
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
                colorModeParameters,
                setColorModeParameters,
                inputParametersError,
                setInputParametersError,
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
