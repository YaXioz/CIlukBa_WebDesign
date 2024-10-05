/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../../components/navside";
import { update } from "../../../actions/profile";
import { getUser } from "../../../actions/profile";
import { useFormState, useFormStatus } from "react-dom";
import Setting from "../../components/setting";
import { useEffect, useState } from "react";

export default function Page() {
  const [state, action] = useFormState(update, undefined);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const user = await getUser();
    setProfile(user);
    console.log(profile);
  };

  return (
    <div className="w-full flex bg-[#171D22]">
      <div className=" my-16 container flex justify-between gap-10 flex-row mx-auto ">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container  rounded-lg flex flex-col items-center h-screen">
          <div>
            <Image src="/image/profile-picture.png" alt="" width={100} height={90} className="rounded-full mb-6 bg-[#666666]" />
          </div>
          <form action={action}>
            <div className="grid mb-6">
              <label htmlFor="username" className="mb-2 text-[#333333] font-semibold">
                Username
              </label>
              <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="username" type="text" name="username" placeholder={`${profile.username}` ?? "Enter username"} />
            </div>
            {state?.errors?.username && <p>{state.errors.username}</p>}
            <div className="grid mb-6">
              <label htmlFor="name" className="mb-2 text-[#333333] font-semibold">
                Name
              </label>
              <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="name" type="text" name="name" placeholder={`${profile.name}` ?? "Enter your name"} />
            </div>
            {state?.errors?.name && <p>{state.errors.name}</p>}
            <div className="grid mb-6">
              <label htmlFor="bio" className="mb-2 text-[#333333] font-semibold">
                Bio
              </label>
              <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="bio" type="text" name="bio" placeholder={profile.bio ? `${profile.bio}` : "Enter your bio"} />
            </div>
            {state?.errors?.bio && <p>{state.errors.bio}</p>}
            <div className="grid mb-6">
              <label htmlFor="email" className="mb-2 text-[#333333] font-semibold">
                email
              </label>
              <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="email" type="email" name="email" placeholder={`${profile.email}` ?? "Enter email"} />
            </div>
            {state?.errors?.email && <p>{state.errors.email}</p>}
            <div className="grid mb-6">
              <label htmlFor="password" className="mb-2 text-[#333333] font-semibold">
                password
              </label>
              <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="password" type="password" name="password" placeholder={"Enter new password"} />
            </div>
            {state?.errors?.password && <p>{state.errors.password}</p>}
            <div className="mt-12 flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </div>
        <aside className="max-w-max">
          <Setting />
        </aside>
      </div>
    </div>
  );
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mx-auto h-16 w-64 flex justify-center items-center" disabled={pending} type="submit">
      <div className="h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
      <div className="text-center text-white font-semibold z-10 w-full">Create!</div>
      <div className="h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
    </button>
  );
}
