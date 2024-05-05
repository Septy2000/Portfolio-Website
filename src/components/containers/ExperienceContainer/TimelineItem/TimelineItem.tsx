import React from "react";
import { TimelineItemAttributes } from "../ExperienceContainer";
import * as Styled from "./TimelineItem.styled";
export default function TimelineItem({
    attributes,
    index,
}: {
    attributes: TimelineItemAttributes;
    index: number;
}) {
    return (
        <React.Fragment>
            {index % 2 === 1 ? (
                <Styled.ContainerRight>
                    <h2>{attributes.title}</h2>
                    <h4>{attributes.location}</h4>
                    <p>{attributes.description}</p>
                </Styled.ContainerRight>
            ) : (
                <Styled.ContainerLeft>
                    <h2>{attributes.title}</h2>
                    <h4>{attributes.location}</h4>
                    <p>{attributes.description}</p>
                </Styled.ContainerLeft>
            )}
        </React.Fragment>
    );
}
