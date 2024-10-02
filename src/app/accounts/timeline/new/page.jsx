export default function Page() {
  return (
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
