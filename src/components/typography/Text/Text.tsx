import * as Styled from "./Text.styled";

type Color = "primary" | "secondary" | "tertiary" | string;
type TextProps = {
    color: Color;
    children: React.ReactNode;
    m: string;
};

export function Text({ children, color, m }: TextProps) {
    return (
        <Styled.Text color={color} $m={m}>
            {children}
        </Styled.Text>
    );
}
