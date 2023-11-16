import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadReducer from './reducers/LoadSlice';
import searchReducer from './reducers/SearchSlice';

const rootReducer = combineReducers({
  loadReducer,
  searchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
