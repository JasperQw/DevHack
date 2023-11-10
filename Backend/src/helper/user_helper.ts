import { cookies } from "next/headers";
import { decodeJWT } from "./jwt_helper";

export async function getUserDataFromCookie() {
  try {
    const cookie = cookies().get("token");
    let user_data;
    if (cookie) {
      user_data = await decodeJWT(cookie?.value);
    } else {
      throw Error("Cookie not found!");
    }

    return user_data;
  } catch (err) {
    console.log(err);
  }
}
