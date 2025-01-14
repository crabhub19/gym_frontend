import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const url = import.meta.env.VITE_API_URL;
export const fetchCourse = createAsyncThunk(
    'course/fetchCourse',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/app/courses/`);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
   
const courseSlice = createSlice({
    name: 'course',
    initialState: {
        data: [],
        status: 'idle',
        detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCourse.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default courseSlice.reducer;