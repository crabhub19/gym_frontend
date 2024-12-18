import api from '../../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.get("/account/post/");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

export const addPost = createAsyncThunk(
    'post/addPost',
    async ({postData,config}, { rejectWithValue }) => {
      try {
        console.log("config",config);
        const response = await api.post("/account/post/", postData,config);
        
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const postSlice = createSlice({  
    name: 'post',
    initialState: {
      data: [],
      status: 'idle',
      detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'succeeded';
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.detail = action.payload;
          })
          .addCase(addPost.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addPost.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.status = 'succeeded';
          })
          .addCase(addPost.rejected, (state, action) => {
            state.status = 'failed';
            state.detail = action.payload;
          })
      },
  });

export default postSlice.reducer;