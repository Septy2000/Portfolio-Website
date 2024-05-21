import { ComplexNumber, ComplexPlaneBoundary } from "@/_types/math";

/**
 * Calculate the corresponding complex plane points using the points in canvas
 * @param {number} x point on real axis
 * @param {number} y point on complex axis
 * @returns object containing x and y values on the complex plane
 */
export function complexPlanePoint(
    x: number,
    y: number,
    complexPlaneBoundary: ComplexPlaneBoundary,
    width: number,
    height: number
): ComplexNumber {
    x =
        complexPlaneBoundary.RE_MIN +
        (x / width) *
            (complexPlaneBoundary.RE_MAX - complexPlaneBoundary.RE_MIN);
    y =
        complexPlaneBoundary.IM_MIN +
        (y / height) *
            (complexPlaneBoundary.IM_MAX - complexPlaneBoundary.IM_MIN);
    return { x, y };
}
