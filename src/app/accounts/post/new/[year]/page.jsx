"use client";
import { create } from "../../../../../actions/post";
import { useFormState, useFormStatus } from "react-dom";

export default function Page({ params }) {
  const [state, action] = useFormState(create, undefined);

  return (
    <form action={action}>
      <input type="hidden" name="year" value={params.year} />
      {state?.errors?.year && <p>{state.errors.year}</p>}

      <div className="grid mb-6">
        <label htmlFor="image" className="mb-2 text-[#333333] font-bold ">
          Image
        </label>
        <input className="bg-[#d9d9d9] text-black p-2 rounded-lg" id="image" name="image" type="file" placeholder="Upload your image" />
      </div>
      {state?.errors?.image && <p>{state.errors.image}</p>}
      <div className="grid mb-6">
        <label htmlFor="description" className="mb-2 text-[#333333] font-semibold">
          Description
        </label>
        <input className="bg-[#d9d9d9] p-2 text-black rounded-lg" id="description" type="text" name="description" placeholder="Describe your post" />
      </div>
      {state?.errors?.description && <p>{state.errors.description}</p>}
      <div className="grid mb-6">
        <label htmlFor="event_date" className="mb-2 text-[#333333] font-bold ">
          Event date
        </label>
        <input className="bg-[#d9d9d9] text-black p-2 rounded-lg" id="event_date" name="event_date" type="date" placeholder="Select date" />
      </div>
      {state?.errors?.event_date && <p>{state.errors.event_date}</p>}
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
