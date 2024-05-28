import * as Styled from "./ErrorText.styled";

export default function ErrorText({ text }: { text: string }) {
    return <Styled.ErrorText>{text}</Styled.ErrorText>;
}
