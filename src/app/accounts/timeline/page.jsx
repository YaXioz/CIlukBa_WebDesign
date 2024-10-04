/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../../components/navside";
import Add from "@/app/components/add";
import Link from "next/link";
import { getTimeline } from "@/actions/timeline";

export default async function Page({ year }) {
  const timeline = await getTimeline(year);
  console.log(timeline);

  return (
    <div className="w-full flex bg-[#171D22]">
      <div className=" mt-16 container flex justify-between gap-8 flex-row mx-auto px-12">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container bg-[#171D22] rounded-lg flex flex-col items-center h-screen">
          <Link className="w-full" href={"/accounts"}>
            &lt; Back
          </Link>
          <h1 className="text-white font-bold text-5xl p-8 ">2024</h1>
          <div className=" grid grid-cols-3 gap-3 border-t border-[#d9d9d9] p-2">
            <img src="/image/1.png" className="w-[240px] h-[240px] object-cover" alt="" />
          </div>
        </div>
        <aside className="max-w-max">
          <Add />
        </aside>
      </div>
    </div>
  );
}
