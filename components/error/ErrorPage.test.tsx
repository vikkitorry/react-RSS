import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';
import { expect, vi, test, describe, beforeEach } from 'vitest';

describe('Error Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  vi.mock('next/router', () => ({
    useRouter: () => ({
      route: '/',
      pathname: '',
      query: '',
      push: vi.fn(),
    }),
  }));

  test('renders without bugs', () => {
    render(<ErrorPage />);

    expect(screen.getByText('You should reload page')).toBeInTheDocument();
  });
});
