/* eslint-disable @next/next/no-img-element */
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signin } from "../../actions/auth";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function SigninForm() {
  const [state, action] = useFormState(signin, undefined);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="relative container mt-14 pb-32 px-6 text-white/80 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="flex justify-center mb-10">
            <img src="/image/logo-white.png" alt="Logo" className="h-12" />
          </div>
          <div className="rounded-xl shadow-lg bg-black/5 [box-shadow:1px_1px_50px_var(--tw-shadow-color)] shadow-[#6E27D1]/60">
            <div className="sm:py-12 sm:px-20 py-6 px-12 flex flex-col items-center">
              <div className="text-center text-3xl font-semibold mb-8">Welcome Back!</div>
              <div className="w-full bg-white/30 h-[2px] mx-auto mb-10"></div>

              <form action={action} method="post" className="w-full px-7">
                <div className="grid mb-8">
                  <input
                    className="bg-purple-500/20 focus:bg-purple-500/30 px-10 py-5 text-white/70 outline-none placeholder:text-white/35 rounded-2xl w-full"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}

                <div className="grid mb-12">
                  <input
                    className="bg-purple-500/20 focus:bg-purple-500/30 px-10 py-5 text-white/70 outline-none placeholder:text-white/35 rounded-2xl w-full"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {state?.errors?.password && <p className="text-red-500">{state.errors.password}</p>}

                <div className="flex justify-center">
                  <SubmitButton />
                </div>
              </form>

              <div className="mt-12 ps-8 self-start">
                <div className="inline"></div>
                <Link className="text-white ms-[110px] inline hover:text-purple-400" href="/signup">
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
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-32 h-10 mt-4 relative cursor-pointer rounded-full bg-gradient-to-b from-[#6E27D1] to-[#A87FF3] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
      disabled={pending}
      type="submit"
    >
      <div className="relative text-center text-white font-semibold z-10">
        {pending ? "Signing In..." : "Sign In"}
      </div>
    </motion.button>
  );
}