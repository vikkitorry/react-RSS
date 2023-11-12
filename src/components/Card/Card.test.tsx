import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import { expect, vi, test, describe, beforeEach } from 'vitest';

describe('Card', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockCardData = {
    id: 1,
    title: 'title',
    status: 'status',
    totalSeasons: 2,
    rating: 3,
  };

  const mocks = vi.hoisted(() => {
    return {
      mockGetShow: vi.fn(),
    };
  });

  vi.mock('../../app/services/getShow', () => {
    return {
      mockGetShow: mocks.mockGetShow,
    };
  });

  test('card component renders the relevant card data', () => {
    render(<Card cardData={mockCardData} setSearchParams={vi.fn()} />);

    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
    expect(screen.getByText(mockCardData.status)).toBeInTheDocument();
    expect(screen.getByText(mockCardData.totalSeasons)).toBeInTheDocument();
    expect(screen.getByText(`${mockCardData.rating} / 5`)).toBeInTheDocument();
  });

  test('that clicking on a card opens a detailed card component', async () => {
    render(<Card cardData={mockCardData} setSearchParams={vi.fn()} />);

    await act(() => {
      const btn = screen.getByTestId('card');

      fireEvent.click(btn);
    });

    await (() => {
      expect(screen.getByTestId('detailedCard')).toBeInTheDocument();
    });
  });

  test('clicking triggers an additional API call to fetch detailed information', async () => {
    render(<Card cardData={mockCardData} setSearchParams={vi.fn()} />);

    await act(() => {
      const btn = screen.getByTestId('card');

      fireEvent.click(btn);
    });

    await (() => {
      expect(mocks).toHaveBeenCalled();
    });
  });
});
