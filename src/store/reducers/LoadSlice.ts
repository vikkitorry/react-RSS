import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ILoadingState {
  isDetaledLoad: boolean;
  isListLoad: boolean;
}

const initialState: ILoadingState = {
  isDetaledLoad: false,
  isListLoad: false,
};

export const loadSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setisDetaledLoad(state, action: PayloadAction<boolean>) {
      state.isDetaledLoad = action.payload;
    },
    setisListLoad(state, action: PayloadAction<boolean>) {
      state.isListLoad = action.payload;
    },
  },
});

export default loadSlice.reducer;
