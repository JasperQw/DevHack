import { getUserDataFromCookie } from "@/helper/user_helper";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const user_data = await getUserDataFromCookie();
    const user = await prisma.user.findUnique({
      where: {
        email: user_data?.email as string,
      },
    });

    return NextResponse.json({ data: user });
  } catch (err) {
    console.log(err);
  }
}
