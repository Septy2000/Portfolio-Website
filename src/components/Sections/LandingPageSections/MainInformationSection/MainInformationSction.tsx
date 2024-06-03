"use client";
import * as Styled from "./MainInformationSection.styled";
import HeroInformation from "./HeroInformation/HeroInformation";
import { PortraitImage } from "@/components/Images/Images.styled";
import { portrait_src } from "@/components/Images/Images";
import { useInView } from "react-intersection-observer";
import { forwardRef } from "react";
import React from "react";

const MainInformationSection = forwardRef<HTMLDivElement>((props, aboutRef) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    return (
        <Styled.Container ref={ref} $inView={inView}>
            <Styled.InfoFlexContainer ref={aboutRef}>
                <HeroInformation />
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
