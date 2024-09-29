/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Navside from "../components/navside";
import Setting from "../components/setting";

export default function Page() {
  return (
    <div className="w-full flex bg-[#171D22]">
      <div className="my-16 container flex justify-between gap-10 flex-row mx-auto">
        <aside className="max-w-max">
          <Navside />
        </aside>
        <div className="container rounded-lg flex flex-col items-center h-screen">
          <div>
            <Image src="/image/profile-picture.png" alt="" width={100} height={90} className="rounded-full mb-6 bg-[#666666]" />
          </div>
          <div className="mb-2 text-center font-semibold text-2xl text-[#f5f5f5]">Ciluk Ba</div>
          <div className="text-center w-1/2 font-sm  text-[#d5d5d5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum facilis maiores animi harum quae blanditiis ut cum id ad sint nisi deleniti illo, necessitatibus reprehenderit! Veniam et doloremque commodi.
          </div>
        </div>
        <aside className="max-w-max">
          <Setting />
        </aside>
      </div>
    </div>
  );
}
