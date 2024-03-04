import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure `
    max-width: 300px;

    figcaption {
        font-style: italic;
    }
`

export default function Figure({image, date, author}) {
    return (
        <StyledFigure>
            <img src={image} />
            <figcaption>
                The photo of the day by {author} on {date}
            </figcaption>
        </StyledFigure>
    )
}