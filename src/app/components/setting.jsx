"use client";
import { RiSettings2Line } from "@remixicon/react";
import Link from "next/link";

export default function Setting() {
  return (
    <div className="absolute right-0 top-0">
      <div className="py-4 px-4 bg-gradient-to-br from-[#1A0733] to-[#252A34] rounded-3xl text-center shadow-lg flex flex-col items-center">
        <Link href={"/accounts/profile"}>
          <span className="cursor-pointer text-white hover:text-[#8C57F1] block transition-transform transform hover:scale-110">
            <RiSettings2Line size={40} />
          </span>
        </Link>
      </div>
    </div>
  );
}
