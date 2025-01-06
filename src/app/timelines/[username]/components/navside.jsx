/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine } from "@remixicon/react";

export default function Navside() {
  const router = useRouter(); // Get the router for navigation

  // Function to handle back navigation
  function handleBack() {
    router.back(); // Navigate back to the previous page
  }

  return (
    <div className="absolute top-4 left-4 flex items-center z-10">
      {/* Back Button */}
      <span
        className="cursor-pointer text-white hover:text-[#472475] transition-transform transform hover:scale-110"
        onClick={handleBack}
      >
        <RiArrowLeftLine size={40} />
      </span>
    </div>
  );
}