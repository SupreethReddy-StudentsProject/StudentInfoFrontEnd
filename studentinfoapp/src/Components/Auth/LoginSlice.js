import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Login: false,
  error: "",
  showError: false,
  usernamelength: 0,
  passwordlength: 0,
};

export const reducers = {
  SetLogin(state, { payload }) {
    state.Login = payload;
  },
  SetUsernamelength(state, { payload }) {
    state.usernamelength = payload;
  },
  SetPasswordlength(state, { payload }) {
    state.passwordlength = payload;
  },
  UpdateError(state, { payload }) {
    state.error = payload;
  },
  UpdateShowError(state, { payload }) {
    state.showError = payload;
  },
};

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers,
});

export const {
  SetLogin,
  UpdateError,
  UpdateShowError,
  SetPasswordlength,
  SetUsernamelength,
} = LoginSlice.actions;

export default LoginSlice.reducer;
