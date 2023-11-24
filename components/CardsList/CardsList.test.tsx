import { CardsList } from './CardsList';
import { it, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('CardsList', () => {
  it('displays an appropriate message if no cards are present', () => {
    const mockSetSearchParams = vi.fn();

    render(
      <CardsList setSearchParams={mockSetSearchParams} shows={undefined} />
    );

    const expectedText = 'There is nothing';

    const value = screen.getByText(expectedText);

    expect(value).toHaveTextContent(expectedText);
  });

  it('renders the specified number of cards', () => {
    const mockShows = [
      { id: 1, title: 'Show 1' },
      { id: 2, title: 'Show 2' },
    ];

    const mockSetSearchParams = vi.fn();

    render(
      <CardsList setSearchParams={mockSetSearchParams} shows={mockShows} />
    );

    const parent = screen.getByTestId('grid');

    expect(parent.children.length).toBe(2);
  });
});
