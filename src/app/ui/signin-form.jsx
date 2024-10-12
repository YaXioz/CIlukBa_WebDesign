/* eslint-disable @next/next/no-img-element */
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signin } from "../../actions/auth";
import Link from "next/link";

export default function SigninForm() {
  const [state, action] = useFormState(signin, undefined);

  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-black/65 from-20% via-black/55 via-80% to-black/45   min-h-screen">
      <div className="relative container pb-32 px-6  text-white/80 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl  shadow-lg bg-black/5 [box-shadow:1px_1px_50px_var(--tw-shadow-color)] shadow-[#121212]/60">
            <div className="sm:py-12 sm:px-20 py-6 px-12 flex flex-col items-center">
              <img src="/image/logo-white.png" alt="Logo" class="h-12 mb-8 opacity-75" />
              <div className="text-center text-3xl  mb-8">Welcome Back!</div>
              <div className="w-full bg-white/30 h-[2px] mx-auto mb-10"></div>
              <form action={action} className="w-full px-7">
                <div className="grid mb-8">
                  {/* <label htmlFor="email" label className="mb-2 text-[#333333] font-semibold">
                    Email
                  </label> */}
                  <input className="bg-purple-500/20  focus:bg-purple-500/30 px-10 py-5 text-white/70 outline-none placeholder:text-white/35 rounded-full w-full" id="email" name="email" placeholder="Email" />
                </div>
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div className="grid mb-12">
                  {/* <label htmlFor="password" label className="mb-2 text-[#333333] font-bold ">
                    Password
                  </label> */}
                  <input className="bg-purple-500/20  focus:bg-purple-500/30 px-10 py-5 text-white/70 outline-none placeholder:text-white/35 rounded-full w-full" id="password" name="password" type="password" placeholder="Password" />
                </div>
                {state?.errors?.password && <p>{state.errors.password}</p>}
                <div className=" flex justify-center">
                  <SubmitButton />
                </div>
              </form>
              <div className="mt-12 ps-7 self-start">
                <div className="inline">Don&apos;t have an account?</div>
                <Link className="text-white/50 ms-2 inline hover:text-white/80" href="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button class="mx-auto h-16 w-64 flex justify-center items-center" disabled={pending} type="submit">
      <div class="h-16 w-64 bg-gradient-to-br from-gray-900/30 to-gray-950/70 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-200 ease-out"></div>
      <div className="text-center text-white font-semibold z-10 w-full">Sign In!</div>
    </button>
  );
}
