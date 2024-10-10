import { PostCreateFormSchema } from "@/lib/definitions";
import createSupabaseClient from "../supabase/client";
import { redirect } from "next/navigation";
import { uploadImage } from "../supabase/storage/client";
import { isEmpty } from "@/lib/utils";
import { getTimeline } from "./timeline";
import { v4 as uuidV4 } from "uuid";

export async function getPosts(timeline_id) {
  const supabase = createSupabaseClient().from("Posts");

  const { data, error } = await supabase.select().eq("timeline_id", timeline_id);

  data?.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  console.log(data);

  return data;
}
export async function getPost(url) {
  const supabase = createSupabaseClient().from("Posts");

  const { data, error } = await supabase.select().eq("url", url);
  // console.log(year);

  return data[0];
}

export async function create(state, formData) {
  const supabase = createSupabaseClient().from("Posts");
  //   const formData = new FormData();
  //   formData.set("userpic", myFileInput.files[0], "chris.jpg");

  const validatedFields = PostCreateFormSchema.safeParse({
    year: parseInt(formData.get("year")),
    image: formData.get("image"),
    description: formData.get("description"),
    event_date: formData.get("event_date"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  if (validatedFields.data.year != validatedFields.data.event_date.getFullYear())
    return {
      errors: { event_date: "Event date must match the year of timeline." },
    };

  const path_image = (
    await uploadImage({
      file: validatedFields.data.image,
      bucket: "cilukba",
    })
  ).path;
  const { id } = await getTimeline(null, validatedFields.data.year);

  if (!path_image) {
    console.log("path_image");
    return;
  }
  const { data } = await supabase
    .insert({
      timeline_id: id,
      url: uuidV4(),
      image: path_image,
      description: validatedFields.data.description,
      event_date: validatedFields.data.event_date,
      created_at: new Date().toISOString(),
    })
    .select();

  const post = data[0];

  if (!post) {
    console.log("error");
    return {
      message: "An error occurred while creating your post.",
    };
  }
  redirect(`/accounts/timeline/${validatedFields.data.year}`);
}
