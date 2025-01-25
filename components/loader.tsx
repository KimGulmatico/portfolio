"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import cx from "classnames";

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader = ({onLoadComplete}:LoaderProps) => {
  const [percentage, setPercentage] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tl = gsap.set("#loading", {
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
      borderRadius: 0,
    })
    setReady(true);

    return () => {
      tl.kill();
    }
  }, [])

  useEffect(() => {
    const tl = gsap.timeline();
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      } else {
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
    }, 10);

    return () => {
      tl.kill();
    }

  }, [onLoadComplete, percentage]);

  return (
    <div
      id="loading"
      className={cx(
        `bg-[#d2d2d2] text-black flex items-center
        justify-center fixed overflow-hidden z-[999]
        text-3xl`,
        {
          "h-screen w-screen top-0 left-0": !ready,
          [`h-12 w-12 3xl:h-16 3xl:w-16
          left-5 top-5
          lg:left-16 lg:top-8
          2xl:left-16 2xl:top-10
          3xl:left-24 3xl:top-16`]: ready,
        }
      )}
    >
      {percentage < 100 ? (
        `${percentage === 0 ? '__' : percentage}%`
      ) : (
        <span className="text-xl font-bold">KG</span>
      )}
    </div>
  );
};

export default Loader;
