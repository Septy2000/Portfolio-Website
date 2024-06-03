import React from "react";
import { TimelineItemAttributes } from "../ExperienceSection";
import * as Styled from "./TimelineDescriptionItem.styled";
export default function TimelineDescriptionItem({
    attributes,
    index,
}: {
    attributes: TimelineItemAttributes;
    index: number;
}) {
    return (
        <Styled.Container $index={index}>
            <Styled.Title>{attributes.title}</Styled.Title>
            <Styled.Divider />
            <Styled.Company>{attributes.company}</Styled.Company>
            <Styled.Date>{attributes.date}</Styled.Date>
            <Styled.Location>{attributes.location}</Styled.Location>
            <Styled.Divider />
            <Styled.Responsibilities>
                {attributes.responsibilities.map((responsibility, id) => (
                    <li key={id}>{responsibility}</li>
                ))}
            </Styled.Responsibilities>
        </Styled.Container>
    );
}
