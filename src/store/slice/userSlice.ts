import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../api/api';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({
          error: 'Произошла ошибка при получении данных',
        });
      }
    }
  },
);
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
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.price = action.payload[0].price;
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.error('Error fetching data:', action.payload);
      state.isLoading = false;
    });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
