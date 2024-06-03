import { createSlice } from "@reduxjs/toolkit";
import { getBusinessList } from "./businessThunk";

const initialState = {
  items: [],
  selected: {
    name: "",
    category: "",
    contactPerson: "",
    adress: "",
    image: "",
    description: "",
  },
  http: {
    status: "idle",
    loading: false,
    message: "",
  },
} as any;

console.log("hello :", initialState);

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusinessList.pending, (state) => {
        state.http.status = "pending";
        state.http.loading = true;
      })
      .addCase(getBusinessList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.http.loading = false;
        state.http.status = "fulfilled";
        state.http.message = "loaded succefully";
      })
      .addCase(getBusinessList.rejected, (state, action) => {
        state.http.loading = false;
        state.http.status = "rejected";
        state.http.message = action.payload;
      });
  },
});

export default businessSlice.reducer;
