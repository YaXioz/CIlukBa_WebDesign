"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "../../actions/auth";

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
      <div className="relative container m-auto px-6 md:text-black text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <form action={action}>
                <div className="grid mb-6">
                  <label className="mb-4" htmlFor="username">
                    Username
                  </label>
                  <input className="bg-gray-200 p-2 text-black rounded-lg" id="username" name="username" placeholder="JohnDoe" />
                </div>
                {state?.errors?.username && <p>{state.errors.username}</p>}

                <div className="grid mb-6">
                  <label htmlFor="email" className="mb-3">
                    Email
                  </label>
                  <input className="bg-gray-200 text-black p-2 rounded-lg" id="email" name="email" placeholder="john@example.com" />
                </div>
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div className="grid mb-6">
                  <label htmlFor="password">Password</label>
                  <input className="bg-gray-200 text-black p-2 rounded-lg" id="password" name="password" type="password" placeholder="Enter your password" />
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
                  <label htmlFor="name">Name</label>
                  <input className="bg-gray-200 text-black p-2 rounded-lg" id="name" name="name" placeholder="John Doe" />
                </div>
                {state?.errors?.name && <p>{state.errors.name}</p>}
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
