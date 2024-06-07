import Booking from "@/models/Booking";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { date: string } }
) => {
  const date = new Date(context.params.date);
  date.setHours(0, 0, 0, 0);

  console.log("this is the date :", date);

  try {
    await connect();
    const bookings = await Booking.find({ date });

    console.log(bookings);
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
