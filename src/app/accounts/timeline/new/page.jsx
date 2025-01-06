"use client";
import { create } from "../../../../actions/timeline";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from 'framer-motion';
import Link from "next/link"; 
import { useState } from "react"; // Import useState for managing year and file states

export default function Page() {
  const [state, action] = useFormState(create, undefined);
  const [year, setYear] = useState(2023); // Initialize year state
  const [fileNames, setFileNames] = useState(["", "", ""]); // Initialize file names state
  const [fileErrors, setFileErrors] = useState([false, false, false]); // Track file upload errors

  const incrementYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  const decrementYear = () => {
    setYear((prevYear) => (prevYear > 0 ? prevYear - 1 : 0)); // Prevent negative years
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value, 10);
    if (!isNaN(newYear)) {
      setYear(newYear); // Update year state if the input is a valid number
    }
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newFileNames = [...fileNames];
      newFileNames[index] = file.name; // Update the file name in the state
      setFileNames(newFileNames);
      setFileErrors((prev) => {
        const newErrors = [...prev];
        newErrors[index] = false; // Clear the error for this file
        return newErrors;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    let hasError = false;

    // Check for file uploads
    fileNames.forEach((fileName, index) => {
      if (!fileName) {
        hasError = true;
        setFileErrors((prev) => {
          const newErrors = [...prev];
          newErrors[index] = true; // Set error for this file
          return newErrors;
        });
      }
    });

    if (!hasError) {
      // If no errors, proceed with form submission
      action(); // Call the action to create the timeline
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A0733] to-[#2b1551]">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[#1A0733] p-6 rounded-lg shadow-lg">
        <div className="grid mb-6">
          <label htmlFor="year" className="mb-2 text-[#f5f5f5] text-2xl text-center font-semibold">
            Year
          </label>
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={decrementYear}
              className="bg-gradient-to-b from-[#2b1551] to-[#6b3db1] text-white rounded-l-lg p-2 border-2 border-[#8c45ff] focus:outline-none focus:ring-2 focus:ring-[#6E27D1] cursor-pointer"
            >
              -
            </motion.button>
            <input
              className="bg-[#1A0733] p-2 text-white border-2 border-[#8c45ff] rounded-lg mx-2 text-center w-20"
              id="year"
              type="number"
              name="year"
              value={year}
              onChange={handleYearChange} // Update year state on input change
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={incrementYear}
              className="bg-gradient-to-b from-[#2b1551] to-[#6b3db1] text-white rounded-r-lg p-2 border-2 border-[#8c45ff] focus:outline-none focus:ring-2 focus:ring-[#6E27D1] cursor-pointer"
            >
              +
            </motion.button>
 </div>
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
            {fileErrors[index - 1] && <p className="text-red-500">File {index} is required (.jpg, .jpeg, .png and .heic).</p>} {/* Show error if file is not uploaded */}
          </div>
        ))}

        <div className="mt-12 flex justify-center">
          <SubmitButton />
        </div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="w-40 h-12 mt-8 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
        >
          <Link href="/accounts">
            <div className="text-white text-center justify-center mt-3 font-semibold">
              Back to Account
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
      className="w-28 h-10 mt-8 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
      disabled={pending}
      type="submit"
    >
      <div className="relative text-center text-white font-semibold z-10">
        {pending ? "Creating..." : "Create!"}
      </div>
    </motion.button>
  );
}