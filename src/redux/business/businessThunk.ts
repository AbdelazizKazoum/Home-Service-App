import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBusinessList = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("business/fetchBusinessList", async (_: any, thunkApi: any) => {
  try {
    const { data } = await api.get("/business");
    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Get business by id
export const getBusinessById = createAsyncThunk(
  "business/getbusinessList",
  async (id: string, thunkApi: any) => {
    try {
      const { data } = await api.get(`/business/${id}`);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
