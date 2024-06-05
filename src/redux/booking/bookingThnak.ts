import api from "@/lib/axios";
import { BookingType } from "@/types/bookingTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBookingsByEmail = createAsyncThunk(
  "bookings/fetchBookings",
  async (userEmail: string | null | undefined, thankApi) => {
    try {
      const { data } = await api(`/booking/${userEmail}`);

      return data;
    } catch (error: any) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

// Get business by id
export const fetchBookingsByDate = createAsyncThunk(
  "bookings/fetchBookingsByDate",
  async (date: string, thunkApi: any) => {
    try {
      const { data } = await api.get(`/booking/date/${date}`);
      return data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
