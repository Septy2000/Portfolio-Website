import React from "react";
import { TimelineItemAttributes } from "../ExperienceSection";
import * as Styled from "./TimelineDescriptionItem.styled";
import { PlainLinkWrapper } from "@/components/PlainLinkWrapper/PlainLinkWrapper.styled";
import { ExperienceImage } from "@/components/Images/Images.styled";
export default function TimelineDescriptionItem({
    item,
    inView,
}: {
    item: TimelineItemAttributes;
    inView: boolean;
}) {
    return (
        <Styled.TimelineCard $inView={inView}>
            <Styled.CardHeader>
                <Styled.TimelineIcon>
                    <PlainLinkWrapper href={item.website}>
                        <ExperienceImage
                            src={item.icon}
                            alt="Experience icon"
                            width={50}
                            height={50}
                            priority
                        />
                    </PlainLinkWrapper>
                </Styled.TimelineIcon>
                <Styled.Title>{item.title}</Styled.Title>
            </Styled.CardHeader>
            <Styled.Divider />
            <Styled.CardInfo>
                <Styled.Company>{item.company}</Styled.Company>
                <Styled.Date>{item.date}</Styled.Date>
                <Styled.Location>{item.location}</Styled.Location>
            </Styled.CardInfo>

            {item.responsibilities.length > 0 && <Styled.Divider />}

            <Styled.CardBody>
                <ul>
                    {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                    ))}
                </ul>
            </Styled.CardBody>
        </Styled.TimelineCard>
    );
}
