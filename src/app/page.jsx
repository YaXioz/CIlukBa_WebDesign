/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function onTap(event, info) {
  console.log(info.point.x, info.point.y);
}

function onTapStart(event, info) {
  console.log(info.point.x, info.point.y);
}

function onTapCancel(event, info) {
  console.log(info.point.x, info.point.y);
}

export default function Page() {
  return (
    <div className="w-screen h-screen relative bg-[#000000] overflow-hidden [mask-image:linear-gradient(to-bottom,transparent,black_10%,black_90%,transparent)]">
      {/* Center Planet */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute lg:w-[600px] lg:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      {/* Ring 1 */}
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
        className="absolute lg:w-[900px] lg:h-[900px] md:w-[700px] md:h-[700px] sm:w-[550px] sm:h-[550px] w-[250px] h-[250px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* Ring 2 */}
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
        className="absolute lg:h-[1300px] lg:w-[1300px] md:h-[950px] md:w-[950px] sm:h-[750px] sm:w-[750px] w-[450px] h-[450px] rounded-full border border-white/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>

      {/* Ring 3 */}
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
        className="absolute lg:h-[1675px] lg:w-[1675px] md:h-[1200px] md:w-[1200px] sm:h-[950px] sm:w-[950px] w-[650px] h-[650px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Web Logo */}
      <div className="flex justify-center pt-12 mb-12 z-10">
        <img src="/image/logo-white.png" alt="Logo" className="h-14" />
      </div>

      {/* Title */}
      <div className="tittle text-center lg:pt-40 md:pt-48 sm:pt-52 text-white lg:text-7xl md:text-6xl sm:text-5xl text-md font-bold tracking-tighter font-montserrat bg-white bg-[radial-gradient(100%_100%_at_bottom_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text z-10 relative">
        Looking Back, <br />
        Celebrating the Past
      </div>

      {/* SubTitle */}
      <div className="subTittle text-center lg:pt-5 md:pt-4 sm:pt-3 text-white/60 lg:text-2xl sm:text-base text-xs md:text-xl font-thin font-montserrat z-10 relative">Your personal page to show the precious moments in your life</div>

      {/* Start Button */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        whileHover={{
          scale: 1.2,
        }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{
          scale: 1,
        }}
        onTap={onTap}
        onTapStart={onTapStart}
        onTapCancel={onTapCancel}
        className="startButton lg:mt-24 md:mt-20 sm:mt-24 sm:top-0 top-[5%]  left-1/2 translate-x-[-50%] lg:w-[210px] lg:h-[50px] md:w-[190px] md:h-[45px] sm:w-[170px] sm:h-[43px] w-[120px] h-[30px] relative cursor-pointer py-2 px-3 rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10"
      >
        <div className="absolute inset-0">
          <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
        </div>
        <Link
          className="buttonText lg:left-[13px] md:left-[13px] sm:left-[12px] sm:-top-5 top-2 lg:mt-8 md:mt-8 sm:mt-8 absolute text-white lg:text-lg md:text-base sm:text-sm [font-size:0.6rem] [line-height:0.75rem] font-semibold font-montserrat"
          href="/signup"
        >
          Start Making Journey
        </Link>
      </motion.div>
    </div>
  );
}
