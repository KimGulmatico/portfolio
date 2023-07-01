"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useBreakpoint } from "@/hooks/useBreakpoint";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const offset = useBreakpoint({ xs: "+=75px", lg: "+=25px", _2xl: "+=75px" });
  useEffect(() => {
    if(!offset) return;
    const tl = gsap.timeline();

    const width = document.querySelector(".rect1")?.clientWidth || 0;

    ScrollTrigger.create({
      animation: tl,
      trigger: "#skills",
      start: "top center-=100",
      end: `+=${width}px`,
      scrub: 0.5,
      anticipatePin: 1,
    });

    ScrollTrigger.create({
      trigger: "#skills",
      start: `top ${offset}`,
      end: `bottom`,
      scrub: 0.5,
      pin: true,
    });

    tl.to('.rect1', { x: width, });
    tl.to('.rect2', { x: -width }, 0);

  }, [offset]);

  return (
    <div id="skills" className="py-20 flex flex-col relative">
      <span className="text-base uppercase tracking-widest font-medium absolute top-3 lg:top-9 2xl:top-3">technology stack</span>
      <div className="-mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen w-screen flex flex-col gap-5 overflow-hidden">
        <div className="border-[#333333] flex gap-5 rect1 -translate-x-[100vw] w-min self-end">
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]">{offset || null}</div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
        </div>
        <div className="border-[#333333] flex gap-5 rect2  translate-x-[100vw] w-min">
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
