import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum typeOfForm {
  controlled = 'controlled',
  uncontrolled = 'uncontrolled',
}

export interface IUserData {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  picture: string;
  acceptTC: boolean;
  typeOfForm: typeOfForm;
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
    typeOfForm: typeOfForm.controlled,
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
