import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { defaultPageSize } from '@/src/services/variables/variables';

interface IShowsState {
  numOfShows: number;
}

const initialState: IShowsState = {
  numOfShows: defaultPageSize,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setNumOfShows(state, action: PayloadAction<number>) {
      state.numOfShows = action.payload;
    },
  },
});

export default showsSlice.reducer;
