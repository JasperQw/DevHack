"use server";

import prisma from "@/lib/db";
import { loginFormState } from "../(dto)/loginDto";
import { compareHashes } from "../helperFunction";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function login(
  prevState: loginFormState,
  formData: FormData
): Promise<loginFormState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid email or password!");
    }

    const valid = await compareHashes(password, user.password);

    if (!valid) {
      throw new Error("Invalid email or password!");
    }

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);

    const token = await new jose.SignJWT({
      user_id: user.id,
      email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secret);

    process.env.NEXT_PUBLIC_SECRET_KEY,
      {
        expiresIn: "2h",
      };

    cookies().set("token", token, {
      expires: Date.now() + 60 * 60 * 2 * 1000,
    });

    return {
      error: "",
      success: true,
    };
  } catch (err: any) {
    return {
      error: err.message as string,
      success: false,
    };
  }
}
