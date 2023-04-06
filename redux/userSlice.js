import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './operations';

const initialUserState = {
  id: null,
  avatar: null,
  login: null,
  email: null,
  isAuthorized: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    logoutUser() {
      return { ...initialUserState };
    },
    updateUserData(state, action) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          ...action.payload,
        };
      })
      .addCase(registerUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(loginUser.pending, (state) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          ...action.payload,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const { logoutUser, updateUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
