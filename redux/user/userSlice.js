import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} from './userOperations';

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
      })
      .addCase(logoutUser.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialUserState;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(refreshUser.pending, (state) => {
        console.log('this is refresh user pending');
        return { ...state, isLoading: true, error: null };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log('this is refresh user fulfilled');
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          ...action.payload,
        };
      })
      .addCase(refreshUser.rejected, (state, action) => {
        console.log('this is refresh user rejected');
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const { updateUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
