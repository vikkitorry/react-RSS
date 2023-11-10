import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader, LoaderTheme } from './Loader';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Loader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders without bugs', () => {
    render(
      <BrowserRouter>
        <Loader color={LoaderTheme.BACKGROUND_DARK} />
      </BrowserRouter>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
