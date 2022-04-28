import React from 'react';
import { useState, useEffect } from 'react';
import getQuotes, { searchQuotes } from '../services/futurama';
import QuoteCard from '../components/QuoteCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getQuotes();
        setQuotes(data);
        const searchData = await searchQuotes(query);
        setQuotes(searchData);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;
  //console.log(query);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {quotes.map((quote) => (
        <QuoteCard key={quote.quote} {...quote} />
      ))}
    </div>
  );
}
