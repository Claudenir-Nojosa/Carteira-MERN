import GoogleUser from "../../../../api/models/google-user";
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await GoogleUser.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
