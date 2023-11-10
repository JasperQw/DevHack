import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: "user@email.com",
      },
    });

    return NextResponse.json({ point: user?.points });
  } catch (err) {
    console.log(err);
  }
}
