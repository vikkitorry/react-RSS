import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { AppStore, RootState } from '../../../store/store';
import viewReducer from '../../../store/reducers/ViewSlice';
import loadReducer from '../../../store/reducers/LoadSlice';
import searchReducer from '../../../store/reducers/SearchSlice';
import showsReducer from '../../../store/reducers/ShowsSlice';
import { service } from '../../../app/services/service';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        loadReducer,
        searchReducer,
        showsReducer,
        viewReducer,
        [service.reducerPath]: service.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(service.middleware),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
