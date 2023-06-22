import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "service/auth";

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [login.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [signup.pending]: (state, action) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [signup.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
