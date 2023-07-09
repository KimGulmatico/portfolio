"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader = ({onLoadComplete}:LoaderProps) => {
  const [percentage, setPercentage] = useState(0);

  const value = useBreakpoint({xs: '+=10px', md: '-=45px', _2xl: '+=10px'})

  useEffect(() => {
    console.log('offset', value)
  }, [value])

  useEffect(() => {
    gsap.set("#loading", {
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
      borderRadius: 0,
    })

    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      } else {
        const tl = gsap.timeline();
        gsap.set("#loading", {
          clearProps: "all",
        })
        tl.from("#loading", { 
          height: '100vh',
          width: '100vw',
          ease: "power4.out",
          duration: 0.4,
        })
        gsap.to("#loading", { 
          borderRadius: '50px',
          delay: 0.02,
        })
        onLoadComplete && onLoadComplete();
      }
    }, 5);

  }, [percentage]);

  return (
    <div
      id="loading"
      className="bg-[#d2d2d2] text-black flex items-center
        justify-center fixed overflow-hidden z-[999]
        text-3xl h-12 w-12 3xl:h-16 3xl:w-16
        left-5 top-5
        lg:left-16 lg:top-8
        2xl:left-16 2xl:top-10
        3xl:left-24 3xl:top-16"
    >
      {percentage < 100 ? `${percentage}%` : <span className="text-xl font-bold">KG</span>}
    </div>)
};

export default Loader;
