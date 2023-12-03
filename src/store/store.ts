import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers/CountrySlice';
import dataReducer from './reducers/DataSlice';

const rootReducer = combineReducers({
  countryReducer,
  dataReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
