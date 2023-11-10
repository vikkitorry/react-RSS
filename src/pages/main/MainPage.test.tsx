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
  });
});
