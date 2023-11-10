import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../app/App';
import { describe, test, expect } from 'vitest';

describe('Not Found Page (404)', () => {
  window.history.pushState({}, '404 page', '/something');

  test('404 page is displayed when navigating to an invalid route', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });

    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
