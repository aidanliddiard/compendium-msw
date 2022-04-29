import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const fakeQuote = {
  quote: 'I love testing so much lol',
  img: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
};

const server = setupServer(
  rest.get('https://futuramaapi.herokuapp.com/api/quotes', (req, res, ctx) =>
    res(ctx.json([fakeQuote]))
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('App', () => {
  it('Should render the title', async () => {
    render(<App />);
    screen.getByText('Loading...');

    await screen.findByText('Futurama Compendium');

    await screen.findByRole('img');
    await screen.findByText(fakeQuote.quote);
  });
});
