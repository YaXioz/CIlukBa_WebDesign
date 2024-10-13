"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* eslint-disable @next/next/no-img-element */
export default function ZoomTimeline({ timelines, username }) {
  const [contentIndex, setContentIndex] = useState(0); // Menyimpan indeks konten yang akan diganti
  const main = useRef();

  useGSAP(
    () => {
      // const sectionHeight = (document.body.scrollHeight - window.innerHeight) / 5;
      // const slides = gsap.utils.toArray(".slide");
      // slides.forEach((slide, index) => {});
      // gsap.to("#circle img", {
      //   scale: 5,
      //   translateX: -300,
      //   translateY: -200,
      //   stagger: 0.25,
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: "#circle",
      //     pin: true,
      //     end: `+=${innerHeight * 1.3}`,
      //     scrub: 1,
      //   },
      // });
      // let iteration = 0;
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#image",
            pin: true,
            end: `+=${innerHeight * 5}`,
            scrub: 1,
          },

          repeat: timelines.length - 1,

          // onRepeat: () => {
          //   // iteration += 1;
          //   // const newIndex = iteration;
          //   setContentIndex(contentIndex + 1);
          // },
          yoyo: false,
        })
        .to("#circle ", {
          scale: 2,
          stagger: 0.25,
          duration: 2,
          opacity: 0.9,
          delay: 0.1,
          onStart: () => {
            console.log("this iteration: " + tl.iteration());

            setContentIndex(tl.iteration() - 1);
          },
        })
        .to("#year", {
          opacity: 0.8,
          stagger: 0.25,
          duration: 2,
          delay: 0.1,
        })
        .to("#circle ", {
          scale: 6,
          stagger: 0.25,
          duration: 2,
          opacity: 0.75,
          delay: 0.1,
        })
        // .to("#year", {
        //   opacity: 0.8,
        //   stagger: 0.25,
        //   duration: 2,
        //   delay: 0.1,
        // })
        .to("#circle ", {
          scale: 10,
          stagger: 0.25,
          duration: 2,
          opacity: 0.6,
          delay: 0.1,
        })
        // .to("#year", {
        //   opacity: 0.8,
        //   stagger: 0.25,
        //   duration: 2,
        //   delay: 0.1,
        // })
        .to("#circle ", {
          scale: 14,
          stagger: 0.25,
          duration: 2,
          opacity: 0.45,
          delay: 0.1,
        })
        // .to("#year", {
        //   opacity: 0.6,
        //   stagger: 0.25,
        //   duration: 2,
        //   delay: 0.1,
        // })
        .to("#circle ", {
          scale: 18,
          stagger: 0.25,
          duration: 2,
          opacity: 0.3,
          delay: 0.1,
        })
        .to("#circle ", {
          scale: 22,
          stagger: 0.25,
          duration: 2,
          opacity: 0.15,
        })
        .to("#year", {
          opacity: 0.5,
          stagger: 0.25,
          duration: 2,
          delay: 0.1,
        })
        .to("#circle ", {
          scale: 24,
          stagger: 0.25,
          duration: 2,
          opacity: 0,
          onReverseComplete: () => {
            console.log("this iteration: " + tl.iteration());

            setContentIndex(tl.iteration() - 1);
          },
        })
        .to("#year", {
          opacity: 0,
          stagger: 0.25,
          duration: 2,
          delay: 0.1,
        });
    },
    { scope: main }
  );

  return (
    <div ref={main} className="bg-gradient-to-br from-purple-700 to-purple-800">
      <div id="image" className="max-h-[100vh] max-w-[100vw] py-[35vh]">
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="absolute lg:w-[900px] lg:h-[900px] md:w-[700px] md:h-[700px] sm:w-[550px] sm:h-[550px]  border border-white opacity-20 rounded-full top-1/2 left-1/2 "
        >
          <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
          className="absolute lg:h-[1210px] lg:w-[1210px] md:h-[950px] md:w-[950px] sm:h-[750px] sm:w-[750px] rounded-full border border-white/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
        ></motion.div>
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="absolute lg:h-[1675px] lg:w-[1675px] md:h-[1200px] md:w-[1200px] sm:h-[950px] sm:w-[950px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
        {/* <Link href={`/accounts/${timelines[contentIndex]?.year}`}> */}
        <Link
          href={`/posts/${username}/${timelines[contentIndex]?.year}`}
          id="year"
          className="cursor-pointer absolute top-1/2 left-0 right-0 mx-auto text-center text-9xl opacity-0 z-10  [text-shadow:1px_1px_50px_var(--tw-shadow-color)] shadow-gray-950"
        >
          {timelines[contentIndex]?.year}
        </Link>
        <div id="circle" className="bg-purple-900 rounded-full w-60 h-60 absolute top-1/2 left-0 right-0 mx-auto z-0">
          <div className="bg-purple-950 rounded-full opacity-60 w-3/5 h-3/5 absolute top-0 bottom-0 left-0 right-0 m-auto z-[1]"></div>
          <div className="relative z-[2]">
            <img className="h-12 w-12 bg-cover absolute top-16 left-8  rounded-full " src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${timelines[contentIndex]?.image_1}`} alt="" />
            <img className="h-12 w-12 bg-cover absolute top-10 right-10  rounded-full " src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${timelines[contentIndex]?.image_2}`} alt="" />
            <img className="h-12 w-12 bg-cover absolute top-40 left-28  rounded-full " src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${timelines[contentIndex]?.image_3}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
