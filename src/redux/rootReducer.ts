import { combineReducers } from "@reduxjs/toolkit";
import businessReducer from "./business/businessSlice";
const rootReducer = combineReducers({
  business: businessReducer,
});

export default rootReducer;
