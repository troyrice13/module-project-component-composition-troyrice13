import React from "react";

export default function Card({ title, text, imageUrl, date }) {
    return(
    <div className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <figure>
        <img src={imageUrl} />
        <figcaption>Picture taken on {date}</figcaption>
      </figure>
    </div>
)}