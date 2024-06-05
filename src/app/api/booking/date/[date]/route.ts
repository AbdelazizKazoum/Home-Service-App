import Booking from "@/models/Booking";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { date: string } }
) => {
  const date = context.params.date;

  try {
    await connect();
    const bookings = await Booking.find({ date });
    return NextResponse.json(bookings, { status: 500 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
