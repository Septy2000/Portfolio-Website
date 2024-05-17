"use client";
import * as Styled from "./ExperienceSection.styled";
import TimelineDescriptionItem from "./TimelineDescriptionItem/TimelineDescriptionItem";
import React, { forwardRef } from "react";
import { gocity_icon_src, kcl_icon_src } from "@/components/images/Images";
import { ExperienceImage } from "@/components/images/Images.styled";
import { PlainLinkWrapper } from "@/components/wrappers/PlainLinkWrapper/PlainLinkWrapper.styled";
import { useInView } from "react-intersection-observer";
import { SpacerSmall } from "../Spacer/Spacer.styled";
export type TimelineItemAttributes = {
    title: string;
    company: string;
    website: string;
    date: string;
    location: string;
    description: string;
    icon: string;
};

const ExperienceSection = forwardRef<HTMLDivElement>((props, experienceRef) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const timelineItems: TimelineItemAttributes[] = [
        {
            title: "Graduate Software Engineer",
            company: "GoCity",
            website: "https://gocity.com/",
            date: "Sep 2023 - Feb 2024",
            location: "London, United Kingdom",
            description:
                "Worked on a project to develop a mobile application for a client using React Native and TypeScript",
            icon: gocity_icon_src,
        },
        {
            title: "MSci Computer Science Graduate (First Class Honours)",
            company: "King's College London",
            website: "https://www.kcl.ac.uk/",
            date: "Sep 2019 - Jun 2023",
            location: "London, United Kingdom",
            description:
                "Worked on a project to develop a mobile application for a client using React Native and TypeScript",
            icon: kcl_icon_src,
        },
    ];

    return (
        <Styled.Container ref={ref} $inView={inView}>
            <SpacerSmall />
            <Styled.ScrollToExperienceHeader ref={experienceRef}>
                Scroll to check my experience &darr;
            </Styled.ScrollToExperienceHeader>
            <Styled.TimelineGridContainer>
                <SpacerSmall />

                {timelineItems.map((timelineItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            {index % 2 === 0 ? (
                                <Styled.TimelineItemGroup $index={index}>
                                    <Styled.GridFiller />
                                    <Styled.TimelineIconItemRight>
                                        <PlainLinkWrapper
                                            href={timelineItem.website}
                                        >
                                            <ExperienceImage
                                                src={timelineItem.icon}
                                                alt="Experience icon"
                                                width={80}
                                                height={80}
                                                priority
                                            />
                                        </PlainLinkWrapper>
                                    </Styled.TimelineIconItemRight>

                                    <TimelineDescriptionItem
                                        attributes={timelineItem}
                                        index={index}
                                    />
                                </Styled.TimelineItemGroup>
                            ) : (
                                <Styled.TimelineItemGroup $index={index}>
                                    <TimelineDescriptionItem
                                        attributes={timelineItem}
                                        index={index}
                                    />
                                    <Styled.TimelineIconItemLeft>
                                        <PlainLinkWrapper
                                            href={timelineItem.website}
                                        >
                                            <ExperienceImage
                                                src={timelineItem.icon}
                                                alt="Experience icon"
                                                width={80}
                                                height={80}
                                                priority
                                            />
                                        </PlainLinkWrapper>
                                    </Styled.TimelineIconItemLeft>
                                    <Styled.GridFiller />
                                </Styled.TimelineItemGroup>
                            )}
                        </React.Fragment>
                    );
                })}
            </Styled.TimelineGridContainer>
            <SpacerSmall />
        </Styled.Container>
    );
});
ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
