import React from 'react';
import { useState, useEffect } from 'react';
import getQuotes from '../services/futurama';
import QuoteCard from '../components/QuoteCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getQuotes();
        setQuotes(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <SearchBar />
      {quotes.map((quote) => (
        <QuoteCard key={quote.quote} {...quote} />
      ))}
    </div>
  );
}
