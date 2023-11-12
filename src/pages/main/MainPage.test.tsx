import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from './MainPage';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('MainPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders without bugs', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  test('updates URL query parameter when detailed card was opened', async () => {
    const initialPage = 3;

    vi.mock('react-router-dom', async () => {
      const mod = (await vi.importActual('react-router-dom')) as object;
      return {
        ...mod,
        useParams: () => ({
          page: initialPage,
          show: 1,
        }),
      };
    });

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    await (() => {
      expect(location.search).toBe(`?page=${initialPage}&show=1`);
    });
  });
});
