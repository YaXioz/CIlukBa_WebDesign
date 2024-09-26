"use server";
import { LoginFormSchema, SignupFormSchema } from "../lib/definitions";
import argon from "argon2";
import createSupabaseClient from "../supabase/client";
import { redirect } from "next/navigation";
import { isEmpty } from "../lib/utils";
import { createSession, deleteSession } from "../lib/session";

export async function signup(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createSupabaseClient().from("Users");

  // 2. Prepare data for insertion into database
  const { username, email, password, name } = validatedFields.data;
  //   check if username or email already registered
  const checkUsername = (await supabase.select().eq("username", username)).error;
  if (!isEmpty(checkUsername))
    return {
      errors: { username: "Username is already registered" },
    };

  const checkEmail = (await supabase.select().eq("email", email)).error;
  if (!isEmpty(checkEmail))
    return {
      errors: { email: "Email is already registered" },
    };
  // e.g. Hash the user's password before storing it
  const hashedPassword = await argon.hash(password);
  // 3. Insert the user into the database or call an Library API
  const { data } = await supabase
    .insert({
      username,
      email,
      password: hashedPassword,
      name,
    })
    .select();

  const user = data[0];

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // 4. Redirect user
  redirect("/login");
}

export async function login(state, formData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFields.data;

  const supabase = createSupabaseClient().from("Users");

  const { data, error, status } = await supabase.select().eq("email", email);
  if (!isEmpty(error))
    return {
      errors: { email: "Email is not registered" },
    };
  const verified = argon.verify(data[0].password, password);
  if (!verified)
    return {
      errors: { password: "Password is not correct" },
    };

  // 4. Create user session
  await createSession(data[0].id);
  // 5. Redirect user
  redirect("/accounts");
}

export async function logout() {
  deleteSession();
  redirect("/signin");
}
