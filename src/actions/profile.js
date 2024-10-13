"use server";
import { cookies } from "next/headers";
import { decrypt } from "../lib/session";
import createSupabaseClient from "../supabase/client";
import { redirect } from "next/navigation";
import { EditProfileFormSchema } from "@/lib/definitions";
import { isEmpty } from "@/lib/utils";
import { uploadImage } from "@/supabase/storage/client";
import argon from "argon2";

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
  // console.log(data[0]);

  return data[0];
}

export async function update(state, formData) {
  const supabase = createSupabaseClient().from("Users");

  const userOld = await getUser();

  const validatedFields = EditProfileFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
    bio: formData.get("bio"),
    picture: formData.get("picture"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  let { username, email, password, name, bio } = validatedFields.data;
  //   check if username or email already registered
  if (username != userOld.username) {
    const checkUsername = (await supabase.select().eq("username", username)).error;
    if (!isEmpty(checkUsername))
      return {
        errors: { username: "Username is already registered" },
      };
  }
  if (email != userOld.email) {
    const checkEmail = (await supabase.select().eq("email", email)).error;
    if (!isEmpty(checkEmail))
      return {
        errors: { email: "Email is already registered" },
      };
  }
  // e.g. Hash the user's password before storing it
  let hashedPassword = userOld.password;
  if (password) {
    hashedPassword = await argon.hash(password);
  }
  console.log(validatedFields.data.picture);
  let path = userOld.picture;
  if (validatedFields.data.picture.size != 0) {
    path = (
      await uploadImage({
        file: validatedFields.data.picture,
        bucket: "cilukba",
      })
    ).path;

    if (path == userOld.picture) {
      console.log("path");
      return;
    }
  }
  if (username.length == 0) {
    username = userOld.username;
  }
  if (email.length == 0) {
    email = userOld.email;
  }
  if (name.length == 0) {
    name = userOld.name;
  }
  if (bio.length == 0) {
    bio = userOld.bio;
  }
  // 3. Insert the user into the database or call an Library API
  const { data } = await supabase
    .upsert({
      id: userOld.id,
      username: username,
      email: email,
      password: hashedPassword,
      name: name,
      bio: bio,
      picture: path,
    })
    .select();

  const user = data[0];
  // console.log(upp);

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
  // return;
  redirect("/accounts");
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
