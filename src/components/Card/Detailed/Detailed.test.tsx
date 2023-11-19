import React from 'react';
import { screen, act, fireEvent } from '@testing-library/react';
import { DetailedCard } from './Detailed';
import { expect, vi, test, describe, beforeEach, beforeAll } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/helpers/test/test-utils';
import { service } from '../../../app/services/service';

describe('Detailed', () => {
  beforeEach(() => {
    vi.clearAllTimers();
    vi.clearAllMocks();
  });

  beforeAll(async () => {
    vi.spyOn(service, 'useGetPageDataQuery').mockReturnValue({
      data: mockCardData,
      isLoading: true,
      refetch: vi.fn(),
    });
  });

  const mockCardData = {
    id: 1,
    title: 'title',
    status: 'status',
    country: 'country',
    started: 'started',
    ended: 'ended',
    year: 2000,
    kinopoiskRating: 5,
    imdbRating: 6,
  };

  vi.mock('../../../app/services/getShow', () => ({
    getShow: vi.fn().mockResolvedValue(setTimeout(() => mockCardData, 1000)),
  }));

  test('detailed card component correctly displays the detailed card data', async () => {
    await act(async () => {
      renderWithProviders(
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>,
        {
          preloadedState: {
            loadReducer: { isDetaledLoad: false, isListLoad: false },
            viewReducer: { showId: 1 },
          },
        }
      );
    });

    await (() => {
      expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.status)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.country)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.started)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.ended)).toBeInTheDocument();
      expect(screen.getByText(mockCardData.year)).toBeInTheDocument();
      expect(
        screen.getByText(mockCardData.kinopoiskRating)
      ).toBeInTheDocument();
      expect(screen.getByText(mockCardData.imdbRating)).toBeInTheDocument();
    });
  });

  test('clicking the close button hides the component', async () => {
    await act(async () => {
      renderWithProviders(
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>,
        {
          preloadedState: {
            loadReducer: { isDetaledLoad: false, isListLoad: false },
            viewReducer: { showId: 1 },
          },
        }
      );
    });

    const closeButton = screen.getByText<HTMLButtonElement>('X');

    await act(async () => {
      fireEvent.click(closeButton);
    });

    await (() => {
      expect(screen.getByTestId('detailedCard')).not.toBeInTheDocument();
    });
  });

  test('displays loading indicator while fetching data', async () => {
    const wrapper = renderWithProviders(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>,
      {
        preloadedState: {
          loadReducer: { isDetaledLoad: false, isListLoad: false },
          viewReducer: { showId: 1 },
        },
      }
    );

    expect(wrapper.getByTestId('loader')).toBeInTheDocument();

    await (() => {
      expect(screen.getByTestId('detailedCard')).toBeInTheDocument();
    });
  });

  test('updates URL query parameter when close detailed card', async () => {
    const initialPage = 3;

    vi.mock('react-router-dom', async () => {
      const mod = (await vi.importActual('react-router-dom')) as object;
      return {
        ...mod,
        useParams: () => ({
          page: initialPage,
          show: 1,
        }),
      };
    });

    renderWithProviders(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>,
      {
        preloadedState: {
          loadReducer: { isDetaledLoad: false, isListLoad: false },
          viewReducer: { showId: 1 },
        },
      }
    );
    const closeButton = screen.getByText<HTMLButtonElement>('X');

    await act(async () => {
      fireEvent.click(closeButton);
    });

    await (() => {
      expect(location.search).toBe(`?page=${initialPage}`);
    });
  });

  test('error ocured while fetch data', async () => {
    vi.spyOn(service, 'useGetPageDataQuery').mockReturnValue({
      data: undefined,
      isLoading: true,
      refetch: vi.fn(),
    });

    renderWithProviders(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>,
      {
        preloadedState: {
          loadReducer: { isDetaledLoad: false, isListLoad: false },
          viewReducer: { showId: 1 },
        },
      }
    );

    await (() => {
      expect(screen.getByTestId('detailedCard')).toBeInTheDocument();
    });
  });
});
