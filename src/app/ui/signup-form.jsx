/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { signup } from "../../actions/auth";
import Link from "next/link";
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute container mt-14 pb-10 px-6 text-white/80 md:px-12 xl:px-40">
        <div className="flex justify-center mb-10">
          <img src="/image/logo-white.png" alt="Logo" className="h-10 md:h-10 lg:h-12" />
        </div>
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl shadow-lg bg-black/5 [box-shadow:1px_1px_50px_var(--tw-shadow-color)] shadow-[#6E27D1]/60">
            <div className="p-6 sm:p-16">
              <div className="text-center text-3xl font-semibold mb-5 text-white">Create an Account</div>
              <div className="w-3/4 bg-[#4B5563] h-[1px] mx-auto mb-8"></div>
              <form action={action} className="space-y-6">
                <div className="grid">
                  <label className="mb-2 text-gray-300 font-semibold" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="bg-purple-500/20 focus:bg-purple-500/30 p-3 text-white/70 outline-none placeholder:text-white/35 rounded-xl w-full transition-all duration-300 ease-in-out"
                    id="username"
                    name="username"
                    placeholder="JohnDoe"
                    type="text"
                  />
                </div>
                {state?.errors?.username && <p className="text-red-500 text-sm md:text-base">{state.errors.username}</p>}

                <div className="grid">
                  <label htmlFor="email" className="mb-2 text-gray-300 font-semibold">
                    Email
                  </label>
                  <input
                    className="bg-purple-500/20 focus:bg-purple-500/30 p-3 text-white/70 outline-none placeholder:text-white/35 rounded-xl w-full transition-all duration-300 ease-in-out"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                {state?.errors?.email && <p className="text-red-500 text-sm md:text-base">{state.errors.email}</p>}

                <div className="grid relative">
                  <label htmlFor="password" className="mb-2 text-gray-300 font-semibold">
                    Password
                  </label>
                  <input
                    className="bg-purple-500/20 focus:bg-purple-500/30 p-3 text-white/70 outline-none placeholder:text-white/35 rounded-xl w-full transition-all duration-300 ease-in-out"
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <div className="absolute top-11 right-4 cursor-pointer text-white/50 md:top-11" onClick={togglePasswordVisibility}>
                    {showPassword ? <AiOutlineEyeInvisible size={26} /> : <AiOutlineEye size={26} />}
                  </div>
                </div>
                {state?.errors?.password && (
                  <div className="text-red-500 text-sm md:text-base">
                    <p>Password must:</p>
                    <ul>
                      {state.errors.password.map((error) => (
                        <li key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid">
                  <label htmlFor="name" className="mb-2 text-gray-300 font-semibold">
                    Name
                  </label>
                  <input
                    className="bg-purple-500/20 focus:bg-purple-500/30 p-3 text-white/70 outline-none placeholder:text-white/35 rounded-xl w-full transition-all duration-300 ease-in-out"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                {state?.errors?.name && <p className="text-red-500 text-sm md:text-base">{state.errors.name}</p>}

                <SubmitButton />
              </form>

              <div className="mt-6 text-center">
                <Link className="text-white hover:text-purple-400 transition duration-200 ease-in-out text-sm md:text-base" href="/signin">
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
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-36 h-10 top-1 left-[165px] flex items-center justify-center cursor-pointer rounded-full bg-gradient-to-b from-[#6E27D1] to-[#A87FF3] shadow-[0px_0px_12px_#8c45ff] overflow-hidden mx-auto"
      disabled={pending}
      type="submit"
    >
      <div className="flex text-center text-white font-semibold text-sm md:text-base">
        {pending ? "Creating Account..." : "Create Account!"}
      </div>
    </motion.button>
  );
}
