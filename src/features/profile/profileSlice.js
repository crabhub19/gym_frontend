import api from '../../api/api';
// import axios from 'axios';
import { setLoading } from '../loading/loadingSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// const url = import.meta.env.VITE_API_URL;

// Async thunk to fetch user profile
export const fetchUserProfile = createAsyncThunk(
    'profile/fetchUserProfile',
    async (_, { rejectWithValue,dispatch }) => {
      dispatch(setLoading(true));
      try {
        const response = await api.get("/account/profile/me");          
        return response.data;
          
        } catch (error) {
          return rejectWithValue(error.response.data);
        }finally { dispatch(setLoading(false)); }
  }
  );

// Async thunk to update user profile
export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (profileData, { rejectWithValue, dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await api.patch('/account/profile/me/', profileData,{
        headers: {
          'Content-Type': '',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred while updating the profile.');
    } finally {
      dispatch(setLoading(false));
    }
  }
);


  // Profile slice
const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      data: null,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserProfile.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUserProfile.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchUserProfile.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload.detail;
        });

      builder
        .addCase(updateUserProfile.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload.detail;
        });
    },
  });
  
  export default profileSlice.reducer;