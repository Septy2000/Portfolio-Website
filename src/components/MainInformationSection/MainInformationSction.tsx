import * as Styled from "./MainInformationSection.styled";
import AboutContainer from "./AboutSection/AboutSection";
import { PortraitImage } from "@/components/images/Images.styled";
import { portrait_src } from "@/components/images/Images";

export default function MainInformationSection() {
    return (
        <Styled.Container>
            <AboutContainer />
            <PortraitImage
                src={portrait_src}
                alt="Me. Image could not load"
                width={300}
                height={300}
                priority
            />
        </Styled.Container>
    );
}
