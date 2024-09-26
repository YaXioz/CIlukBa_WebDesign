/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { logout } from "../../actions/auth";

export default function Page() {
  return (
    <div className="container">
      <form action={() => logout()}></form>
      <button type="submit">Logout</button>
    </div>
  );
}
