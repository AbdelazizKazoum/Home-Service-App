import api from "@/lib/axios";
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
