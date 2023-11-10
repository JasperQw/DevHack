"use server";

import prisma from "@/lib/db";
import { SignUpFormState } from "../(dto)/signUpDto";
import { hash } from "../helperFunction";

export async function signup(
  prevState: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  try {
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirm_password = formData.get("confirm_password") as string;

    let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!password.match(passwordRegExp)) {
      throw new Error(
        "Password must be more than 8 characters and contain number and alphabet!"
      );
    }

    if (password !== confirm_password) {
      throw new Error("Password Different!");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error("Email has already been used!");
    }

    await prisma.user.create({
      data: {
        email,
        password: (await hash(password)) as string,
        username,
      },
    });

    return {
      success: true,
      email: {
        error: "",
      },
      password: {
        error: "",
      },
    };
  } catch (err: any) {
    return {
      success: false,
      email: {
        error:
          err.message === "Email has already been used!" ? err.message : "",
      },
      password: {
        error:
          err.message !== "Email has already been used!" ? err.message : "",
      },
    };
  }
}
