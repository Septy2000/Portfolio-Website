import * as Styled from "./ExperienceContainer.styled";
import TimelineItem from "./TimelineItem/TimelineItem";
import React from "react";
import { gocity_icon_src, kcl_icon_src } from "@/components/images/Images";
import { ExperienceImage } from "@/components/images/Images.styled";
import PlainLinkWrapper from "@/components/wrappers/PlainLinkWrapper/PlainLinkWrapper";

export type TimelineItemAttributes = {
    id: number;
    title: string;
    company: string;
    website: string;
    date: string;
    location: string;
    description: string;
    icon: string;
};

export default function ExperienceContainer() {
    const timelineItems: TimelineItemAttributes[] = [
        {
            id: 1,
            title: "Graduate Software Engineer",
            company: "GoCity",
            website: "https://gocity.com/",
            date: "Sept 2023 - Feb 2024",
            location: "London, United Kingdom",
            description:
                "Worked on a project to develop a mobile application for a client using React Native and TypeScript",
            icon: gocity_icon_src,
        },
        {
            id: 2,
            title: "MSci Computer Science Graduate (First Class Honours)",
            company: "King's College London",
            website: "https://www.kcl.ac.uk/",
            date: "Sept 2019 - June 2023",
            location: "London, United Kingdom",
            description:
                "Worked on a project to develop a mobile application for a client using React Native and TypeScript",
            icon: kcl_icon_src,
        },
    ];

    return (
        <Styled.Container>
            <Styled.ScrollToExperienceHeader>
                Scroll to check my experience &darr;
            </Styled.ScrollToExperienceHeader>
            <Styled.Timeline>
                {timelineItems.map((timelineItem) => {
                    return (
                        <React.Fragment key={timelineItem.id}>
                            {timelineItem.id === 1 ? (
                                <Styled.TimelineGroupRight>
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

                                    <TimelineItem
                                        attributes={timelineItem}
                                        index={timelineItem.id}
                                    />
                                </Styled.TimelineGroupRight>
                            ) : (
                                <Styled.TimelineGroupLeft>
                                    <TimelineItem
                                        attributes={timelineItem}
                                        index={timelineItem.id}
                                    />
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
                                </Styled.TimelineGroupLeft>
                            )}
                        </React.Fragment>
                    );
                })}
            </Styled.Timeline>
        </Styled.Container>
    );
}
