"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const offset = useBreakpoint({ xs: "+=75px", lg: "+=25px", _2xl: "+=75px" });

  useEffect(() => {
    if (!offset) return;
    const tl = gsap.timeline();

    ScrollTrigger.create({
      animation: tl,
      trigger: "#certs",
      start: "top center",
      end: "bottom",
      scrub: 0.5,
    });

    ScrollTrigger.create({
      trigger: "#certs",
      start: `top ${offset}`,
      end: "bottom",
      scrub: 0.5,
      pin: true,
    });

    document.querySelectorAll(".box").forEach((box) => {
      tl.from(box, { y: "120vh", x: "120vw" });
    });
  }, [offset]);

  return (
    <div id="certs" className="py-20 flex flex-col test relative">
      <span className="text-base uppercase tracking-widest font-medium absolute top-3 lg:top-9 2xl:top-3">
        certifications
      </span>
      <div className="-mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen w-screen overflow-hidden">
        <div className="mx-5 lg:mx-40 xl:mx-64 3xl:mx-[23rem] bg-black flex h-full">
          <div className="flex-1">
            <a href="https://drive.google.com/file/d/1iW1L7WXBMC8vw_D6BVFvsATSJ839mijr/view" target="_blank" rel="noopener noreferrer" className="border-[#333333] border w-full aspect-square bg-black box p-3 md:p-12 flex flex-col justify-between">
              <span className="text-7xl font-semibold">01</span>
              <span className="text-3xl font-semibold uppercase">Coding tournament</span>
            </a>
          </div>
          <div className="mt-[50px] 3xl:mt-[100px] -ml-[100%] md:-ml-[30%] 2xl:-ml-[20%] flex-1">
            <div className="flex-1">
              <a href="https://web.archive.org/web/20180821061921/https://www.proxor.com/examTaker/certification/id/4536?trk=profile_certification_title" target="_blank" rel="noopener noreferrer" className="border-[#333333] border w-full aspect-square bg-black box p-3 md:p-12 flex flex-col justify-between">
                <span className="text-7xl font-semibold">02</span>
                <span className="text-3xl font-semibold uppercase">Proxor 1 certification</span>
              </a>
            </div>
          </div>
          <div className="mt-[100px] 3xl:mt-[200px] -ml-[100%] md:-ml-[30%] 2xl:-ml-[20%] flex-1">
            <div className="flex-1">
              <a href="https://blockchaincertificate-verify.kingsland.io/certificate/5f2222e2d2b2ab0e404b9c69" target="_blank" rel="noopener noreferrer" className="border-[#333333] border w-full aspect-square bg-black box p-3 md:p-12 flex flex-col justify-between">
                <span className="text-7xl font-semibold">03</span>
                <span className="text-3xl font-semibold uppercase">Blockchain Training</span>
              </a>
            </div>
          </div>
          <div className="mt-[150px] 3xl:mt-[300px] -ml-[100%] md:-ml-[30%] 2xl:-ml-[20%] flex-1">
            <div className="flex-1">
              <a href="https://blockchaincertificate-verify.kingsland.io/certificate/630f63341918c47cc68c5f82" target="_blank" rel="noopener noreferrer" className="border-[#333333] border w-full aspect-square bg-black box p-3 md:p-12 flex flex-col justify-between">
                <span className="text-7xl font-semibold">04</span>
                <span className="text-3xl font-semibold uppercase">Cybersecurity</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
