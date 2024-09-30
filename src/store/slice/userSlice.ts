import { createSlice } from '@reduxjs/toolkit';


interface IInitialState {
  price: number;
  isLoading: boolean;
}

const initialState: IInitialState = {
  price: 50,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

export default userSlice.reducer;
