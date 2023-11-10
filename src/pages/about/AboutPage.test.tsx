import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutPage } from './AboutPage';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('AboutPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders without bugs', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );

    expect(screen.getByText('About page')).toBeInTheDocument();
  });
});
