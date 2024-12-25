import api from '../../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await api.get(`/account/post/?page=${page}`);
      return response.data; // Assuming API returns { results: [], count: total_count, next: next_url, previous: prev_url }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addPost = createAsyncThunk(
    'post/addPost',
    async ({postData,config}, { rejectWithValue }) => {
      try {
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
      next: null, // URL for the next page
      previous: null, // URL for the previous page
      count: 0, // Total number of posts
    },
    reducers: {
      updatePostLikeStatus: (state, action) => {
        const  id  = action.payload;
        const post = state.data.find((p) => p.id === id);
        if (post) {
          post.is_liked = !post.is_liked;
          post.like_count += post.is_liked ? 1 : -1;
        }
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
          const newPosts = action.payload.results.filter(
              (newPost) => !state.data.some((existingPost) => existingPost.id === newPost.id)
          );
            state.data = [...state.data,...newPosts]; // Append new posts
            state.next = action.payload.next; // Next page URL
            state.previous = action.payload.previous; // Previous page URL
            state.count = action.payload.count; // Total posts count
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
export const { updatePostLikeStatus } = postSlice.actions;
export default postSlice.reducer;