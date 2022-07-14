import { createSlice } from "@reduxjs/toolkit";
import loginApi from "../../../utils/loginApi";

const initialState = {
  isAuth: localStorage.getItem("isAuth") || false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
    },
    userLogout: (state, action) => {
      state.isAuth = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {},
});

const { userLogin, userLogout } = authSlice.actions;

export const login = (username, password) => async (dispatch) => {
  loginApi(username, password)
    .then((resp) => {
      localStorage.setItem("isAuth", true);
      dispatch(userLogin());
    })
    .catch((error) => {
      alert("Credenciales Incorrectas");
    });
};

export const logout = () => async (dispatch) => {
  dispatch(userLogout());
  localStorage.clear();
};

export default authSlice;