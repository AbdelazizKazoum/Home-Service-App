import { combineReducers } from "@reduxjs/toolkit";
import businessReducer from "./business/businessSlice";
import bookingsReducer from "./booking/bookingSlice";
const rootReducer = combineReducers({
  business: businessReducer,
  bookings: bookingsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
