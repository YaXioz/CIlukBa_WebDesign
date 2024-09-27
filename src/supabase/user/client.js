import argon from "argon2";
import createSupabaseClient from "../client";
import { isEmpty } from "../../lib/utils";

function getClient() {
  return createSupabaseClient();
}

export async function register({ username, email, password, name }) {
  let errors = {};

  if (!username) {
    errors.username.push("Username is required");
  }

  if (!password) {
    errors.username.push("Password is required");
  } else if (password.length < 8) {
    errors.username.push("Password at least have 8 characters");
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.email.push("Email is not valid");
  }
  if (!isEmpty(errors)) {
    return errors;
  }

  const hashedPassword = argon.hash(password);
  const supabase = getClient();
  const { status, data, error } = await supabase.from("Users").insert({
    username: username,
    email: email,
    password: hashedPassword,
    name: name,
  });

  return { status, data, error };
}

export async function signin({ username, password }) {
  let errors = {};

  if (!username) {
    errors.username.push("Username is required");
  }

  if (!password) {
    errors.username.push("Password is required");
  }

  let verified = false;
  const supabase = getClient();
  const { data, error, status } = await supabase.from("Users").select().eq("username", username);
  verified = argon.verify(user.password, password);
  if (!verified) errors.password.push("Password is incorrect");
  if (!isEmpty(errors)) {
    return errors;
  }

  return;
}
