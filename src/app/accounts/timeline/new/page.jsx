"use client";
import { create } from "../../../../actions/timeline";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const [state, action] = useFormState(create, undefined);

  return (
    <form action={action}>
      <div className="grid mb-6">
        <label htmlFor="year" className="mb-2 text-[#333333] font-semibold">
          year
        </label>
        <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="year" type="number" name="year" placeholder="2023" />
      </div>
      {state?.errors?.year && <p>{state.errors.year}</p>}

      <div className="grid mb-6">
        <label htmlFor="image_1" className="mb-2 text-[#333333] font-bold ">
          Image 1
        </label>
        <input className="bg-[#d9d9d9] text-black p-2 rounded-lg" id="image_1" name="image_1" type="file" placeholder="Upload your image" />
      </div>
      {state?.errors?.image_1 && <p>{state.errors.image_1}</p>}
      <div className="grid mb-6">
        <label htmlFor="image_2" className="mb-2 text-[#333333] font-bold ">
          Image 2
        </label>
        <input className="bg-[#d9d9d9] text-black p-2 rounded-lg" id="image_2" name="image_2" type="file" placeholder="Upload your image" />
      </div>
      {state?.errors?.image_2 && <p>{state.errors.image_2}</p>}
      <div className="grid mb-6">
        <label htmlFor="image_3" className="mb-2 text-[#333333] font-bold ">
          Image 3
        </label>
        <input className="bg-[#d9d9d9] text-black p-2 rounded-lg" id="image_3" name="image_3" type="file" placeholder="Upload your image" />
      </div>
      {state?.errors?.image_3 && <p>{state.errors.image_3}</p>}
      <div className="mt-12 flex justify-center">
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mx-auto h-16 w-64 flex justify-center items-center" disabled={pending} type="submit">
      <div className="h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
      <div className="text-center text-white font-semibold z-10 w-full">Create!</div>
      <div className="h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-900 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
    </button>
  );
}
