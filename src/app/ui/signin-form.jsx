/* eslint-disable @next/next/no-img-element */
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signin } from "../../actions/auth";
import Link from "next/link";

export default function SigninForm() {
  const [state, action] = useFormState(signin, undefined);

  return (
    <div className="relative py-12 bg-[#171D22] min-h-screen">
      <div className="relative container m-auto px-6 md:text-black text-gray-500 md:px-12 xl:px-40">
        <div class="flex justify-center mb-10">
          {" "}
          <img src="/image/logo-white.png" alt="Logo" class="h-12" />{" "}
        </div>
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-[#f5f5f5] shadow-lg shadow-[#121212]">
            <div className="p-6 sm:p-10">
              <div className="text-center text-3xl  mb-5">Welcome Back!</div>
              <div className="w-3/4 bg-[#bbbbbb] h-[1px] mx-auto mb-8"></div>
              <form action={action}>
                <div className="grid mb-6">
                  <label htmlFor="email" label className="mb-2 text-[#333333] font-semibold">
                    Email
                  </label>
                  <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="email" name="email" placeholder="john@example.com" />
                </div>
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div className="grid mb-6">
                  <label htmlFor="password" label className="mb-2 text-[#333333] font-bold ">
                    Password
                  </label>
                  <input className="bg-[#d9d9d9] text-black p-2 rounded-lg" id="password" name="password" type="password" placeholder="Enter your password" />
                </div>
                {state?.errors?.password && <p>{state.errors.password}</p>}
                <div className="mt-12 flex justify-center">
                  <SubmitButton />
                </div>
              </form>
              <div className="mt-6">
                <Link className="text-blue-400 hover:text-blue-900" href="/signup">
                  Don&apos;t have an account?
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
      <div class="h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
      <div className="text-center text-white font-semibold z-10 w-full">Sign In!</div>
      <div class="h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
    </button>
  );
}
