import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./authAction";

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
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signupUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
