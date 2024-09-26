/* eslint-disable @next/next/no-img-element */
"use client";
import { RiMenu3Line, RiMenuLine, RiSearchLine } from "@remixicon/react";

export default function Navside() {
  return (
    <div className="sticky top-12 flex flex-col  ">
      {/* light mode - tight side navigation with red notification */}
      <div class="py-6 px-4 text-gray-900 bg-white rounded-lg text-center shadow-lg ">
        <img src="/image/logo-black.png" alt="alt placeholder" class="w-8 h-8 mx-auto mb-5" />
        <span class="cursor-pointer h   over:text-gray-500 px-2 block mb-5">
          <RiMenuLine size={32} color="black" />
        </span>
        <span class="cursor-pointer hover:text-gray-500 px-2 block mb-5">
          <RiSearchLine />
        </span>
        <span class="cursor-pointer hover:text-gray-500 px-2 block mb-5 relative">
          <i class="fas fa-bell"></i>
          <span class="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-white">3</span>
        </span>
        <span class="cursor-pointer hover:text-gray-500 px-2 block mb-5 relative">
          <img src="/image/profile-picture.jpg" alt="alt placeholder" class="w-8 h-8 mx-auto mb-5 rounded-full" />
          <span class="absolute 2 right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-white ">3</span>
        </span>
      </div>
    </div>
  );
}
