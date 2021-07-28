// import { configureStore, createSlice } from "@reduxjs/toolkit";

// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const loginSlice = createSlice({
//     name: "login",
//     initialState: {
//       loginStatus: false
//     }, 
//     reducers: {
//       toggle(state) {
//         state.loginStatus = !state.loginStatus;
//       }
//     }
// });

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, loginSlice.reducer)

// const storeConfiguration = configureStore({
//   reducer: {
//     login: persistedReducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//   })
// });

// const loginStore = persistStore(storeConfiguration);

// export const loginActions = loginSlice.actions;

// export default loginStore;

import { configureStore, createSlice } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

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