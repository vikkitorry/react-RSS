import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from './DataSlice';

interface IData {
  uncontrolledData: IUserData[];
  uncontrolledLastData: IUserData;
}

const initialState: IData = {
  uncontrolledData: [],
  uncontrolledLastData: {
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

export const uncontrolledDataSlice = createSlice({
  name: 'uncontrolledData',
  initialState,
  reducers: {
    setNewData(state, { payload }: PayloadAction<IUserData>) {
      state.uncontrolledLastData = payload;
    },
    setUpdateData(state) {
      state.uncontrolledData.push(state.uncontrolledLastData);
    },
  },
});

export default uncontrolledDataSlice.reducer;
