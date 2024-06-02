import Booking from "@/models/Booking";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { userEmail: string } }
) => {
  const email = context.params.userEmail;

  try {
    connect();
    const booking = await Booking.find({ userEmail: email }).populate({
      path: "business",
      strictPopulate: false,
      model: "Service",
    });
    console.log(booking);

    return NextResponse.json(booking, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
};
