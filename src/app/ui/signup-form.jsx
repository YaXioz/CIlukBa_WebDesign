/* eslint-disable @next/next/no-img-element */
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "../../actions/auth";
import Link from "next/link";

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <div className="relative py-12 bg-[#171D22] min-h-screen">
      <div className="relative container m-auto px-6 md:text-black text-gray-500 md:px-12 xl:px-40">
        <div class="flex justify-center mb-10">
          {" "}
          <img src="/image/logo-white.png" alt="Logo" class="h-12" />{" "}
        </div>
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-[#f5f5f5] shadow-lg shadow-[#121212]">
            <div className="p-6 sm:p-16">
              <div className="text-center text-3xl  mb-5">Lets create Account!</div>
              <div className="w-3/4 bg-[#bbbbbb] h-[1px] mx-auto mb-8"></div>
              <form action={action}>
                <div className="grid mb-6">
                  <label className="mb-2 text-[#333333] font-semibold" htmlFor="username">
                    Username
                  </label>
                  <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="username" name="username" placeholder="JohnDoe" />
                </div>
                {state?.errors?.username && <p>{state.errors.username}</p>}

                <div className="grid mb-6">
                  <label htmlFor="email" className="mb-2 text-[#333333] font-semibold">
                    Email
                  </label>
                  <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="email" name="email" placeholder="john@example.com" />
                </div>
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div className="grid mb-6">
                  <label htmlFor="password" className="mb-2 text-[#333333] font-semibold">
                    Password
                  </label>
                  <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="password" name="password" type="password" placeholder="Enter your password" />
                </div>
                {state?.errors?.password && (
                  <div>
                    <p>Password must:</p>
                    <ul>
                      {state.errors.password.map((error) => (
                        <li key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="grid mb-6">
                  <label htmlFor="name" className="mb-2 text-[#333333] font-semibold">
                    Name
                  </label>
                  <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="name" name="name" placeholder="John Doe" />
                </div>
                {state?.errors?.name && <p>{state.errors.name}</p>}
                <SubmitButton />
              </form>
              <div className="mt-5">
                <Link className="text-blue-400 hover:text-blue-900" href="/signin">
                  Already have an account?
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
        <button className="text-center text-white font-semibold z-10" disabled={pending} type="submit">
          Create Account!
        </button>
      </div>
    </div>
  );
}
