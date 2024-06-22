import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface IUserState {
//   // id: string;
//   name: string;
//   // email: string;
// }

const initialState = {
  // id: '',
  name: '',
  // email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setUser: (state, action: PayloadAction<IUserState>) => {
    //   // state.id = action.payload.id;
    //   state.name = action.payload.name;
    //   // state.email = action.payload.email;
    // },
    clearUser: (state) => {
      // state.id = '';
      state.name = '';
      // state.email = '';
    },
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
