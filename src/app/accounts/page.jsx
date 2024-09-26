/* eslint-disable @next/next/no-img-element */
"use client";

import { logout } from "../../actions/auth";
import Navside from "./components/navside";

export default function Page() {
  return (
    <div className="container">
      <div className="p-4 pt-0 mx-auto flex flex-wrap">
        <Navside></Navside>
      </div>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
