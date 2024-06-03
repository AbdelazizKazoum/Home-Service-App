import { NextRequest, NextResponse } from "next/server";
import Service from "@/models/Service";
import connect from "@/utils/db";
// import { businessList } from "@/db/businessListDB";

export const GET = async (request: NextRequest, res: NextResponse) => {
  try {
    await connect();
    const services = await Service.find();
    return NextResponse.json(services, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const service = await request.json();
  await connect();
  try {
    const check = await Service.findOne({ name: service.name });

    if (check) {
      return new NextResponse("Already exists !", { status: 300 });
    }

    const newBusiness = new Service(service);

    await newBusiness.save();

    return NextResponse.json("added successfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
