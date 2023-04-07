import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './postsOperations';

const initialPostsState = { entities: [], isLoading: false, error: null };

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(createPost.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: [action.payload, ...state.entities],
        };
      })
      .addCase(createPost.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const postsReducer = postsSlice.reducer;
