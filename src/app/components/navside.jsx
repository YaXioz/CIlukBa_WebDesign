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
  const [user, setUser] = useState({});
  const [searchActive, setSearchActive] = useState(false);

  const router = useRouter(); // Mengambil router untuk mengetahui path saat ini

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const user = await getUser();
    setUser(user);
  }

  function handleClickSearch() {
    setSearchActive(!searchActive);
  }

  return (
    <div className="absolute  flex flex-row gap-3 items-center z-10">
      {/* Futuristic Sidebar */}
      <div className="py-3.5 px-1.5 md:py-6 md-px-4 lg:py-6 lg:px-4 bg-gradient-to-br from-[#1A0733] to-[#252A34] text-white rounded-3xl text-center shadow-xl flex flex-col gap-3 md:gap-6 lg:gap-8 items-center transition-all duration-300">
        {/* Logo */}
        <Link href="/">
          <div className="relative">
            <div className="w-11 h-11 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#8C57F1] to-[#3a1390] flex justify-center items-center shadow-lg">
              <img src="/image/logo-white.png" alt="alt placeholder" className="w-6 h-6 md:h-8 md:w-8 lg:w-9 lg:h-9 mx-auto" />
            </div>
          </div>
        </Link>

        {/* Home Icon */}
        <Link href={`/timelines/${user?.username}`}>
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
            <img
              src={user?.picture ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${user?.picture}` : "/image/profile-picture.png"}
              alt="alt placeholder"
              className="rounded-full bg-[#666666] w-[35px] h-[35px] md:w-[37px] md:h-[37px] lg:w-[40px] lg:h-[40px] object-cover"
            />
            {/* Notification Badge */}
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
