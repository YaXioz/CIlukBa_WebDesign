"use client";
import { create } from "../../../../../actions/post";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from 'framer-motion';
import Link from "next/link"; // Import Link dari Next.js

export default function Page({ params }) {
  const [state, action] = useFormState(create, undefined);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#1A0733] to-[#2b1551]">
      <form action={action} className="bg-[#1A0733] p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
        <input type="hidden" name="year" value={params.year} />
        {state?.errors?.year && <p className="text-red-500">{state.errors.year}</p>}

        {/* Image Upload */}
        <div className="grid mb-6">
          <label htmlFor="image" className="mb-2 text-[#f5f5f5] font-bold">
            Image
          </label>
          <input
            className="bg-[#1A0733] border border-[#8c45ff] text-white p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-[#BB8FCE] focus:outline-none transition-all duration-300"
            id="image"
            name="image"
            type="file"
            placeholder="Upload your image"
          />
        </div>
        {state?.errors?.image && <p className="text-red-500">{state.errors.image}</p>}

        {/* Description */}
        <div className="grid mb-6">
          <label htmlFor="description" className="mb-2 text-[#f5f5f5] font-semibold">
            Description
          </label>
          <input
            className="bg-[#1A0733] border border-[#8c45ff] p-4 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-[#BB8FCE] focus:outline-none transition-all duration-300"
            id="description"
            type="text"
            name="description"
            placeholder="Describe your post"
          />
        </div>
        {state?.errors?.description && <p className="text-red-500">{state.errors.description}</p>}

        {/* Event Date */}
        <div className="grid mb-6">
          <label htmlFor="event_date" className="mb-2 text-[#f5f5f5] font-bold">
            Event Date
          </label>
          <input
            className="bg-[#1A0733] border border-[#8c45ff] text-white p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-[#BB8FCE] focus:outline-none transition-all duration-300"
            id="event_date"
            name="event_date"
            type="date"
            placeholder="Select date"
          />
        </div>
        {state?.errors?.event_date && <p className="text-red-500">{state.errors.event_date}</p>}

        {/* Submit Button */}
        <div className="mt-12 flex justify-center">
          <SubmitButton />
        </div>

        {/* Tombol Kembali ke Timeline */}
        <div className="mt-6 flex justify-center">
          <BackToTimelineButton />
        </div>
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
      className="w-32 h-10 mt-8 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
      disabled={pending}
      type="submit"
    >
      <div className="relative text-center text-white font-semibold z-10">
        {pending ? "Creating..." : "Create!"}
      </div>
    </motion.button>
  );
}

function BackToTimelineButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-36 h-10 mt-3 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
    >
      <Link href="/accounts"> {/* Ganti path sesuai rute timeline kamu */}
        <div className="relative text-center text-white mt-2 ml-1 font-semibold z-10">
          Back to Timeline
        </div>
      </Link>
    </motion.div>
  );
}
