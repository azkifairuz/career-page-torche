import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "service/auth";
import { getUserProfile } from "service/user";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await login(data);

      if (!res.success) {
        throw new Error(
          res.messages ? JSON.stringify(res.messages) : res.message
        );
      }

      const userProfile = await getUserProfile();

      if (!userProfile.success) {
        throw new Error(userProfile.message);
      }

      return userProfile.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const res = await signup(data);

      if (!res.success) {
        throw new Error(
          res.messages ? JSON.stringify(res.messages) : res.message
        );
      }

      console.log(res);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
