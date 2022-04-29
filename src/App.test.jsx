import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the title', async () => {
    render(<App />);
    screen.getByText('Loading...');

    await screen.findByText('Futurama Compendium');

    await screen.findAllByRole('img');
  });
});
