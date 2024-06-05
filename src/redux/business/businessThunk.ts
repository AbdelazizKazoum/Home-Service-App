import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBusinessList = createAsyncThunk<
  string[],
  void,
  { rejectValue: { message: string } }
>("business/fetchBusinessList", async (_, thunkApi: any) => {
  try {
    const { data } = await api.get("/business");
    return data;
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong";
    return thunkApi.rejectWithValue(errorMessage);
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
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
