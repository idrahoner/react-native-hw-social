import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './operations';

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
    loginUser(state, action) {
      return { ...state, ...action.payload, isAuthorized: true };
    },
    // registerUser(state, action) {
    //   return { ...state, ...action.payload, isAuthorized: true };
    // },
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
        const { email, id } = action.payload;
        return { ...state, isLoading: false, isAuthorized: true, email, id };
      })
      .addCase(registerUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const {
  loginUser,
  // registerUser,
  logoutUser,
  updateUserData,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
