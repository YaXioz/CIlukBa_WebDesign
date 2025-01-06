/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Navside from "../components/navside";
import Setting from "../components/setting";
import Link from "next/link";
import { RiAddLine, RiDeleteBin7Line, RiEyeLine } from "@remixicon/react";
import { getTimelines } from "@/actions/timeline";
import { getUser  } from "@/actions/profile";

export default async function Page() {
  const timelines = (await getTimelines()) ?? [];
  const profile = await getUser ();

  return (
    <div className="w-full flex bg-gradient-to-br from-[#1A0733] to-[#5E27D1] min-h-screen overflow-hidden">
      <div className="my-16 container relative  mx-auto">
      {/* Sidebar */}
        <aside className="max-w-max md:w-1/4">
          <Navside />
        </aside>

        {/* Main Content */}
        <div className="m-auto w-full md:w-3/4 bg-[#10071d]/80 rounded-xl flex flex-col items-center py-10 px-6 shadow-xl space-y-8 relative overflow-hidden">
          {/* Box shadow effect */}
          <div className="absolute inset-0 bg-[#10071d] opacity-60 shadow-[0px_0px_50px_rgb(140,69,255),0px_0px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] rounded-xl"></div>

          {/* Profile Section */}
          <div className="relative w-32 h-32 z-10">
            <img
              src={profile?.picture ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${profile?.picture}` : "/image/profile-picture.png"}
              alt="Profile"
              className="rounded-full mb-6 bg-[#666666] border-4 border-[#fdfdfd] w-32 h-32 shadow-lg object-cover"
            />
          </div>

          <div className="relative z-10 text-center space-y-2">
            <div className="font-bold text-3xl text-[#f5f5f5]">{profile?.name ?? "User  Name"}</div>
            <div className="font-light text-md text-[#d5d5d5] mx-auto">{profile?.bio ?? "No bio available"}</div>
          </div>

          {/* Timeline Cards */}
          <div className="w-full md:w-2/3 h-[40vh] flex flex-col gap-10 border-t border-[#8c45ff] pt-4 px-5 overflow-auto justify-start relative z-10">
            {timelines.map((timeline, i) => (
              <div className="bg-[#252A34] text-white py-4 px-6 rounded-lg flex flex-row justify-between items-center shadow-[0px_0px_15px_#8c45ff] transition-all hover:shadow-[0px_0px_25px_#8c45ff]" key={i}>
                <div className="text-3xl font-bold">{timeline["year"]}</div>
                <div className="flex gap-5">
                  <Link href={`accounts/timeline/${timeline.year}`}>
                    <span className="cursor-pointer text-gray-500 hover:text-white transition-all duration-200">
                      <RiEyeLine size={40} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Timeline Button */}
        <div className="fixed bottom-10 m-auto left-0 right-0 transform lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 bg-gradient-to-t from-[#1A0733] to-[#6E27D1] rounded-full flex justify-center items-center shadow-[0px_0px_20px_#8c45ff] cursor-pointer transition-transform hover:scale-110 z-10">
          <Link href={"accounts/timeline/new"}>
            <RiAddLine size={40} className="text-white" />
          </Link>
        </div>

        {/* Settings Sidebar */}
        <aside className="max-w-max md:w-1/4">
          <Setting />
        </aside>
      </div>
    </div>
  );
}