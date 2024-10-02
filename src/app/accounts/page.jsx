/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Navside from "../components/navside";
import Setting from "../components/setting";
import Link from "next/link";
import { RiAddLine, RiDeleteBin7Line, RiEyeLine, RiSettings2Line } from "@remixicon/react";

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
          <div className="w-2/3 h-[50vh] grid grid-cols-1 gap-3 border-t border-[#d9d9d9] p-4 overflow-auto">
            <div className="bg-white max-h-fit text-[#171d22] py-4 px-6 rounded-xl flex flex-row justify-between items-center">
              <div className="text-3xl font-bold">2024 | 12 Post</div>
              <div className="text-white bg-[#171d22] py-3 px-5 rounded-xl gap-5 flex flex-row">
                <Link href={"accounts/timeline"}>
                  <span className="cursor-pointer text-gray-500 hover:text-white block ">
                    <RiEyeLine size={40} />
                  </span>
                </Link>

                <Link href={"accounts/profile"}>
                  <span className="cursor-pointer text-gray-500 hover:text-white block ">
                    <RiDeleteBin7Line size={40} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-16 h-32 bg-[#171d22] left-1/2">
            <div className="py-4 px-4  bg-[#f5f5f5] rounded-3xl text-center shadow-lg flex flex-col items-center">
              <Link href={"accounts/timeline/new"}>
                <span className="cursor-pointer text-gray-500 hover:text-black block ">
                  <RiAddLine size={40} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <aside className="max-w-max">
          <Setting />
        </aside>
      </div>
    </div>
  );
}
