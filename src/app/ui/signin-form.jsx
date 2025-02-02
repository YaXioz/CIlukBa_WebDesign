/* eslint-disable @next/next/no-img-element */
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signin } from "../../actions/auth";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SigninForm() {
  const [state, action] = useFormState(signin, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="relative container mt-14 pb-32 px-6 text-white/80 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="flex justify-center mb-10">
            <img src="/image/logo-white.png" alt="Logo" className="h-14" />
          </div>
          <div className="rounded-xl shadow-lg bg-black/5 [box-shadow:1px_1px_50px_var(--tw-shadow-color)] shadow-[#6E27D1]/60">
            <div className="sm:py-12 sm:px-20 py-6 px-6 md:px-12 flex flex-col items-center">
              <div className="text-center text-3xl font-semibold mb-8">Welcome Back!</div>
              <div className="w-full bg-white/30 h-[2px] mx-auto mb-10"></div>

              <form action={action} method="post" className="w-full px-5 sm:px-10">
                <div className="grid mb-8">
                  <input className="bg-purple-500/20 focus:bg-purple-500/30 px-6 py-4 md:px-10 md:py-5 text-white/70 outline-none placeholder:text-white/35 rounded-2xl w-full" id="email" name="email" type="email" placeholder="Email" />
                </div>
                {state?.errors?.email && <p className="text-red-500 text-sm md:text-base">{state.errors.email}</p>}

                <div className="grid mb-12 relative">
                  <input 
                    className="bg-purple-500/20 focus:bg-purple-500/30 px-6 py-4 md:px-10 md:py-5 text-white/70 outline-none placeholder:text-white/35 rounded-2xl w-full" 
                    id="password" 
                    name="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                  />
                  <div 
                    className="absolute inset-y-0 right-5 flex items-center cursor-pointer text-white/70" 
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                  </div>
                </div>
                {state?.errors?.password && <p className="text-red-500 text-sm md:text-base">{state.errors.password}</p>}

                <div className="flex justify-center">
                  <SubmitButton />
                </div>
              </form>

              <div className="mt-5 ">
                <div className="inline"></div>
                <Link className="text-white inline hover:text-purple-400 text-sm md:text-base" href="/signup">
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-32 h-10 mt-2 relative cursor-pointer rounded-full bg-gradient-to-b from-[#6E27D1] to-[#A87FF3] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto md:w-40 md:h-12"
      disabled={pending}
      type="submit"
    >
      <div className="relative text-center text-white font-semibold z-10 text-sm md:text-base">{pending ? "Signing In..." : "Sign In"}</div>
    </motion.button>
  );
}
