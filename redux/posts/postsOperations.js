import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

export const createPost = createAsyncThunk(
  'posts/create',
  async (postData, thunkApi) => {
    try {
      const path = 'postImage/' + Date.now().toString();
      const response = await fetch(postData.imageURI);
      const file = await response.blob();
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(ref(storage, path));
      const docRef = await addDoc(collection(db, 'posts'), {
        id: Date.now().toString(),
        imageURL: url,
        title: postData.title,
        location: postData.location,
        owner: postData.owner,
        likes: [],
        comments: [],
      });
      const postItem = doc(db, 'posts', docRef.id);
      const docSnap = await getDoc(postItem);

      if (docSnap.exists()) {
        return docSnap.data();
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (_, thunkApi) => {
    try {
      const posts = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      return posts;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
