"use client";
import * as Styled from "./ExperienceSection.styled";
import TimelineDescriptionItem from "./TimelineDescriptionItem/TimelineDescriptionItem";
import React, { forwardRef } from "react";
import { gocity_icon_src, kcl_icon_src } from "@/components/Images/Images";
import { useInView } from "react-intersection-observer";
import { SpacerSmall } from "../../../Spacer/Spacer.styled";
export type TimelineItemAttributes = {
    title: string;
    company: string;
    website: string;
    date: string;
    location: string;
    responsibilities: string[];
    icon: string;
};

const ExperienceSection = forwardRef<HTMLDivElement>((props, experienceRef) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    const timelineItems: TimelineItemAttributes[] = [
        {
            title: "Graduate Software Engineer",
            company: "GoCity",
            website: "https://gocity.com/",
            date: "Sep 2023 - Feb 2024",
            location: "London, United Kingdom",
            responsibilities: [
                "Worked on the Go City iOS app using MVVM+C architecture.",
                "Participated in Agile processes: Stand-Ups, Sprint Planning, and Reviews.",
                "Collaborated with Product, Design, and Development teams.",
                "Engaged in code reviews and paired programming for feature development.",
                "Enhanced understanding of iOS architecture, UI/UX design, and best practices.",
                "Improved code testability through acquired testing skills.",
                "Implemented production features including customer itineraries and checkout.",
            ],

            icon: gocity_icon_src,
        },
        {
            title: "MSci Computer Science Graduate (First Class Honours)",
            company: "King's College London",
            website: "https://www.kcl.ac.uk/",
            date: "Sep 2019 - Jun 2023",
            location: "London, United Kingdom",
            responsibilities: [
                "Achieved a First-Class Honours degree in Computer Science",
                "Acquired a strong foundation in computer science, including software engineering, data structures and algorithms, and artificial intelligence.",
            ],
            icon: kcl_icon_src,
        },
    ];

    return (
        <Styled.Container ref={ref} $inView={inView}>
            <Styled.ScrollToExperienceHeader ref={experienceRef} $inView={inView}>
                scroll to check my experience &rarr;
            </Styled.ScrollToExperienceHeader>

            <Styled.HorizontalScrollContainer>
                {timelineItems.map((item, index) => (
                    <TimelineDescriptionItem item={item} key={index} />
                ))}
            </Styled.HorizontalScrollContainer>
            <SpacerSmall />
        </Styled.Container>
    );
});
ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
