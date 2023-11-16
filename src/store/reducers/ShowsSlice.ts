import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShowSchema } from '../../app/services/types/serviceTypes';
import { defaultPageSize } from '../../app/services/variables/variables';

interface IShowsState {
  shows: ShowSchema[] | null;
  numOfShows: number;
}

const initialState: IShowsState = {
  shows: null,
  numOfShows: defaultPageSize,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setShows(state, action: PayloadAction<ShowSchema[] | null>) {
      state.shows = action.payload;
    },
    setNumOfShows(state, action: PayloadAction<number>) {
      state.numOfShows = action.payload;
    },
  },
});

export default showsSlice.reducer;
