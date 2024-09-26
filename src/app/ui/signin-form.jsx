"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "../../actions/auth";

export default function SigninForm() {
  const [state, action] = useFormState(login, undefined);

  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
      <div className="relative container m-auto px-6 md:text-black text-gray-500 md:px-12 xl:px-40"> 
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
        <div className="rounded-xl bg-white shadow-xl">
          <div className="p-6 sm:p-16">
            
    <form action={action}>
      <div className="grid mb-6">
        <label htmlFor="email">Email</label>
        <input className="bg-gray-200 p-2 text-black rounded-lg" id="email" name="email" placeholder="john@example.com" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div className="grid mb-6">
        <label htmlFor="password">Password</label>
        <input className="bg-gray-200 text-black p-2 rounded-lg" id="password" name="password" type="password" placeholder="enter your password" />
      </div>
      {state?.errors?.password && <p>{state.errors.password}</p>}

      <SubmitButton />
    </form>
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
      <button className="bg-gray-800 text-white p-2 rounded-lg" disabled={pending} type="submit">
        Sign Up
      </button>
    </div>
  );
}
