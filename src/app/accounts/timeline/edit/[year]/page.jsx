"use client";
import { update } from "../../../../../actions/timeline";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from 'framer-motion'; // Import motion for animation effects
import Link from "next/link"; // Import Link from Next.js
import { useState } from "react"; // Import useState for managing file states

export default function Page({ params }) {
  const [state, action] = useFormState(update, undefined);
  const [fileNames, setFileNames] = useState(["", "", ""]); // Initialize file names state

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newFileNames = [...fileNames];
      newFileNames[index] = file.name; // Update the file name in the state
      setFileNames(newFileNames);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A0733] to-[#2b1551]">
      <form action={action} className="w-full max-w-lg bg-[#1A0733] p-6 rounded-lg shadow-lg">
        <div className="grid mb-6">
          <label htmlFor="year" className="mb-2 text-[#f5f5f5] font-semibold">
            Year
          </label>
          <input
            className="bg-[#1A0733] p-2 text-white border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1] w-full"
            id="year"
            type="number"
            name="year"
            value={params.year} // Use the year from params
          />
          {state?.errors?.year && <p className="text-red-500">{state.errors.year}</p>}
        </div>

        {[1, 2, 3].map((index) => (
          <div key={index} className="grid mb-6">
            <label htmlFor={`image_${index}`} className="mb-2 text-[#f5f5f5] font-bold">
              Image {index}
            </label>
            <div className="relative">
              <input
                className="absolute inset-0 opacity-0 cursor-pointer"
                id={`image_${index}`}
                name={`image_${index}`}
                type="file"
                accept="image/*"
                onChange={(event) => handleFileChange(index - 1, event)} // Update file name on change
              />
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-b from-[#2b1551] to-[#6b3db1] text-white rounded-lg p-2 w-full border-2 border-[#8c45ff] focus:outline-none focus:ring-2 focus:ring-[#6E27D1] cursor-pointer"
              >
                {fileNames[index - 1] || `Choose File ${index}`} {/* Show file name or default text */}
              </motion.button>
            </div>
            {state?.errors?.[`image_${index}`] && <p className="text-red-500">{state.errors[`image_${index}`]}</p>}
          </div>
        ))}

        <div className="mt-12 flex justify-center">
          <SubmitButton />
        </div>

        {/* Back to Account button */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="w-40 h-12 mt-8 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
        >
          <Link href={"/accounts"}>
            <div className="text-white text-center justify-center mt-3 font-semibold">
              Back to TimeLine
            </div>
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
      whileTap={{ scale: 0.95 }}
      className="w-28 h-10 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
      disabled={pending}
      type="submit"
    >
      <div className="relative text-center text-white font-semibold z-10">
        {pending ? "Updating..." : "Update!"}
      </div>
    </motion.button>
  );
}