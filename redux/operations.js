import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkApi) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      await updateProfile(auth.currentUser, {
        displayName: userData.login,
        photoURL: userData.avatar,
      });

      const { email, uid, displayName, photoURL } = auth.currentUser;

      return { email, id: uid, login: displayName, avatar: photoURL };
    } catch (error) {
      console.log('error.message', error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, thunkApi) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log('user', user);
      const { email, uid, displayName, photoURL } = auth.currentUser;
      return { email: email, id: uid, login: displayName, avatar: photoURL };
    } catch (error) {
      console.log('error.message', error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/update',
  async (_, thunkApi) => {
    try {
      return await new Promise((resolve, reject) =>
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { email, uid, displayName, photoURL } = user;
            resolve({
              email: email,
              id: uid,
              login: displayName,
              avatar: photoURL,
            });
          } else {
            return thunkApi.rejectWithValue('Unable to fetch user');
          }
        })
      );
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);
