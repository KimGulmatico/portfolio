"use client";
import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Loader from "@/components/loader";
import Image from "next/image";
import Spotlight from "./spotlight";
import { EvervaultCard } from "./EveraultCard";

const Hero = () => {
  // check if window docment is defined
  let Splitting:any;
  if (typeof window !== "undefined") {
    Splitting = require('splitting');
    gsap.registerPlugin(Splitting);
  }

  const headingText: any = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const canvaseRef = useRef(null);

  const startAnimation = () => {
    if (headingText.current.children && Splitting) {
      const split: any = Splitting({ target: headingText.current });
      console.log(split);

      const tl = gsap.timeline();
      gsap.set(split[0].chars, {
        display: "inline-block",
        "mix-blend-mode": "difference",
      });
      gsap.to(split[0].chars, { duration: 0.5, clearProps: "all" });
      let repeat = 0;
      const animateChars = () => {
        tl.fromTo(
          split[0].chars,
          {
            opacity: 0,
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-50, 50),
            // color: () => `hsl(${gsap.utils.random(0, 360)}, 100%, 50%)`,
            color: () => 'white',
            stagger: {
              each: 0.0001,
              from: "random",
            },
            duration: 0,
          },
          {
            opacity: 1,
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-50, 50),
            // color: () => `hsl(${gsap.utils.random(0, 360)}, 100%, 50%)`,
            color: () => 'white',
            duration: 0,
            stagger: {
              each: 0.0001,
              from: "random",
            },
            onComplete: () => {
              repeat++;
              if (repeat < 5) {
                setTimeout(() => {
                  animateChars();
                }, 50);
              }
            },
          }
        );
      };
      animateChars();
    }
  };

  const onLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      startAnimation();
    }, 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Loader onLoadComplete={onLoadComplete} />
      {!isLoading && <Spotlight className="" fill="white"/>}
      <div className="flex flex-col-reverse xl:flex-row pt-16 xl:pt-0 gap-0 2xl:gap-10">
        <div ref={headingText} className="h-screen flex-1 flex flex-col justify-center">
            <div className="-mt-16 md:-mt-52 xl:mt-0 w-auto xl:w-[410px] 2xl:w-auto">
                <span className="gap-2 text-[40px] md:text-[63px] xl:text-[47px] 2xl:text-[60px] 3xl:text-[63px] 4xl:text-[76px] 5xl:text-[88px] font-bold uppercase h-[40px] md:h-[57px] 3xl:h-[76px] 4xl:h-[88px] flex items-center overflow-hidden">
                Ideas
                </span>
                <span className="gap-2 text-[39.6px] md:text-[63px] xl:text-[54px] 2xl:text-[63px] 3xl:text-[72px] 4xl:text-[86.4px] 5xl:text-[100.8px] font-bold uppercase h-[46.8px] md:h-[64.8px] 3xl:h-[86.4px] 4xl:h-[100.8px] flex items-center overflow-hidden">
                Into Reality
                </span>
                <span className="gap-2 text-[55px] md:text-[90px] xl:text-[67.5px] 2xl:text-[90px] 3xl:text-[90px] 4xl:text-[108px] 5xl:text-[126px] font-bold uppercase h-[58.5px] md:h-[81px] 3xl:h-[108px] 4xl:h-[126px] flex items-center overflow-hidden">
                With Code
                </span>
                <span className="text-3xl 5xl:text-4xl font-semibold h-[150px] max-w-[500px] md:h-[110px] xl:h-[150px] 3xl:h-[120px] 4xl:h-[120px] 5xl:h-[150px] flex gap-x-2 mt-10 items-center flex-wrap overflow-hidden">
                {/* <span>Turning</span><span>Coffee</span><span>Into</span><span>Software</span><span>Solutions</span> */}
                <span>New</span><span>ideas,</span><span>ongoing</span><span>projects,</span><span>or legacy</span><span>systems</span><span>- I</span><span>deliver</span><span>solutions</span><span>that</span><span>work.</span>
                </span>
            </div>
        </div>
        <div className="flex-none flex justify-center items-center md:justify-end">
          <div className="border border-[#ffffff33] pt-10 xl:scale-90 2xl:scale-100 3xl:scale-100 4xl:scale-125 5xl:scale-150 relative">
            <Image
                priority
                src="/ASCII.webp"
                alt="Picture of the author"
                width={500}
                height={533}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
