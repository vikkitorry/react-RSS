import { CardsList } from './CardsList';
import { it, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Context } from '../../CardsHandler/CardsHandler';

describe('CardsList', () => {
  it('displays an appropriate message if no cards are present', () => {
    const mockContextValue = {
      shows: null,
      search: '',
    };

    const mockSetSearchParams = vi.fn();

    render(
      <Context.Provider value={mockContextValue}>
        <CardsList setSearchParams={mockSetSearchParams} />
      </Context.Provider>
    );

    const expectedText = 'There is nothing';

    const value = screen.getByText(expectedText);

    expect(value).toHaveTextContent(expectedText);
  });

  it('renders the specified number of cards', () => {
    const mockContextValue = {
      shows: [
        { id: 1, title: 'Show 1' },
        { id: 2, title: 'Show 2' },
      ],
      search: '',
    };

    const mockSetSearchParams = vi.fn();

    render(
      <Context.Provider value={mockContextValue}>
        <CardsList setSearchParams={mockSetSearchParams} />
      </Context.Provider>
    );

    const parent = screen.getByTestId('grid');

    expect(parent.children.length).toBe(2);
  });
});
