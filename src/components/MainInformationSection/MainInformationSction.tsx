import * as Styled from "./MainInformationSection.styled";
import AboutContainer from "./AboutSection/AboutSection";
import { PortraitImage } from "@/components/images/Images.styled";
import { portrait_src } from "@/components/images/Images";
import { useInView } from "react-intersection-observer";
import { forwardRef } from "react";
import React from "react";

const MainInformationSection = forwardRef<HTMLDivElement>((props, aboutRef) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    return (
        <Styled.Container ref={ref} $inView={inView}>
            <Styled.InfoFlexContainer ref={aboutRef}>
                <AboutContainer />
                <PortraitImage
                    src={portrait_src}
                    alt="Me. Image could not load"
                    width={300}
                    height={300}
                    priority
                />
            </Styled.InfoFlexContainer>
        </Styled.Container>
    );
});
MainInformationSection.displayName = "MainInformationSection";
export default MainInformationSection;
