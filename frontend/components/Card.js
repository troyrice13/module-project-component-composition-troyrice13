import React from "react";
import styled from "styled-components";
import Figure from "./Figure";

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 2rem;

  h2 {
    color: ${pr => pr.$color};
    font-size: 2.5em;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1.5rem 0;

    &::first-line {
      font-size: 1.5em
    }
  }

  img, iframe {
    width: 100%;
    border-radius: 8px;
  }
`;

export default function Card({ title, text, imageUrl, author, date }) {
  // Check if the imageUrl is a YouTube video
  const isVideo = imageUrl.includes("youtube.com") || imageUrl.includes("youtu.be");

  return (
    <StyledCard $color ='lightblue' className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure image={imageUrl} author={author} date={date} />
    </StyledCard>
  );
}