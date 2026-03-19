"use server";

import { prisma } from "@/lib/prisma";
import { setSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Wprowadź email i hasło." };
  }

  console.log("[DEBUG_ACTION] email:", email);
  console.log("[DEBUG_ACTION] prisma defined?:", !!prisma);

  // Priority: Check .env credentials for simple setup
  const envEmail = process.env.ADMIN_EMAIL;
  const envPassword = process.env.ADMIN_PASSWORD;

  if (envEmail && envPassword && email === envEmail && password === envPassword) {
    await setSession("admin_env_user");
    redirect("/admin/dashboard");
  }

  // Fallback: Check database for users
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Nieprawidłowy adres email lub hasło." };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { error: "Nieprawidłowy adres email lub hasło." };
  }

  await setSession(user.id);
  
  redirect("/admin/dashboard");
}

export async function logoutAction() {
  import("@/lib/session").then(({ destroySession }) => destroySession());
  redirect("/admin/login");
}
