import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Pagination', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('updates URL query parameter when page changes', () => {
    const initialPage = 3;

    vi.mock('react-router-dom', async () => {
      const mod = (await vi.importActual('react-router-dom')) as object;
      return {
        ...mod,
        useParams: () => ({
          page: initialPage,
        }),
      };
    });

    render(
      <BrowserRouter>
        <Pagination page={initialPage} />
      </BrowserRouter>
    );

    const prevButton = screen.getByTestId('prev-btn');
    fireEvent.click(prevButton);

    expect(location.search).toBe(`?page=${initialPage - 1}`);
  });
});
