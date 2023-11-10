import * as jose from "jose";

export async function decodeJWT(cookie: string) {
  try {
    const jwt = cookie;

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);
    const { payload } = await jose.jwtVerify(jwt, secret);
    return payload;
  } catch (err) {
    console.log(err);
  }
}
