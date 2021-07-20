import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
      loginStatus: false
    }, 
    reducers: {
      toggle(state) {
        state.loginStatus = !state.loginStatus;
      }
    }
});

export const loginActions = loginSlice.actions;

const loginStore = configureStore({
  reducer: {
    login: loginSlice.reducer
  },
});

export default loginStore;