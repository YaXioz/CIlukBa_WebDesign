"use server";
import { cookies } from "next/headers";
import { decrypt } from "../lib/session";
import createSupabaseClient from "../supabase/client";

export async function getId() {
  const cookie = cookies().get("session")?.value;

  const session = await decrypt(cookie);
  return session.userId;
}

export async function getUser() {
  const supabase = createSupabaseClient();
  const userId = await getId();

  const { data, error } = await supabase.from("Users").select().eq("id", userId);
  console.log(data[0]);

  return data[0];
}
