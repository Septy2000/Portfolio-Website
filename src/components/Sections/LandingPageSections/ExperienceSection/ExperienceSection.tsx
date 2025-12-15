"use client";
import * as Styled from "./ExperienceSection.styled";
import React, { forwardRef, useState, useRef } from "react";
import {
    gocity_icon_src,
    kcl_icon_src,
    dd_icon_src,
    amex_icon_src,
} from "@/components/Images/Images";
import { PlainLinkWrapper } from "@/components/PlainLinkWrapper/PlainLinkWrapper.styled";
import { ExperienceImage } from "@/components/Images/Images.styled";

export type TimelineItemAttributes = {
    title: string;
    company: string;
    website: string;
    date: string;
    location: string;
    responsibilities: string[];
    skills: string[];
    icon: string;
};

const CARD_WIDTH = 340;
const GAP = 24;

const ExperienceSection = forwardRef<HTMLDivElement>((props, experienceRef) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const timelineItems: TimelineItemAttributes[] = [
        {
            title: "Software Engineer",
            company: "American Express",
            website: "https://www.americanexpress.com/",
            date: "Mar 2025 - Present",
            location: "London, UK",
            responsibilities: [
                "Delivered 5 customer-facing insurance products to 100,000+ US-based users",
                "Built backend APIs using Java and Kotlin with Vert.x",
                "Managed production deployments via Jenkins and GitHub Actions",
                "Contributed to architectural decisions for front-end and back-end systems",
            ],
            skills: ["React", "TypeScript", "Java", "Kotlin", "Jenkins"],
            icon: amex_icon_src,
        },
        {
            title: "Junior Software Engineer",
            company: "Dolphin Dynamics",
            website: "https://www.dolphind.com/",
            date: "Aug 2024 - Mar 2025",
            location: "London, UK",
            responsibilities: [
                "Maintained legacy system built with C# and C++",
                "Developed backend features using .NET Framework 4.8",
                "Lead migration of an outdated React project",
                "Addressed full stack tasks including bug resolution",
            ],
            skills: ["C#", "C++", ".NET", "React", "SQL Server"],
            icon: dd_icon_src,
        },
        {
            title: "Graduate Software Engineer",
            company: "GoCity",
            website: "https://gocity.com/",
            date: "Sep 2023 - Feb 2024",
            location: "London, UK",
            responsibilities: [
                "Worked on the Go City iOS app using MVVM+C architecture",
                "Participated in Agile processes and code reviews",
                "Implemented customer itineraries and checkout features",
                "Enhanced understanding of iOS architecture and best practices",
            ],
            skills: ["Swift", "iOS", "MVVM+C", "Agile", "UIKit"],
            icon: gocity_icon_src,
        },
        {
            title: "MSci Computer Science",
            company: "King's College London",
            website: "https://www.kcl.ac.uk/",
            date: "Sep 2019 - Jun 2023",
            location: "London, UK",
            responsibilities: [
                "First-Class Honours degree in Computer Science",
                "Strong foundation in algorithms, AI, and software engineering",
            ],
            skills: ["Algorithms", "Data Structures", "AI", "Python", "Java"],
            icon: kcl_icon_src,
        },
    ];

    const scrollToIndex = (index: number) => {
        const clampedIndex = Math.max(0, Math.min(index, timelineItems.length - 1));
        setActiveIndex(clampedIndex);
        scrollRef.current?.scrollTo({
            left: clampedIndex * (CARD_WIDTH + GAP),
            behavior: "smooth",
        });
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollPos = e.currentTarget.scrollLeft;
        const newIndex = Math.round(scrollPos / (CARD_WIDTH + GAP));
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < timelineItems.length) {
            setActiveIndex(newIndex);
        }
    };

    return (
        <Styled.Container ref={experienceRef}>
            <Styled.Header>
                <Styled.Title>experience</Styled.Title>
                <Styled.Subtitle>my professional journey</Styled.Subtitle>
            </Styled.Header>

            <Styled.ScrollWrapper>
                <Styled.NavButton
                    $position="left"
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    disabled={activeIndex === 0}
                >
                    ←
                </Styled.NavButton>

                <Styled.ScrollContainer ref={scrollRef} onScroll={handleScroll}>
                    {timelineItems.map((item, index) => (
                        <Styled.Card key={index}>
                            <Styled.CardHeader>
                                <Styled.IconWrapper>
                                    <PlainLinkWrapper href={item.website}>
                                        <ExperienceImage
                                            src={item.icon}
                                            alt={`${item.company} logo`}
                                            width={50}
                                            height={50}
                                            priority
                                        />
                                    </PlainLinkWrapper>
                                </Styled.IconWrapper>
                                <Styled.TitleWrapper>
                                    <Styled.CardTitle>{item.title}</Styled.CardTitle>
                                    <Styled.Company
                                        href={item.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.company}
                                    </Styled.Company>
                                </Styled.TitleWrapper>
                            </Styled.CardHeader>

                            <Styled.MetaInfo>
                                <Styled.MetaItem>{item.date}</Styled.MetaItem>
                                <Styled.MetaItem>{item.location}</Styled.MetaItem>
                            </Styled.MetaInfo>

                            <Styled.ResponsibilitiesList>
                                {item.responsibilities.map((resp, idx) => (
                                    <Styled.ResponsibilityItem key={idx}>
                                        {resp}
                                    </Styled.ResponsibilityItem>
                                ))}
                            </Styled.ResponsibilitiesList>

                            <Styled.SkillsContainer>
                                {item.skills.map((skill, idx) => (
                                    <Styled.SkillTag key={idx}>{skill}</Styled.SkillTag>
                                ))}
                            </Styled.SkillsContainer>
                        </Styled.Card>
                    ))}
                </Styled.ScrollContainer>

                <Styled.NavButton
                    $position="right"
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    disabled={activeIndex === timelineItems.length - 1}
                >
                    →
                </Styled.NavButton>
            </Styled.ScrollWrapper>

            <Styled.DotsContainer>
                {timelineItems.map((_, index) => (
                    <Styled.Dot
                        key={index}
                        $isActive={activeIndex === index}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </Styled.DotsContainer>
        </Styled.Container>
    );
});

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
