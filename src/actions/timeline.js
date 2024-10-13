import { TimelineCreateFormSchema, TimelineUpdateFormSchema } from "@/lib/definitions";
import createSupabaseClient from "../supabase/client";
import { getId } from "./profile";
import { redirect } from "next/navigation";
import { uploadImage } from "../supabase/storage/client";
import { isEmpty } from "@/lib/utils";

export async function getTimelines(username = null) {
  const supabase = createSupabaseClient().from("Timelines");
  let user_id = null;
  if (username) {
    user_id = await getId(username);
  } else {
    user_id = await getId();
  }

  console.log(user_id);

  const { data, error } = await supabase.select().eq("user_id", user_id);

  data?.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  console.log(data);

  return data;
}

export async function getTimelineById(id) {
  const supabase = createSupabaseClient().from("Timelines");
  const { data } = await supabase.select().eq("id", id);
  return data[0];
}

export async function getTimeline(username = null, year) {
  const supabase = createSupabaseClient().from("Timelines");
  console.log(`getTiimeline : ${username}`);
  console.log(`getTiimeline : ${year}`);

  let user_id = null;
  if (username) {
    user_id = await getId(username);
  } else {
    user_id = await getId();
  }

  const { data, error } = await supabase.select().eq("user_id", user_id);
  console.log(error);

  const timeline = data?.filter((timeline, i) => {
    if (timeline["year"] == year) return timeline;
  });
  return timeline[0];
}

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
  console.log(user);

  if (!user) {
    console.log("error");
    return {
      message: "An error occurred while creating your timeline.",
    };
  }
  redirect("/accounts");
}

export async function update(state, formData) {
  // return;

  const validatedFields = TimelineUpdateFormSchema.safeParse({
    year: formData.get("year"),
    image_1: formData.get("image_1"),
    image_2: formData.get("image_2"),
    image_3: formData.get("image_3"),
  });
  console.log(validatedFields.data.year);

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const supabase = createSupabaseClient().from("Timelines");
  const timeline_old = await getTimeline(null, validatedFields.data.year);

  if (validatedFields.data.year != timeline_old.year) {
    const timelines_old = (await supabase.select().eq("user_id", user_id)).data;
    let yearExist = false;
    timelines_old.forEach((timeline) => {
      if (timeline.year == validatedFields.data.year) yearExist = true;
    });
    if (yearExist) {
      return {
        errors: { year: "Year is already have a timeline." },
      };
    }
  }

  let path_image_1 = timeline_old.image_1;
  if (validatedFields.data.image_1.size != 0) {
    path_image_1 = (
      await uploadImage({
        file: validatedFields.data.image_1,
        bucket: "cilukba",
      })
    ).path;

    if (path_image_1 == timeline_old.image_1) {
      console.log("path_image_1");
      return;
    }
  }

  let path_image_2 = timeline_old.image_2;
  if (validatedFields.data.image_2.size != 0) {
    path_image_2 = (
      await uploadImage({
        file: validatedFields.data.image_2,
        bucket: "cilukba",
      })
    ).path;

    if (path_image_2 == timeline_old.image_2) {
      console.log("path_image_2");
      return;
    }
  }
  let path_image_3 = timeline_old.image_3;
  if (validatedFields.data.image_3.size != 0) {
    path_image_3 = (
      await uploadImage({
        file: validatedFields.data.image_3,
        bucket: "cilukba",
      })
    ).path;

    if (path_image_3 == timeline_old.image_3) {
      console.log("path_image_3");
      return;
    }
  }
  const user_id = await getId();

  const { data } = await supabase
    .upsert({
      id: timeline_old.id,
      user_id,
      year: validatedFields.data.year,
      image_1: path_image_1,
      image_2: path_image_2,
      image_3: path_image_3,
      created_at: timeline_old.created_at,
      updated_at: new Date().toISOString(),
    })
    .select();

  const user = data[0];

  if (!user) {
    console.log("error");
    return {
      message: "An error occurred while creating your timeline.",
    };
  }
  redirect("/accounts");
}
