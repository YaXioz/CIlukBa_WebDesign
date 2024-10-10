/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { logout } from "../../../../actions/auth";
import Navside from "../../../components/navside";
import Add from "@/app/components/add";
import Link from "next/link";
import { getTimeline } from "@/actions/timeline";
import { getPosts } from "@/actions/post";
import { isEmpty } from "@/lib/utils";
import { RiAddLine, RiPencilLine } from "@remixicon/react";
import Setting from "@/app/components/setting";

export default async function Page({ params }) {
  const timeline = await getTimeline(params?.year);
  const posts = await getPosts(timeline?.id);
  // console.log(timeline);

  return (
    <div className="w-full flex bg-[#171D22]">
      <div className=" mt-16 container flex justify-between gap-8 flex-row mx-auto px-12">
        <aside className="max-w-max">
          <Navside></Navside>
        </aside>
        <div className="container bg-[#171D22] rounded-lg flex flex-col items-center h-screen">
          <Link className="w-full" href={"/accounts"}>
            &lt; Back
          </Link>
          <h1 className="text-white font-bold text-5xl p-8 ">{params.year}</h1>
          {isEmpty(posts) ? (
            <div className="text-center w-[70vh] border-t border-[#d9d9d9] p-10">No post has created</div>
          ) : (
            <div className="grid grid-cols-3 gap-3 border-t border-[#d9d9d9] p-5">
              {posts?.map((post, i) => (
                <Link href={`/post/${post?.url}`} key={i} className="">
                  <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${post?.image}`} className="w-[240px] h-[240px] object-cover  hover:contrast-[.8]" alt="" />
                </Link>
              ))}
            </div>
          )}
          <div className="absolute bottom-0 w-16 h-32 bg-[#171d22] left-1/2">
            <div className="py-4 px-4  bg-[#f5f5f5] rounded-3xl text-center shadow-lg flex flex-col items-center">
              <Link href={`/accounts/post/new/${params.year}`}>
                <span className="cursor-pointer text-gray-500 hover:text-black block ">
                  <RiAddLine size={40} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <aside className="max-w-max">
          <div className="sticky top-16">
            <div className="py-4 px-4  bg-[#f5f5f5] rounded-3xl text-center shadow-lg flex flex-col items-center">
              <Link href={`/accounts/timeline/edit/${params.year}`}>
                <span className="cursor-pointer text-gray-500 hover:text-[#333333] block ">
                  <RiPencilLine size={40} />
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
