/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../../components/navside";
import createSupabaseClient from "../../../supabase/client";
import { getId } from "../../../actions/profile";
import Setting from "../../components/setting";

async function getProfile() {
  const supabase = createSupabaseClient();
  const userId = await getId();

  const { data, error } = await supabase.from("Users").select().eq("id", userId);
  return data[0];
}

export default async function Page() {
  const user = await getProfile();
  return (
    <div className="w-full flex bg-[#171D22]">
      <div className=" my-16 container flex justify-between gap-10 flex-row mx-auto ">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container  rounded-lg flex flex-col items-center h-screen">
          <div>
            <Image src="/image/profile-picture.png" alt="" width={100} height={90} className="rounded-full mb-6 bg-[#666666]" />
          </div>
          <h1 className="text-[#f5f5f5] text-lg p-3">{user?.username}</h1>
          <h1 className="text-[#f5f5f5] text-lg p-3">{user?.email}</h1>
          <h1 className="text-[#f5f5f5] text-lg p-3">{user?.password}</h1>
          <h1 className="text-[#f5f5f5] text-lg p-3">{user?.name}</h1>
        </div>
        <aside className="max-w-max">
          <Setting />
        </aside>
      </div>
    </div>
  );
}
