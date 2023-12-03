import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserData {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  picture: string;
  acceptTC: boolean;
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
    picture: '',
    acceptTC: false,
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
