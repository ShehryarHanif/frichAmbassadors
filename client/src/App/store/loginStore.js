import { configureStore, createSlice } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loginSlice = createSlice({
    name: "login",
    initialState: {
      loginStatus: false
    }, 
    reducers: {
      setValue(state, action) {
        state.loginStatus = action.payload;
      }
    }
});

const persistConfig = {
  key: "login",
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, loginSlice.reducer)

const loginStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
  })
});

export const loginActions = loginSlice.actions;

export const persistor = persistStore(loginStore);

export default loginStore;