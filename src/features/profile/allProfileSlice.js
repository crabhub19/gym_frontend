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
      anotherUserProfile:null,
      data: [],
      status: 'idle',
      detail: null,
    },
    reducers: {
      fetchAnotherUserProfile: (state, action) => {
        const id = action.payload;
        const profile = state.data.find((user) => user.id === id);
        if (profile) {
          state.anotherUserProfile = profile;
        } else {
          state.anotherUserProfile = null; // Reset if no matching profile is found
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllProfile.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllProfile.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
          state.detail = action.payload.detail;
        })
        .addCase(fetchAllProfile.rejected, (state, action) => {
          state.status = 'failed';
          state.detail = action.payload.detail;
      })
    },
  });

  export const { fetchAnotherUserProfile } = allProfileSlice.actions;
  export default allProfileSlice.reducer;