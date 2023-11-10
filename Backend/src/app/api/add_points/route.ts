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

    await prisma.user.update({
      where: {
        email: user_data?.email as string,
      },
      data: {
        points: (user?.points as number) + 100,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
