import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IViewState {
  page: number;
  detailed: string;
}

const initialState: IViewState = {
  page: 1,
  detailed: '1',
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeDetailed(state, action: PayloadAction<string>) {
      state.detailed = action.payload;
    },
  },
});

export default viewSlice.reducer;
