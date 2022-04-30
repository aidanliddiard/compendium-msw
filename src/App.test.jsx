import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import userEvent from '@testing-library/user-event';

global.fetch = fetch;

const fakeQuotes = [
  {
    character: 'Aidan',
    quote: 'I love testing so much lol',
    image:
      'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
  },
  {
    character: 'Aidan',
    quote: 'Testing is so fun!',
    image:
      'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
  },
];

const server = setupServer(
  rest.get('https://futuramaapi.herokuapp.com/api/quotes', (req, res, ctx) => {
    const fakeSearch = req.url.searchParams.get('search');
    if (fakeSearch) {
      return res(ctx.json([fakeQuotes[0]]));
    }
    return res(ctx.json(fakeQuotes));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  it('Should render the title and images and quotes', async () => {
    render(<App />);
    screen.getByText('Loading...');

    screen.getByText('Futurama Compendium');

    const images = await screen.findAllByRole('img');
    const quoteOne = await screen.findByText(fakeQuotes[0].quote);

    expect(images.length).toEqual(2);
    expect(quoteOne).toHaveTextContent(/I love testing so much lol/i);

    const search = screen.getByPlaceholderText('Search quotes...');
    expect(search).toBeInTheDocument();

    userEvent.type(search, 'much');
    expect(search.value).toBe('much');

    userEvent.click(screen.getByRole('button'));

    return waitFor(
      () => {
        const result = screen.getAllByRole('heading', { level: 3 });
        expect(result.length).toEqual(1);
      },
      { timeout: 5000 }
    );
  });
});
