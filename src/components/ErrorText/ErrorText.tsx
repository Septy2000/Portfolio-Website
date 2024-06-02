import * as Styled from "./ErrorText.styled";

export default function ErrorText({ children }: { children: string }) {
    return (
        <Styled.Container>
            <Styled.BsExclamationCircleIcon />
            <Styled.ErrorText>{children}</Styled.ErrorText>
        </Styled.Container>
    );
}
