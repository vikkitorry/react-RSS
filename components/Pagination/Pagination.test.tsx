import React from 'react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { Pagination } from './Pagination';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Tests for the Pagination component', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('updates URL query parameter when click prev button', async () => {
    mockRouter.push('/?query=undefined&page=4&limit=30');
    render(
      <Pagination />,
      {
        wrapper: MemoryRouterProvider,
      }
    );

    const prevButton = screen.getByTestId('prev-btn');
    fireEvent.click(prevButton);

    expect(mockRouter.asPath).toBe('/?query=undefined&page=3&limit=30');
    cleanup();
  })

  it('updates URL query parameter when click next button', async () => {
    mockRouter.push('/?query=undefined&page=4&limit=30');
    render(
      <Pagination />,
      {
        wrapper: MemoryRouterProvider,
      }
    );

    const prevButton = screen.getByTestId('next-btn');
    fireEvent.click(prevButton);

    expect(mockRouter.asPath).toBe('/?query=undefined&page=5&limit=30');
    cleanup();
  })
});
