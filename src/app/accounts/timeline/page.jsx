/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../components/navside";

export default function Page() {
  return (
    <div className="w-full flex">
      <div className=" mt-16 container flex justify-between gap-8 flex-row mx-auto px-12">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container bg-white rounded-lg flex flex-col items-center h-screen">
          <h1 className="text-black text-lg p-8">Timeline</h1>
          <form action={logout}>
            <button className="rounded-lg bg-black p-4 mt-3" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
