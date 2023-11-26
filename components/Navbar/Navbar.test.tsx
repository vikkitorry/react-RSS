import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, vi, test, describe, beforeEach } from 'vitest';
import { Navbar } from './Navbar';

describe('BugButton', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    const mockRouter = {
      pathname: '/',
      push: vi.fn()
    };
    vi.mock('next/router', () => ({ useRouter: () => mockRouter }));
  });

  test('renders error page', () => {
    render(
    <Navbar />
    );

    expect(screen.getByText('Throw error')).toBeInTheDocument();
  });
});