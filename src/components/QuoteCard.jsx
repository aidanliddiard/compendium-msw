import React from 'react';

export default function QuoteCard({ quote, image, character }) {
  return (
    <div>
      <h3>{character}</h3>
      <p>{quote}</p>
      <img src={image} />
    </div>
  );
}
