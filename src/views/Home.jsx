import React from 'react';
import { useState, useEffect } from 'react';
import getQuotes from '../services/futurama';

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  //const [loading, setLoading] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuotes();
      setQuotes(data);
    };
    fetchData();
  }, []);

  return <div>Home</div>;
}
