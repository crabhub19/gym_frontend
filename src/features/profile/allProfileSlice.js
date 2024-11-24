import api from '../../api/api';
// import axios from 'axios';
import { setLoading } from '../loading/loadingSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch user profile
export const fetchAllProfile = createAsyncThunk(
    'allProfile/fetchAllProfile',
    async (_, { rejectWithValue }) => {  
      try {
        const response = await api.get("/account/profile");          
        return response.data;
          
        } catch (error) {
          return rejectWithValue(error.response.data);
        }     
  }
  );


const allProfileSlice = createSlice({
    name: 'allProfile',
    initialState: {
      data: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllProfile.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllProfile.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchAllProfile.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload.detail;
      })
    },
  });

  export default allProfileSlice.reducer;