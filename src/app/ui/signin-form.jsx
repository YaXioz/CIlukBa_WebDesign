"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "../../actions/auth";
import Link from "next/link";

export default function SigninForm() {
  const [state, action] = useFormState(login, undefined);

  return (
    <div className="relative py-16 bg-[#212121] min-h-screen">
      <div className="relative container m-auto px-6 md:text-black text-gray-500 md:px-12 xl:px-40">
        <div class="flex justify-center mb-4">
          {" "}
          <img src="/image/logo-white.png" alt="Logo" class="h-12" />{" "}
        </div>
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-[#1a1a1a] shadow-lg shadow-white">
            <div className="p-6 sm:p-16">
              <form action={action}>
                <div className="grid mb-6">
                  <label htmlFor="email" label className="mb-4 text-white">
                    Email
                  </label>
                  <input className="bg-gray-200 p-2 text-black rounded-lg" id="email" name="email" placeholder="john@example.com" />
                </div>
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div className="grid mb-6">
                  <label htmlFor="password" label className="mb-4 text-white">
                    Password
                  </label>
                  <input className="bg-gray-200 text-black p-2 rounded-lg" id="password" name="password" type="password" placeholder="Enter your password" />
                </div>
                {state?.errors?.password && <p>{state.errors.password}</p>}

                <SubmitButton />
              </form>
              <div className="mt-5">
                <Link className="text-white" href="signup">
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
    <div className="flex justify-center">
      <div class="b mx-auto h-16 w-64 flex justify-center items-center">
        <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
        <button className="text-center text-white font-semibold z-10 pointer-events-none" disabled={pending} type="submit">
          Sign In!
        </button>
      </div>
    </div>
  );
}
