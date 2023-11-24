import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { describe, beforeEach, expect, vi, test } from 'vitest';
import { SearchBar } from './SearchBar';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { MemoryRouter } from 'react-router';
import { renderWithProviders } from '../../utils/helpers/test/test-utils';

describe('SearchBar', () => {
  const mock = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  test('clicking the Search button saves the entered value to local storage', async () => {
    renderWithProviders(
      <MemoryRouter>
        <SearchBar setSearchParams={mock} />
      </MemoryRouter>,
      {
        preloadedState: {
          searchReducer: { search: '' },
          showsReducer: { numOfShows: 30 },
        },
      }
    );

    const inputElement = screen.getByTestId<HTMLInputElement>('input');

    await act(async () => {
      await userEvent.type(inputElement, 'Test Show');

      inputElement.blur();
    });

    const searchButton = screen.getByTestId('btn');

    fireEvent.click(searchButton);

    expect(localStorage.getItem(SEARCH_LOCALSTORAGE_KEY)).toBe('Test Show');
  });

  test('component retrieves value from local storage upon mounting', async () => {
    renderWithProviders(
      <MemoryRouter>
        <SearchBar setSearchParams={mock} />
      </MemoryRouter>,
      {
        preloadedState: {
          searchReducer: { search: 'Test Value' },
          showsReducer: { numOfShows: 30 },
        },
      }
    );

    let inputElement = screen.getByTestId<HTMLInputElement>('input');

    await act(async () => {
      inputElement = await screen.getByTestId<HTMLInputElement>('input');
    });

    expect(inputElement.value).toBe('Test Value');
  });
});
