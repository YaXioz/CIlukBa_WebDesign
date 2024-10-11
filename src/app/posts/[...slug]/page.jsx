/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { getTimeline, getTimelines } from "../../../actions/timeline";
import { getPosts } from "../../../actions/post";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  // console.log(`params 1: ${params.slug[0]}`);
  // console.log(`params 2: ${params.slug[1]}`);
  const [posts, setPosts] = useState([]);
  const [timelines, setTimelines] = useState([]);
  const [timeline, setTimeline] = useState({});

  // const timelines = await getTimelines(params.slug[0]);
  let prevYear = null;
  let nextYear = null;
  timelines.forEach((val, i) => {
    if (val.year == params.slug[1]) {
      prevYear = timelines[i - 1]?.year ?? null;
      nextYear = timelines[i + 1]?.year ?? null;
      return;
    }
  });
  // const timeline = await getTimeline(params.slug[0], params.slug[1]);
  // const posts = (await getPosts(timeline.id)) ?? [];
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
      <div className="h-screen w-screen bg-[#e7f4ff] flex justify-center items-center">
        <div className=" text-center text-[#4f95ff] text-[150px] lg:text-[300px] font-semibold font-['Montserrat']">{timeline?.year}</div>
      </div>
      {posts.map((post, i) => (
        <div key={i}>
          <div className="w-full h-[1.5px]  bg-black"></div>
          <div className="h-screen w-screen bg-[#e7f4ff] flex flex-row justify-around items-center" key={i}>
            <div className="text-[#101018]  w-[35vw]">
              <div className="w-full text-center  font-semibold text-5xl py-3">{post?.event_date}</div>
              <div className="w-full text-justify font-normal text-2xl py-3">{post?.description}</div>
            </div>
            <div>
              <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${post?.image}`} alt="" className="w-[550px] h-[550px] object-cover" />
            </div>
          </div>
        </div>
      ))}
      <div className="w-full h-[1.5px]  bg-black"></div>
      <div className="h-[25vh] w-screen bg-[#e7f4ff] flex flex-row justify-around items-center">
        {prevYear ? (
          <Link href={`/posts/${params.slug[0]}/${prevYear}`}>
            <div className="text-[#4f95ff] text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold font-['Montserrat']">Prev</div>
          </Link>
        ) : (
          <div className="cursor-default text-[#4f95ff] opacity-70 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold font-['Montserrat']">Prev</div>
        )}
        <Link href={`/timelines/${params.slug[0]}`}>
          <div className="bg-[#4f95ff] py-[1.6vh] px-[2vw] rounded-full text-base md:text-lg font-semibold text-white text-center">Back to Timeline</div>
        </Link>
        {nextYear ? (
          <Link href={`/posts/${params.slug[0]}/${nextYear}`}>
            <div className="text-[#4f95ff] text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold font-['Montserrat']">Next</div>
          </Link>
        ) : (
          <div className="cursor-default text-[#4f95ff] opacity-70 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold font-['Montserrat']">Next</div>
        )}
      </div>
    </div>
  );
}
