"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <div className="py-20 sticky top-0">
      <div className="border-[#333333] border-t -mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen exp sticky top-[155px] lg:top-[105px] 2xl:top-[155px]">
        <div className="mx-5 lg:mx-40 xl:mx-64 3xl:mx-[23rem] bg-black relative py-20 h-full">
          <span className="text-base text uppercase absolute -top-[70px] lg:-top-[45px] 2xl:-top-[70px] tracking-widest font-medium">work history</span>
          Test
        </div>
      </div>
      <div className="border-[#333333] border-t -mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen exp sticky top-[155px] lg:top-[105px] 2xl:top-[155px]">
        <div className="mx-5 lg:mx-40 xl:mx-64 3xl:mx-[23rem] bg-black py-20 h-full">
          Test
        </div>
      </div>
      <div className="border-[#333333] border-t -mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen exp sticky top-[155px] lg:top-[105px] 2xl:top-[155px]">
        <div className="mx-5 lg:mx-40 xl:mx-64 3xl:mx-[23rem] bg-black py-20 h-full">
          Test
        </div>
      </div>
      <div className="border-[#333333] border-t -mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen exp sticky top-[155px] lg:top-[105px] 2xl:top-[155px]">
        <div className="mx-5 lg:mx-40 xl:mx-64 3xl:mx-[23rem] bg-black py-20 h-full">
          Test
        </div>
      </div>
      <div className="border-[#333333] border-t -mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen exp sticky top-[155px] lg:top-[105px] 2xl:top-[155px]">
        <div className="mx-5 lg:mx-40 xl:mx-64 3xl:mx-[23rem] bg-black py-20 h-full">
          Test
        </div>
      </div>
    </div>
  );
};

export default Experience;
