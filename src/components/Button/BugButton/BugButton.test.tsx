import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BugButton } from './BugButton';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

describe('BugButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  console.log = vi.fn();
  console.error = vi.fn();

  test('renders without bugs', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <BugButton />
        </ErrorBoundary>
      </BrowserRouter>
    );

    const btn = screen.getByText('Throw error');
    fireEvent.click(btn);

    expect(screen.getByText('You should reload page')).toBeInTheDocument();
  });
});
