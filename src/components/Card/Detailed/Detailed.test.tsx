import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { DetailedCard } from './Detailed';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Detailed', () => {
  beforeEach(() => {
    vi.clearAllTimers();
    vi.clearAllMocks();
  });

  const mockCardData = {
    id: 1,
    title: 'title',
    status: 'status',
    country: 'country',
    started: 'started',
    ended: 'ended',
    year: 1000,
    kinopoiskRating: 5,
    imdbRating: 6,
  };

  vi.mock('../../../app/services/getShow', () => ({
    getShow: vi.fn().mockResolvedValue(setTimeout(() => mockCardData, 1000)),
  }));

  test('detailed card component correctly displays the detailed card data', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>
      );
    });

    await (() => {
      expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.status)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.country)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.started)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.ended)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.year)).toBeInTheDocument();
      expect(
        screen.getByText(mockCardData.kinopoiskRating)
      ).toBeInTheDocument();
      expect(screen.getByText(mockCardData.imdbRating)).toBeInTheDocument();
    });
  });

  test('clicking the close button hides the component', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>
      );
    });

    const closeButton = screen.getByText<HTMLButtonElement>('X');

    await act(async () => {
      fireEvent.click(closeButton);
    });

    await (() => {
      expect(screen.getByTestId('detailedCard')).not.toBeInTheDocument();
    });
  });

  test('displays loading indicator while fetching data', async () => {
    const wrapper = render(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>
    );

    expect(wrapper.getByTestId('loader')).toBeInTheDocument();

    await (() => {
      expect(screen.getByTestId('detailedCard')).toBeInTheDocument();
    });
  });
});
