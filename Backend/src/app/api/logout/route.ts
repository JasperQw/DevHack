import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    cookies().delete("token");
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
  }
}
