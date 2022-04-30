import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Should display a input and search button', async () => {
    render(<SearchBar />);

    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');

    expect(input).toBeInTheDocument();
    expect(button.textContent).toEqual('Search Quotes');
  });
});
