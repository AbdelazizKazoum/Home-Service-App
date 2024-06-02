import { BusinessListType } from "./businessTypes";

export interface BookingType {
  _id: string;
  username: string;
  userEmail: string;
  date: Date;
  time: string;
  business: BusinessListType;
  status: "booked" | "completed";
}
