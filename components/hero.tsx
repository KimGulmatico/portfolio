"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";

import Loader from "@/components/loader";
import Image from "next/image";

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

  return (
    <>
      <Loader onLoadComplete={onLoadComplete} />
      <div className="flex flex-col-reverse xl:flex-row pt-16 xl:pt-0 xl:gap-10">
        <div ref={headingText} className="h-screen flex-1 flex flex-col justify-center">
            <div className="-mt-16 md:-mt-52 xl:mt-0">
              <span className="text-6xl md:text-[100px] xl:md:text-[85px] 2xl:text-[100px] 3xl:text-[170px] font-bold uppercase h-[65px] md:h-[90px] 3xl:h-[140px] flex items-center overflow-hidden">
                Coding
              </span>
              <span className="text-6xl md:text-[100px] xl:md:text-[85px] 2xl:text-[100px] 3xl:text-[170px] font-bold uppercase h-[65px] md:h-[90px] 3xl:h-[140px] flex items-center overflow-hidden">
                Wizardry
              </span>
              <span className="text-4xl font-bold uppercase h-[130px] max-w-[500px] md:h-[90px] 3xl:h-[140px] flex  gap-x-2 md:gap-x-5 mt-10 items-center flex-wrap overflow-hidden">
                <span>Turning</span><span>Coffee</span><span>Into</span><span>Software</span><span>Solutions</span> 
              </span>
            </div>
        </div>
        <div className="flex-none flex justify-center items-center md:justify-end">
          <div className="border border-[#ffffff33] pt-10 3xl:scale-150 h-[575px]">
            <Image
              priority
              src="/ASCII.png"
              alt="Picture of the author"
              width="500"
              height="1000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
