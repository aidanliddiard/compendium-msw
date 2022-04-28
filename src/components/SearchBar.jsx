import React from 'react';

export default function SearchBar() {
  const handleSearch = async () => {
    console.log('click');
  };
  return (
    <div>
      <input></input>
      <button onClick={handleSearch}>Search Quotes</button>
    </div>
  );
}
