import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "service/auth";
import { getUserProfile } from "service/user";

export const loginUser = createAsyncThunk("auth/login", async (data) => {
  try {
    const res = await login(data);

    if (!res.success) {
      throw new Error(res.messages ? res.messages[0] : res.message);
    }

    const userProfile = await getUserProfile();

    if (!userProfile.success) {
      throw new Error(userProfile.message);
    }

    return userProfile.data;
  } catch (error) {
    return error.message;
  }
});
