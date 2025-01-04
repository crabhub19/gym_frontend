import api from '../../api/api';
// import axios from 'axios';
import { setLoading } from '../loading/loadingSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch user profile
export const fetchAllProfile = createAsyncThunk(
    'allProfile/fetchAllProfile',
    async (page = 1, { rejectWithValue }) => {  
      try {
        const response = await api.get(`/account/profile/?page=${page}`);          
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
      next: null, // URL for the next page
      previous: null, // URL for the previous page
      count: 0, // Total number of posts
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
          const newProfiles = action.payload.results.filter(
            (profile) => !state.data.some((user) => user.id === profile.id)
          );
          state.data = [...state.data, ...newProfiles];
          state.next = action.payload.next;
          state.previous = action.payload.previous;
          state.count = action.payload.count;
          state.status = 'succeeded';
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