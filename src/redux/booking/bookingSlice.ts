import { BookingType } from "@/types/bookingTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBookingsByEmail } from "./bookingThnak";

interface bookingStateType {
  items: BookingType[];
  selected: BookingType | null;
  http: {
    status: string;
    message: string;
    loaded: boolean;
  };
}

const initialState: bookingStateType = {
  items: [],
  selected: null,
  http: {
    status: "idle",
    message: "",
    loaded: false,
  },
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchBookingsByEmail.pending, (state: bookingStateType) => {
        state.http.status = "pending";
        state.http.loaded = false;
      })
      .addCase(
        fetchBookingsByEmail.fulfilled,
        (state: bookingStateType, action: PayloadAction<BookingType[]>) => {
          state.items = action.payload;
          state.http.loaded = true;
          state.http.status = "fulfilled";
          state.http.message = "loaded succefully";
        }
      )
      .addCase(
        fetchBookingsByEmail.rejected,
        (state: bookingStateType, action: PayloadAction<string>) => {
          state.http.loaded = true;
          state.http.status = "rejected";
          state.http.message = action.payload;
        }
      );
  },
});

export default bookingSlice.reducer;
