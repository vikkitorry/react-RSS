import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Error Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders without bugs', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    expect(screen.getByText('You should reload page')).toBeInTheDocument();
  });
});
