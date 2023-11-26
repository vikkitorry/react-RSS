import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BugButton } from './BugButton';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

describe('BugButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    const mockRouter = {
      pathname: '/',
      push: vi.fn(),
    };
    vi.mock('next/router', () => ({ useRouter: () => mockRouter }));
  });

  test('renders error page', () => {
    render(
      <ErrorBoundary>
        <BugButton />
      </ErrorBoundary>
    );

    const btn = screen.getByText('Throw error');
    fireEvent.click(btn);

    expect(screen.getByText('You should reload page')).toBeInTheDocument();
  });
});
