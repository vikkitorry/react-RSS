import { CardsList } from './CardsList';
import { it, describe, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('CardsList', () => {
  it('displays an appropriate message if no cards are present', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    vi.mock('next/router', () => ({
      useRouter: () => ({
        route: '/',
        pathname: '',
        query: '',
        push: vi.fn(),
      }),
    }));

    render(<CardsList shows={undefined} />);

    const expectedText = 'Not found';

    const value = screen.getByText(expectedText);

    expect(value).toHaveTextContent(expectedText);
  });

  it('renders the specified number of cards', () => {
    const mockShows = [
      { id: 1, title: 'Show 1' },
      { id: 2, title: 'Show 2' },
    ];

    render(<CardsList shows={mockShows} />);

    const parent = screen.getByTestId('grid');

    expect(parent.children.length).toBe(2);
  });
});
