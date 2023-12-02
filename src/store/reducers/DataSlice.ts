import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserData {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  country: string;
}

interface IData {
  data: IUserData[];
  lastData: IUserData;
}

const initialState: IData = {
  data: [],
  lastData: {
    name: '',
    age: '',
    email: '',
    password: '',
    gender: '',
    country: '',
  },
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setNewData(state, { payload }: PayloadAction<IUserData>) {
      state.lastData = payload;
    },
    setUpdateData(state) {
      state.data.push(state.lastData);
    },
  },
});

export default dataSlice.reducer;
