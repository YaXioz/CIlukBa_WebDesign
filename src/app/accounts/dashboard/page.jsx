/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { getTimelines } from "@/actions/timeline";
import ZoomTimeline from "./components/zoomTimeline";
import { getUser } from "@/actions/profile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default async function Page() {
  const timelines = (await getTimelines()) ?? [];
  const username = (await getUser()).username;

  return (
    <div>
      <ZoomTimeline timelines={timelines} username={username} />
    </div>
  );
}
