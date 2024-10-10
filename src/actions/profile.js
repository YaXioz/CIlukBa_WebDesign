"use server";
import { cookies } from "next/headers";
import { decrypt } from "../lib/session";
import createSupabaseClient from "../supabase/client";

export async function getId(username = null) {
  if (!username) {
    const cookie = cookies().get("session")?.value;

    const session = await decrypt(cookie);
    return session.userId;
  }
  const supabase = createSupabaseClient().from("Users");
  const { data } = await supabase.select().eq("username", username);
  return data[0].id;
}

export async function getUser() {
  const supabase = createSupabaseClient();
  const userId = await getId();

  const { data, error } = await supabase.from("Users").select().eq("id", userId);
  console.log(data[0]);

  return data[0];
}

export async function update() {
  const supabase = createSupabaseClient();

  const { data, error } = supabase.from("Users");
}

export async function searchUser(param) {
  const supabase = createSupabaseClient();
  console.log("profile: " + param);
  if (param == "") {
    return [];
  }
  const { data, error } = await supabase.from("Users").select().ilike("username", `%${param}%`);
  return data;
}
