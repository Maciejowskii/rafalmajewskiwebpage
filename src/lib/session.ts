import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

function getKey() {
  const secretKey = process.env.SESSION_SECRET;
  if (!secretKey) {
    throw new Error("CRITICAL: SESSION_SECRET is not defined. Please set it in your environment variables (Vercel/Server Settings).");
  }
  return new TextEncoder().encode(secretKey);
}

export async function encrypt(payload: any) {
  const key = getKey();
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const key = getKey();
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function setSession(userId: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expires });
  
  const cookieStore = await cookies();
  cookieStore.set("admin_session", session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function verifySession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("admin_session")?.value;
  const session = await decrypt(cookie as string);

  if (!session?.userId) {
    return { isAuth: false, userId: null };
  }

  return { isAuth: true, userId: session.userId };
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}
