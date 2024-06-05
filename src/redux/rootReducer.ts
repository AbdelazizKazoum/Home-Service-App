import { combineReducers } from "@reduxjs/toolkit";
import businessReducer from "./business/businessSlice";
import bookingsReducer from "./booking/bookingSlice";
const rootReducer = combineReducers({
  business: businessReducer,
  bookings: bookingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
