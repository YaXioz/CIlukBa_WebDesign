/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../../components/navside";
import Add from "@/app/components/add";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex bg-[#171D22]">
      <div className=" mt-16 container flex justify-between gap-8 flex-row mx-auto px-12">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container bg-[#171D22] rounded-lg flex flex-col items-center h-screen">
          <Link className="w-full" href={"/accounts"}>&lt; Back</Link>
          <h1 className="text-white font-bold text-5xl p-8 ">2024</h1> 
          <div className="Line w-[900px] h-[0.5px] bg-white"></div>  
          <div className="Group2 w-[860px] h-[264.62px] left-0 top-[275.64px] absolute"></div>
           <div className="Rectangle6 w-[279.32px] h-[264.62px] left-0 top-0 absolute bg-[#d9d9d9]"></div>
            <div className="Rectangle7 w-[279.32px] h-[264.62px] left-[290.34px] top-0 absolute bg-[#d9d9d9]"></div>
            <div className="Rectangle8 w- (279.32px] h-[264.62px] left-[580.68px] top-0 absolute bg-[#d9d9d9]"></div>
          </div>
        </div>
        <aside className="max-w-max">
          <Add />
        </aside>
      </div>
  );
}
