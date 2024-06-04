import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBusinessById, getBusinessList } from "./businessThunk";
import { BusinessListType } from "@/types/businessTypes";
import { RootState } from "../rootReducer";

interface businessStateType {
  items: BusinessListType[];
  selected: BusinessListType;
  http: {
    status: string;
    loading: boolean;
    message: string;
  };
}

const initialState: businessStateType = {
  items: [],
  selected: {
    _id: "",
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
};

console.log("hello :", initialState);

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getBusinessList.pending, (state: businessStateType) => {
        state.http.status = "pending";
        state.http.loading = true;
      })
      .addCase(
        getBusinessList.fulfilled,
        (
          state: businessStateType,
          action: PayloadAction<BusinessListType[]>
        ) => {
          state.items = action.payload;
          state.http.loading = false;
          state.http.status = "fulfilled";
          state.http.message = "loaded succefully";
        }
      )
      .addCase(
        getBusinessList.rejected,
        (state: businessStateType, action: PayloadAction<string>) => {
          state.http.loading = false;
          state.http.status = "rejected";
          state.http.message = action.payload;
        }
      )
      .addCase(getBusinessById.pending, (state: businessStateType) => {
        state.http.status = "pending";
        state.http.loading = true;
      })
      .addCase(
        getBusinessById.fulfilled,
        (state: businessStateType, action: PayloadAction<BusinessListType>) => {
          state.selected = action.payload;
          state.http.loading = false;
          state.http.status = "fulfilled";
          state.http.message = "loaded succefully";
        }
      )
      .addCase(
        getBusinessById.rejected,
        (state: businessStateType, action: PayloadAction<string>) => {
          state.http.loading = false;
          state.http.status = "rejected";
          state.http.message = action.payload;
        }
      );
  },
});

export default businessSlice.reducer;
