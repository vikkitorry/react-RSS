import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShowSchema } from '../../app/services/types/serviceTypes';

interface IShowsState {
  shows: ShowSchema[] | null;
}

const initialState: IShowsState = {
  shows: null,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setShows(state, action: PayloadAction<ShowSchema[] | null>) {
      state.shows = action.payload;
    },
  },
});

export default showsSlice.reducer;
