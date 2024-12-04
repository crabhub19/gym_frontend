import api from '../../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const changePassword = createAsyncThunk(
    'profile/changePassword',
    async (passwordData, { rejectWithValue}) => {
      try {
        const response = await api.post('/account/users/changePassword/', passwordData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred while changing the password.');
      }
    }
  )
  

const userSlice = createSlice({
    name: 'user',
    initialState: {
      data: null,
      status: 'idle',
      detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(changePassword.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(changePassword.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(changePassword.rejected, (state, action) => {
          state.status = 'failed';
          state.detail = action.payload.detail;
        });
      }
    });

export default userSlice.reducer;