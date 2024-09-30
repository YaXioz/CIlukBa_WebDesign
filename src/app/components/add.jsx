"use client";
import { RiAddLine, RiSettings2Line } from "@remixicon/react";
import Link from "next/link";

export default function Add() {
  return (
    <div className="sticky top-16">
      <div className="py-4 px-4  bg-[#f5f5f5] rounded-3xl text-center shadow-lg flex flex-col items-center">
        <Link href={"/accounts/profile"}>
          <span className="cursor-pointer text-gray-500 hover:text-[#333333] block ">
            <RiAddLine size={40} />
          </span>
        </Link>
      </div>
    </div>
  );
}
