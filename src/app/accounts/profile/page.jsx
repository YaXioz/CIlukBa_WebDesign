/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../components/navside";
import { createSupabaseClient } from "../../../supabase/client";
import { getId } from "../../../actions/profile";

async function getProfile() {
  const supabase = createSupabaseClient();
  const userId = await getId();

  const { data, error } = await supabase.from("Users").select().eq("id", userId);
  return data[0];
}

export default async function Page() {
  const user = await getProfile();
  return (
    <div className="w-full flex">
      <div className=" mt-16 container flex justify-between gap-8 flex-row mx-auto px-12">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container bg-white rounded-lg flex flex-col items-center h-screen">
          <h1 className="text-black text-lg p-8">Profile</h1>
          <h1 className="text-black text-lg p-3">{user?.username}</h1>
          <h1 className="text-black text-lg p-3">{user?.email}</h1>
          <h1 className="text-black text-lg p-3">{user?.name}</h1>
          <form action={logout}>
            <button className="rounded-lg bg-black p-4 mt-3" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
