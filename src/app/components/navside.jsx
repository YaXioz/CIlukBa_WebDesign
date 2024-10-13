/* eslint-disable @next/next/no-img-element */
"use client";
import { logout } from "@/actions/auth";
import { RiHome5Line, RiLogoutBoxLine, RiSearchLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { getUser } from "../../actions/profile";
import { useEffect, useState } from "react";
import SearchBox from "./searchBox";
import { useRouter } from "next/navigation";

export default function Navside() {
  const [username, setusername] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const router = useRouter(); // Mengambil router untuk mengetahui path saat ini

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const user = (await getUser()).username ?? "";
    setusername(user);
  }

  function handleClickSearch() {
    setSearchActive(!searchActive);
  }

  return (
    <div className="absolute  flex flex-row gap-3 items-center z-10">
      {/* Futuristic Sidebar */}
      <div className="py-6 px-4 bg-gradient-to-br from-[#1A0733] to-[#252A34] text-white rounded-3xl text-center shadow-xl flex flex-col gap-8 items-center transition-all duration-300">
        {/* Logo */}
        <Link href="/">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8C57F1] to-[#3a1390] flex justify-center items-center shadow-lg">
              <img src="/image/logo-white.png" alt="alt placeholder" className="w-9 h-9 mx-auto" />
            </div>
          </div>
        </Link>

        {/* Home Icon */}
        <Link href={`/timelines/${username}`}>
          <span className="cursor-pointer text-white hover:text-[#8C57F1] px-2 block transition-transform transform hover:scale-110">
            <RiHome5Line size={40} />
          </span>
        </Link>

        {/* Search Icon */}
        <span className="cursor-pointer text-white hover:text-[#8C57F1] px-2 block transition-transform transform hover:scale-110" onClick={() => handleClickSearch()}>
          <RiSearchLine size={40} />
        </span>

        {/* Profile Icon with Highlight based on Route */}
        <Link href={"/accounts"}>
          <span
            className={`cursor-pointer px-2 block relative transition-transform transform hover:scale-110
            ${router.pathname === "/accounts" ? "text-[#8C57F1] scale-110" : "text-white hover:text-[#8C57F1]"}`} // Kondisi untuk highlight
          >
            <Image src="/image/profile-picture.png" alt="alt placeholder" width={40} height={40} className="rounded-full bg-[#666666]" />
            {/* Notification Badge */}
            <span className="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-[#252A34]">3</span>
          </span>
        </Link>

        {/* Logout Icon */}
        <form action={logout}>
          <button type="submit">
            <span className="cursor-pointer text-white hover:text-[#8C57F1] px-2 block transition-transform transform hover:scale-110">
              <RiLogoutBoxLine size={40} />
            </span>
          </button>
        </form>
      </div>

      {/* Search Box */}
      <SearchBox status={searchActive} />
    </div>
  );
}
