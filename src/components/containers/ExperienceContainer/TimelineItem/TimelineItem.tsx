import React from "react";
import { TimelineItemAttributes } from "../ExperienceContainer";
import * as Styled from "./TimelineItem.styled";
export default function TimelineItem({
    attributes,
}: {
    attributes: TimelineItemAttributes;
}) {
    return (
        <Styled.Container>
            <h2>{attributes.title}</h2>
            <h4>{attributes.location}</h4>
            <p>{attributes.description}</p>
        </Styled.Container>
    );
}
