"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
    Parameters,
    ParametersContextType,
    TypedParameters,
    TypedColorModeParameters,
    ColorModeParameters,
} from "@/_types/common";
import { convertParameters, convertColorModeParameters } from "@/utils/parametersTypeConversion";

const ParametersContext = createContext<ParametersContextType | undefined>(undefined);

export const ParametersProvider = ({ children }: { children: ReactNode }) => {
    const [parameters, setParameters] = useState<Parameters>({
        algorithm: "mandelbrot",
        width: "800",
        height: "600",
        maxIterations: "500",
        valueOfC: { x: 0.355, y: 0.355 },
        customCRealValue: "0.0",
        customCImaginaryValue: "0.0",
        customCValueSelected: false,
        newtonDegree: "3",
        lyapunovSequence: "AB",
        phoenixP: "0.5667",
        phoenixQ: "-0.5",
        buddhabrotSamples: "1000000",
        scale: "1",
        zoomOut: "2",
        customSeed: "",
        seed: "",
    });

    const [colorModeParameters, setColorModeParameters] = useState<ColorModeParameters>({
        colorMode: "smooth",
        smoothColoring: true,
        cyclicColoring: false,
        logarithmicColoring: false,
        colorIntensity: "5",
        rgbWeights: { r: "1", g: "1", b: "1" },
        numberOfRandomColors: "16",
        palette: "fire",
    });

    const [typedParameters, setTypedParameters] = useState<TypedParameters>(
        convertParameters(parameters)
    );
    const [typedColorModeParameters, setTypedColorModeParameters] =
        useState<TypedColorModeParameters>(convertColorModeParameters(colorModeParameters));

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const paramsJson = searchParams.get("params");
        const colorsJson = searchParams.get("colors");
        if (paramsJson) {
            try { setParameters(JSON.parse(paramsJson)); } catch {}
        }
        if (colorsJson) {
            try { setColorModeParameters(JSON.parse(colorsJson)); } catch {}
        }
    }, []);

    useEffect(() => {
        setTypedParameters(convertParameters(parameters));
    }, [parameters]);

    useEffect(() => {
        setTypedColorModeParameters(convertColorModeParameters(colorModeParameters));
    }, [colorModeParameters]);

    return (
        <ParametersContext.Provider
            value={{
                parameters,
                setParameters,
                typedParameters,
                typedColorModeParameters,
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
        throw new Error("useParameters must be used within a ParametersProvider");
    }
    return context;
};
