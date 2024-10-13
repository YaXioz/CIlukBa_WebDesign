/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { getTimeline, getTimelines } from "../../../actions/timeline";
import { getPosts } from "../../../actions/post";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [posts, setPosts] = useState([]);
  const [timelines, setTimelines] = useState([]);
  const [timeline, setTimeline] = useState({});

  let prevYear = null;
  let nextYear = null;
  timelines.forEach((val, i) => {
    if (val.year == params.slug[1]) {
      prevYear = timelines[i - 1]?.year ?? null;
      nextYear = timelines[i + 1]?.year ?? null;
      return;
    }
  });

  useEffect(() => {
    getTimelinesAll();
    getTimelineAll();
    getPostsAll();
  });

  async function getPostsAll() {
    setPosts((await getPosts(timeline.id)) ?? []);
  }

  async function getTimelinesAll() {
    setTimelines(await getTimelines(params.slug[0]));
  }

  async function getTimelineAll() {
    setTimeline(await getTimeline(params.slug[0], params.slug[1]));
  }

  return (
    <div>
      {/* Main timeline year section */}
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <div className="text-center text-[#6E27D1] text-[150px] lg:text-[300px] font-semibold font-['Montserrat'] tracking-wide">{timeline?.year}</div>
      </div>

      {/* Posts */}
      {posts.map((post, i) => (
        <div key={i}>
          {/* Glowing Divider */}
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#6E27D1] to-[#A87FF3]"></div>

          {/* Post Content */}
          <div className="h-screen w-screen bg-white flex xl:flex-row flex-col justify-around items-center" key={i}>
            {/* Text Section */}
            <div className="text-[#4f4f4f] xl:w-[35vw] w-[70vw]">
              <div className="w-full text-center font-semibold text-5xl py-3">{post?.event_date}</div>
              <div className="w-full text-justify font-normal text-2xl py-3">{post?.description}</div>
            </div>

            {/* Image Section */}
            <div>
              <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${post?.image}`} alt="" className="w-[550px] h-[550px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      ))}

      {/* Another Divider */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-[#6E27D1] to-[#A87FF3]"></div>

      {/* Navigation (Prev, Next, Back) */}
      <div className="h-[25vh] w-screen bg-white flex flex-row justify-around items-center">
        {/* Previous Year Button */}
        {prevYear ? (
          <Link href={`/posts/${params.slug[0]}/${prevYear}`}>
            <div className="text-[#6E27D1] text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold font-['Montserrat'] hover:scale-105 transition-transform duration-300">Prev</div>
          </Link>
        ) : (
          <div className="cursor-default text-[#6E27D1] opacity-70 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold">Prev</div>
        )}

        {/* Back to Timeline Button */}
        <Link href={`/timelines/${params.slug[0]}`}>
          <div className="bg-gradient-to-b from-[#6E27D1] to-[#A87FF3] py-[1.6vh] px-[2vw] rounded-full text-base md:text-lg font-semibold text-white text-center hover:shadow-[0_0_12px_#A87FF3] transition-shadow">Back to Timeline</div>
        </Link>

        {/* Next Year Button */}
        {nextYear ? (
          <Link href={`/posts/${params.slug[0]}/${nextYear}`}>
            <div className="text-[#6E27D1] text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold font-['Montserrat'] hover:scale-105 transition-transform duration-300">Next</div>
          </Link>
        ) : (
          <div className="cursor-default text-[#6E27D1] opacity-70 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold">Next</div>
        )}
      </div>
    </div>
  );
}
