import * as Styled from "./ErrorText.styled";

export default function ErrorText({ children }: { children: string }) {
    return <Styled.ErrorText>{children}</Styled.ErrorText>;
}
