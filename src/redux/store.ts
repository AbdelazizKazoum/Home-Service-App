import { configureStore, combineReducers } from "@reduxjs/toolkit";
import businessReducer from "./business/businessSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
