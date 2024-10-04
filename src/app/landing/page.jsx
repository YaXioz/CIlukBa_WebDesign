"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-[#171d22]">
      <div class="flex justify-center pt-12 mb-12">
        {" "}
        <img src="/image/logo-white.png" alt="Logo" class="h-14" />{" "}
      </div>
      <div class="w-[700px] h-screen absolute top-0 left-[-300px] bg-gradient-to-t from-[#23B4DB] to-[#311996] rounded-r-full"></div>
      <div class="w-[450px] h-screen absolute top-0 left-[1470px] bg-gradient-to-t from-[#2A5578] to-[#171D22] rounded-e-full rotate-180"></div>
      <div class="w-[425px] h-[425px] absolute top-0 right-0 border-2 border-r-0 border-t-0 border-white rounded-bl-full"></div>
      <div class="w-[100px] h-[100px] absolute -top-14 right-24 border-2 border-t-0 border-b-0 border-l-0 border-white rounded-none rotate-45"></div>
      <div class="w-[100px] h-[100px] absolute top-4 right-24 border-2 border-t-0 border-b-0 border-l-0 border-white rounded-none -rotate-45"></div>
      <div class="w-[100px] h-[100px] absolute top-20 right-24 border-2 border-t-0 border-b-0 border-l-0 border-white rounded-none rotate-45"></div>
      <div class="w-[100px] h-[100px] absolute top-18 right-24 border-2 border-t-0 border-b-0 border-l-0 border-white rounded-none -rotate-45"></div>
      <div class="w-[200px] h-[200px] absolute top-0 left[-300px] bg-gradient-to-t from-[#23B4DB] to-[#195796] rounded-br-full"></div>
      <div class="w-[150px] h-[150px] absolute top-16 left-1/2 mt-10 bg-gradient-to-t from-[#2A5578] to-[#171D22] rounded-full"></div>
      <div class="w-[90px] h-[90px] absolute bottom-8 left-1/4 mt-10 bg-gradient-to-t from-[#2A5578] to-[#171D22] rounded-full"></div>
      <div class="w-[500px] h-[275px] absolute bottom-0 left-[880px] border-2 border-b-0 border-white rounded-t-full"></div>
      <div class="w-[490px] h-[245px] absolute bottom-0 left-[1250px] mt-10 bg-gradient-to-t from-[#23B4DB] to-[#311996] rounded-t-full"></div>
      <div class="w-[225px] h-[225px] absolute top-28 left-[300px] border-2 border-white rounded-full"></div>
      <div className="tittle text-center pt-32 text-white text-5xl font-extrabold font-['Montserrat']">
        Looking Back, <br />
        Celebrating the Past
      </div>
      <div className="subTittle text-center pt-5 text-white text-2xl font-thin font-['Montserrat']">Your personal page to show the precious moments in your life</div>
      <div className="startButton mt-12 left-1/2 translate-x-[-50%] w-[260px] h-[68px] relative cursor-pointer bg-gradient-to-br from-blue-400 to-blue-900 rounded-[50px] shadow-2xl overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
        <Link className="buttonText left-[34px] -top-4 mt-9 absolute text-[#ffffff] text-xl font-bold font-['Montserrat']" href="/signup">
          Start Making Journey
        </Link>
      </div>
    </div>
  );
}
