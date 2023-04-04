import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  avatar: '',
  login: '',
  email: '',
  password: '',
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    loginUser(state, action) {
      return { ...state, ...action.payload, isAuthorized: true };
    },
    registerUser(state, action) {
      return { ...state, ...action.payload, isAuthorized: true };
    },
    logoutUser() {
      return { ...initialUserState };
    },
    updateUserData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { loginUser, registerUser, logoutUser, updateUserData } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
