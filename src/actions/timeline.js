import { TimelineCreateFormSchema } from "@/lib/definitions";
import createSupabaseClient from "../supabase/client";
import { getId } from "./profile";
import { redirect } from "next/navigation";
import { uploadImage } from "../supabase/storage/client";
import { isEmpty } from "@/lib/utils";

export async function create(state, formData) {
  const supabase = createSupabaseClient().from("Timelines");
  const user_id = await getId();
  //   const formData = new FormData();
  //   formData.set("userpic", myFileInput.files[0], "chris.jpg");

  const validatedFields = TimelineCreateFormSchema.safeParse({
    year: formData.get("year"),
    image_1: formData.get("image_1"),
    image_2: formData.get("image_2"),
    image_3: formData.get("image_3"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const timelines = (await supabase.select().eq("user_id", user_id)).data;

  let yearExist = false;
  timelines.forEach((timeline) => {
    if (timeline.year == validatedFields.data.year) yearExist = true;
  });
  if (yearExist) {
    console.log(timelines);

    console.log(yearExist);

    return {
      errors: { year: "Year is already have a timeline." },
    };
  }

  const path_image_1 = (
    await uploadImage({
      file: validatedFields.data.image_1,
      bucket: "cilukba",
    })
  ).path;

  if (!path_image_1) {
    console.log("path_image_1");
    return;
  }

  const path_image_2 = (
    await uploadImage({
      file: validatedFields.data.image_2,
      bucket: "cilukba",
    })
  ).path;

  if (!path_image_2) {
    console.log("path_image_2");
    return;
  }
  const path_image_3 = (
    await uploadImage({
      file: validatedFields.data.image_3,
      bucket: "cilukba",
    })
  ).path;

  if (!path_image_3) {
    console.log("path_image_3");
    return;
  }
  console.log("masuk");

  const { data } = await supabase
    .insert({
      user_id,
      year: validatedFields.data.year,
      image_1: path_image_1,
      image_2: path_image_2,
      image_3: path_image_3,
      created_at: new Date().toISOString(),
    })
    .select();

  const user = data[0];

  if (!user) {
    console.log("error");
    console.log(error);
    return;
    return {
      message: "An error occurred while creating your timeline.",
    };
  }
  redirect("/accounts");
}
