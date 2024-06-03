import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBusinessList = createAsyncThunk(
  "fetchBusinessList",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/business");

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
