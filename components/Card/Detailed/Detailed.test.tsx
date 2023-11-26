import React from 'react';
import { describe, expect, test, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { DetailedCard } from './Detailed';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Tests for the Pagination component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockCardData = {
    id: 1,
    title: 'title',
    status: 'status',
    country: 'country',
    started: 'started',
    ended: 'ended',
    year: 2000,
    kinopoiskRating: 5,
    imdbRating: 6,
  };

  test('check URL while mount component', async () => {
    mockRouter.push('/?query=test&page=1&limit=30&show=11');
    render(<DetailedCard data={mockCardData} />, {
      wrapper: MemoryRouterProvider,
    });
    expect(mockRouter.asPath).toBe('/?query=test&page=1&limit=30&show=11');
    cleanup();
  });

  test('clicking the close button hides the component', async () => {
    mockRouter.push('/?query=test&page=1&limit=30&show=11');
    render(<DetailedCard data={mockCardData} />, {
      wrapper: MemoryRouterProvider,
    });

    const button = screen.getByTestId('detailed-btn');
    fireEvent.click(button);

    expect(mockRouter.asPath).toBe('/?query=test&page=1&limit=30');
    cleanup();
  });
});
