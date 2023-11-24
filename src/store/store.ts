import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadReducer from './reducers/LoadSlice';
import searchReducer from './reducers/SearchSlice';
import showsReducer from './reducers/ShowsSlice';
import viewReducer from './reducers/ViewSlice';
import { service } from '../services/service';

const rootReducer = combineReducers({
  loadReducer,
  searchReducer,
  showsReducer,
  viewReducer,
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
