"use server";
import { cookies } from "next/headers";
import { decrypt } from "../lib/session";

export async function getId() {
  const cookie = cookies().get("session")?.value;

  const session = await decrypt(cookie);
  return session.userId;
}
