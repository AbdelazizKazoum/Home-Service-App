import Service from "@/models/Service";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  params: { params: { businessId: string } }
) {
  const id = params.params.businessId;
  try {
    connect();
    const findService = await Service.findOne({ _id: id });

    return NextResponse.json(findService, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
