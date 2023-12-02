import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IViewState {
  showId: number | null;
}

const initialState: IViewState = {
  showId: null,
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setShowId(state, action: PayloadAction<number | null>) {
      state.showId = action.payload;
    },
  },
});

export default viewSlice.reducer;
