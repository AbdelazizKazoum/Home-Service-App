import { NextRequest, NextResponse } from "next/server";
import Booking from "@/models/Booking";
import connect from "@/utils/db";

// Save new booking
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  try {
    await connect();

    const checkBooking = await Booking.findOne({
      business: body.business,
      date: body.date,
      time: body.time,
    });

    if (checkBooking) {
      console.log("already booked");

      return NextResponse.json("this booking is not valid !", { status: 301 });
    }
    const newBooking = new Booking({ ...body, status: "booked" });

    const booked = await newBooking.save();

    return NextResponse.json(
      { data: booked, message: "successfuly booked" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

const GET = () => {};
