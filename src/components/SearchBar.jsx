import React from 'react';
import { useState } from 'react';

export default function SearchBar({ setQuery }) {
  const [searching, setSearching] = useState('');

  return (
    <div>
      <input onChange={(e) => setSearching(e.target.value)}></input>
      <button name="searching" onClick={() => setQuery(searching)}>
        Search Quotes
      </button>
    </div>
  );
}
