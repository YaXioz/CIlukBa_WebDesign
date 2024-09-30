/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Page() {
  const main = useRef();

  useGSAP(
    () => {
      const sectionHeight = (document.body.scrollHeight - window.innerHeight) / 5;
      // const slides = gsap.utils.toArray(".slide");
      // slides.forEach((slide, index) => {});
      gsap.to("#circle img", {
        scale: 5,
        translateX: -300,
        translateY: -200,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
          trigger: "#circle",
          pin: true,
          end: `+=${innerHeight * 1.3}`,
          scrub: 1,
        },
      });
      gsap.to("#image #circle ", {
        scale: 5,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
          trigger: "#image",
          pin: true,
          end: `+=${innerHeight * 1.3}`,
          scrub: 1,
        },
      });
    },
    { scope: main }
  );

  return (
    <div ref={main} className="overflow-hidden">
      <div id="image" className="h-screen w-screen overflow-hidden z-[2]">
        <div id="circle" className="bg-blue-900 rounded-full w-48 h-48 absolute top-1/2 left-1/2 overflow-hidden z-[1]">
          <img className="h-10 w-10 bg-cover absolute top-1/3 left-1/4  rounded-full overflow-hidden z-[3]" src="/image/1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
