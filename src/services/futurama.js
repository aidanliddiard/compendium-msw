export default async function getQuotes() {
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await resp.json();
  return data;
}

export async function searchQuotes(query) {
  const resp = await fetch(
    `https://futuramaapi.herokuapp.com/api/quotes?search=${query}`
  );
  const data = await resp.json();
  return data;
}
