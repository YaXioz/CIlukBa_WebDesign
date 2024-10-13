"use client";
import { update } from "../../../../../actions/timeline";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion"; // Import motion for animation effects
import Link from "next/link"; // Import Link from Next.js

export default function Page({ params }) {
  const [state, action] = useFormState(update, undefined);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form action={action} className="w-full max-w-md bg-[#1A0733] p-6 rounded-lg shadow-lg">
        <div className="grid mb-6">
          <label htmlFor="year" className="mb-2 text-[#f5f5f5] font-semibold">
            Year
          </label>
          <input
            className="bg-[#1A0733] p-2 text-white border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]"
            id="year"
            type="number"
            name="year"
            value={`${params.year}`}
            placeholder="Enter timeline's year"
          />
        </div>
        {state?.errors?.year && <p className="text-red-500">{state.errors.year}</p>}

        <div className="grid mb-6">
          <label htmlFor="image_1" className="mb-2 text-[#f5f5f5] font-bold">
            Image 1
          </label>
          <input className="bg-[#1A0733] text-white p-2 border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]" id="image_1" name="image_1" type="file" placeholder="Upload your image" />
        </div>
        {state?.errors?.image_1 && <p className="text-red-500">{state.errors.image_1}</p>}

        <div className="grid mb-6">
          <label htmlFor="image_2" className="mb-2 text-[#f5f5f5] font-bold">
            Image 2
          </label>
          <input className="bg-[#1A0733] text-white p-2 border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]" id="image_2" name="image_2" type="file" placeholder="Upload your image" />
        </div>
        {state?.errors?.image_2 && <p className="text-red-500">{state.errors.image_2}</p>}

        <div className="grid mb-6">
          <label htmlFor="image_3" className="mb-2 text-[#f5f5f5] font-bold">
            Image 3
          </label>
          <input className="bg-[#1A0733] text-white p-2 border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]" id="image_3" name="image_3" type="file" placeholder="Upload your image" />
        </div>
        {state?.errors?.image_3 && <p className="text-red-500">{state.errors.image_3}</p>}

        <div className="mt-12 flex justify-center">
          <SubmitButton />
        </div>

        {/* Back to Account button */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-40 h-10 mt-8 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
        >
          <Link href={"/accounts"}>
            <div className="text-white mt-2 ml-3 font-semibold">Back to TimeLine</div>
          </Link>
        </motion.div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-32 h-10 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
      disabled={pending}
      type="submit"
    >
      <div className="relative text-center text-white font-semibold z-10">{pending ? "Updating..." : "Update!"}</div>
    </motion.button>
  );
}
