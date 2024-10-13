"use client";
import { getTimeline, getTimelineById } from "../../../../../actions/timeline";
import { update } from "@/actions/post";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion"; // Import motion for animation effects
import Link from "next/link"; // Import Link from Next.js
import { useEffect, useState } from "react";
import { getPost } from "@/actions/post";

export default function Page({ params }) {
  const [state, action] = useFormState(update, undefined);
  const [post, setPost] = useState({});
  const [timeline, setTimeline] = useState({});

  useEffect(() => {
    gettingPost();
    gettingTimeline();
  });

  const gettingPost = async () => {
    const res = await getPost(params.slug[1]);
    setPost(res);
  };
  const gettingTimeline = async () => {
    const res = await getTimelineById(post.timeline_id);
    setTimeline(res);
  };
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
            value={timeline?.year}
            placeholder="Enter timeline's year"
          />
        </div>
        {state?.errors?.year && <p className="text-red-500">{state.errors.year}</p>}

        <div className="grid mb-6">
          <label htmlFor="image" className="mb-2 text-[#f5f5f5] font-bold">
            Image
          </label>
          <input className="bg-[#1A0733] text-white p-2 border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]" id="image" name="image" type="file" placeholder="Upload your image" />
        </div>
        {state?.errors?.image && <p className="text-red-500">{state.errors.image}</p>}

        <div className="grid mb-6">
          <label htmlFor="description" className="mb-2 text-[#f5f5f5] font-bold">
            Description
          </label>
          <textarea
            className="bg-[#1A0733] text-white p-2 border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]"
            id="description"
            name="description"
            type="text"
            defaultValue={post?.description}
            placeholder={"Enter your Description"}
          />
        </div>
        {state?.errors?.description && <p className="text-red-500">{state.errors.description}</p>}

        <div className="grid mb-6">
          <label htmlFor="event_date" className="mb-2 text-[#f5f5f5] font-bold">
            Event Date
          </label>
          <input className="bg-[#1A0733] text-white p-2 border-2 border-[#8c45ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E27D1]" id="event_date" name="event_date" type="date" defaultValue={post?.event_date} />
        </div>
        {state?.errors?.event_date && <p className="text-red-500">{state.errors.event_date}</p>}
        <input type="hidden" name="url" value={params.slug[1]} />
        <div className="mt-12 flex justify-center">
          <SubmitButton />
        </div>

        {/* Back to Account button */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-40 h-10 mt-8 relative cursor-pointer rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
        >
          <Link href={`/accounts/timeline/${params.slug[0]}`}>
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
