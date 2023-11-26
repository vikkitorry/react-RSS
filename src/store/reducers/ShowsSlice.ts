import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  ShowSchema,
  DetailedShowSchema,
} from '@/src/services/types/serviceTypes';

interface IShowsState {
  allShows: ShowSchema[] | null;
  show: DetailedShowSchema | null;
}

const initialState: IShowsState = {
  allShows: null,
  show: null,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setAllShows(state, action: PayloadAction<ShowSchema[] | null>) {
      state.allShows = action.payload;
    },
    setShow(state, action: PayloadAction<DetailedShowSchema | null>) {
      state.show = action.payload;
    },
  },
});

export default showsSlice.reducer;
