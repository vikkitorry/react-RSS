import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';

interface ISearchState {
  search: string;
}

const initialState: ISearchState = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export default searchSlice.reducer;
