"use client";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-[#171d22]">
        <div class="flex justify-center pt-12 mb-12">
          {" "}
          <img src="/image/logo-white.png" alt="Logo" class="h-14" />{" "}
        </div>
        <div class="w-[700px] h-screen absolute top-0 left-[-300px] bg-gradient-to-t from-[#23B4DB] to-[#311996] rounded-r-full"></div>
        <div class="w-[450px] h-screen absolute top-0 left-[1470px] bg-gradient-to-t from-[#2A5578] to-[#171D22] rounded-e-full rotate-180"></div>
        <div class="w-[200px] h-[200px] absolute top-0 left[-300px] bg-gradient-to-t from-[#23B4DB] to-[#195796] rounded-br-full"></div>
        <div className="tittle text-center pt-32 text-white text-5xl font-extrabold font-['Montserrat']">Looking Back, <br/>Celebrating the Past</div>
        <div className="subTittle text-center pt-5 text-white text-2xl font-thin font-['Montserrat']">Your personal page to show the precious moments in your life</div>
        <div className="StartButton mt-8 left-1/2 translate-x-[-50%] w-[287px] h-[68px] relative">
           <div className="Rectangle1 w-[280px] h-[68px] left-0 top-0 absolute bg-[#3030a0] rounded-[20px]" />
           <div className="StartMakingJourney left-[36px] top-[22px] absolute text-[#e0e0e0] text-xl font-bold font-['Merriweather']">Start Making Journey</div>
        </div>
    </div>
  );
}