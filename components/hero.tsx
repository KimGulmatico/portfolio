"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Splitting from "splitting";

gsap.registerPlugin(Splitting);

const Hero = () => {
  const headingText:any = useRef(null);

  useEffect(() => {
    if (headingText.current.children) {
        const split:any = Splitting({ target: headingText.current }); console.log(split)

        const tl = gsap.timeline();
        gsap.set(split[0].chars, { display: "inline-block", "mix-blend-mode": "difference" });
        gsap.to(split[0].chars, { duration: 0.5, clearProps: "all" });
        let repeat = 0;
        const animateChars = () => {
          tl.fromTo(
            split[0].chars,
            {
              opacity: 0,
              x: () => gsap.utils.random(-50, 50),
              y: () => gsap.utils.random(-50, 50),
              color: () => `hsl(${gsap.utils.random(0, 360)}, 100%, 50%)`,
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
              color: () => `hsl(${gsap.utils.random(0, 360)}, 100%, 50%)`,
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
  }, [headingText]);

  return (
        <div ref={headingText} className="h-screen flex flex-col justify-center">
          <span className="text-[100px] font-bold uppercase h-[90px] flex items-center overflow-hidden">Code</span>
          <span className="text-[100px] font-bold uppercase h-[90px] flex items-center overflow-hidden">Commit</span>
          <span className="text-[100px] font-bold uppercase h-[90px] flex items-center overflow-hidden">Push</span>
          <span className="text-[100px] font-bold uppercase h-[90px] flex items-center overflow-hidden">Build</span>
          <span className="text-[100px] font-bold uppercase h-[90px] flex items-center overflow-hidden">Release</span>
        </div>
  );
};

export default Hero;
