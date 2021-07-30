import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./features/itemSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["item"],
};

const reducers = combineReducers({
  item: itemReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
