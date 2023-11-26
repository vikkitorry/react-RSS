import { combineReducers, configureStore } from '@reduxjs/toolkit';
import showsReducer from './reducers/ShowsSlice';
import { service } from '../services/service';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  showsReducer,
  [service.reducerPath]: service.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(service.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(setupStore, { debug: false });
