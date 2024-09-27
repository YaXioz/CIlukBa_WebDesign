/* eslint-disable @next/next/no-img-element */
"use client";
import { RiGridLine, RiMenu3Line, RiMenuLine, RiProfileLine, RiSearchLine, RiTimeLine } from "@remixicon/react";
import Link from "next/link";

export default function Navside() {
  return (
    <div className="sticky top-12   ">
      {/* light mode - tight side navigation with red notification */}
      <div class="py-6 px-4 text-gray-900 bg-white rounded-lg text-center shadow-lg flex flex-col items-center">
        <Link href="/accounts">
          <img src="/image/logo-black.png" alt="alt placeholder" class="w-8 h-8 mx-auto mb-5" />
        </Link>
        <Link href={"/accounts/timeline"}>
          <span class="cursor-pointer hover:text-gray-500 px-2 block mb-5">
            <RiTimeLine size={32} color="black" />
          </span>
        </Link>
        <Link href={"/accounts/post"}>
          <span class="cursor-pointer hover:text-gray-500 px-2 block mb-5">
            <RiGridLine size={32} />
          </span>
        </Link>
        <Link href={"/accounts/profile"}>
          <span class="cursor-pointer hover:text-gray-500 px-2 block mb-5 relative">
            <img src="/image/profile-picture.jpg" alt="alt placeholder" class="w-8 h-8 mx-auto mb-5 rounded-full" />
            <span class="absolute 2 right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-white ">3</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
