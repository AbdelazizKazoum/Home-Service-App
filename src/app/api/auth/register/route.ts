import bcrypt from "bcrypt";
import User from "@/models/User";
import { NextResponse } from "next/server";
import connect from "@/utils/db";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  await connect();

  console.log("from server : ", email);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("this email is in allridy in use!", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("user has been successfully created", {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
