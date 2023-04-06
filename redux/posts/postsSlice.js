import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {
    createPost: {
      reducer(state, action) {
        return [action.payload, ...state];
      },
      prepare({ imageURI, title, location }) {
        return {
          payload: {
            id: Date.now(),
            imageURI,
            title,
            comments: 0,
            likes: 0,
            location,
          },
        };
      },
    },
  },
});

export const { createPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
