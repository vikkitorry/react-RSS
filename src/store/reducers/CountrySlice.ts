import { createSlice } from '@reduxjs/toolkit';
import { initialStateContries } from '../../utils/constants/Constants';

export interface ICountryState {
  countries: string[];
}

export const countrySlice = createSlice({
  name: 'country',
  initialState: initialStateContries,
  reducers: {},
});

export default countrySlice.reducer;
