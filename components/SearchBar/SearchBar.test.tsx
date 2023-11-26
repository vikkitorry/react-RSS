import React from 'react';
import { describe, expect, test, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, cleanup, act } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { SearchBar } from './SearchBar';
import userEvent from '@testing-library/user-event';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Tests for the Pagination component', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('updates URL query parameter while submit', async () => {
    mockRouter.push('/?query=undefined&page=4&limit=30');
    render(
      <SearchBar />,
      {
        wrapper: MemoryRouterProvider,
      }
    );

    const inputElement = screen.getByTestId<HTMLInputElement>('input');

    await act(async () => {
    await userEvent.type(inputElement, 'test');
      inputElement.blur();
    });

    const searchButton = screen.getByTestId('btn');
    fireEvent.click(searchButton);

    expect(mockRouter.asPath).toBe('/?query=test&page=1&limit=30');
    cleanup();
  })
});

