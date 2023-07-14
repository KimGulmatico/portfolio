"use client";
import gsap from "gsap";
import { use, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger);

const skills = [[
  { name: "gsap", src: "/gsap.svg" },
  { name: "golang", src: "/golang.svg" },
  { name: "three.js", src: "/three.svg" },
  { name: "Material UI", src: "/material-ui.svg" },
  { name: "Tailwind", src: "/tailwindcss.svg" },
  { name: "Bootstrap", src: "/bootstrap-5.svg" },
  { name: "Next.js", src: "/next.svg" },
  { name: "Node.js", src: "/nodejs.svg" },
  { name: "Redux", src: "/redux.svg" },
  { name: "React", src: "/react.svg" },
], [
  { name: "Mongo", src: "/mongodb.svg" },
  { name: "Mysql", src: "/mysql.svg" },
  { name: "Psql", src: "/psql.svg" },
  { name: "Redis", src: "/redis.svg" },
  { name: "graphql", src: "/graphql.svg" },
  { name: "github", src: "/github.svg" },
  { name: "gitlab", src: "/gitlab.svg" },
  { name: "Jquery", src: "/jquery.svg" },
  { name: "Aws", src: "/aws.svg" },
  { name: "gcp", src: "/gcp.svg" },
]]

const skillsSm = [[
  { name: "gsap", src: "/gsap.svg" },
  { name: "golang", src: "/golang.svg" },
  { name: "three.js", src: "/three.svg" },
  { name: "Material UI", src: "/material-ui.svg" },
  { name: "Tailwind", src: "/tailwindcss.svg" },
  { name: "Bootstrap", src: "/bootstrap-5.svg" },
], [
  { name: "Psql", src: "/psql.svg" },
  { name: "Redis", src: "/redis.svg" },
  { name: "graphql", src: "/graphql.svg" },
  { name: "github", src: "/github.svg" },
  { name: "gitlab", src: "/gitlab.svg" },
  { name: "Jquery", src: "/jquery.svg" },
  { name: "Aws", src: "/aws.svg" },
  { name: "gcp", src: "/gcp.svg" },
], [
  { name: "Next.js", src: "/next.svg" },
  { name: "Node.js", src: "/nodejs.svg" },
  { name: "Redux", src: "/redux.svg" },
  { name: "React", src: "/react.svg" },
  { name: "Mongo", src: "/mongodb.svg" },
  { name: "Mysql", src: "/mysql.svg" },
]
]

const Skills = () => {
  const offset = useBreakpoint({ xs: "+=75px", lg: "+=25px", _2xl: "+=75px" });
  const isSm = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if(!offset) return;
    const tl = gsap.timeline();

    const width = document.querySelector(".rect1")?.clientWidth || 0; console.log(width);

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
      end: `+=${width / 2}px`,
      scrub: 0.5,
      pin: true,
    });

    tl.to('.rect1', { x: width, });
    tl.to('.rect2', { x: -width }, 0);

  }, [offset]);

  useEffect(() => { console.log(isSm,'sm') }, [isSm]);

  return (
    <div id="skills" className="py-20 flex flex-col relative">
      <span className="text-base uppercase tracking-widest font-medium absolute top-3 lg:top-9 2xl:top-3">technology stack</span>
      <div className="-mx-5 lg:-mx-40 2xl:-mx-64 3xl:-mx-[23rem] h-screen w-screen flex flex-col gap-5 3xl:gap-10 overflow-hidden">
        <div className="border-[#333333] flex gap-5 3xl:gap-10 rect1 -translate-x-[100vw] w-min self-end">
          {
            (isSm?skillsSm[0]:skills[0]).map(skill => (
              <div key={skill.name} className="border-[#333333] border aspect-video flex-none w-[300px] md:w-[430px] xl:w-[430px] 3xl:w-[560px] 4xl:w-[650px] 5xl:w-[700px] flex justify-center items-centers">
                <Image priority src={skill.src} alt={skill.name} width="150" height="150"/>
              </div>
            ))
          }
        </div>
        <div className="border-[#333333] flex gap-5 3xl:gap-10 rect2  translate-x-[100vw] w-min">
          {
            (isSm?skillsSm[1]:skills[1]).map(skill => (
              <div key={skill.name} className="border-[#333333] border aspect-video flex-none w-[300px] md:w-[430px] xl:w-[430px] 3xl:w-[560px] 4xl:w-[650px] 5xl:w-[700px] flex justify-center items-center">
                <Image priority src={skill.src} alt="redux" width="150" height="150" className="object-contain"/>
              </div>
            ))
          }
        </div>
        {isSm && <div className="border-[#333333] flex gap-5 3xl:gap-10 rect1 -translate-x-[100vw] w-min self-end">
          {
            skillsSm[2].map(skill => (
              <div key={skill.name} className="border-[#333333] border aspect-video flex-none w-[300px] md:w-[430px] xl:w-[430px] 3xl:w-[560px] 4xl:w-[650px] 5xl:w-[700px] flex justify-center items-centers">
                <Image priority src={skill.src} alt={skill.name} width="150" height="150"/>
              </div>
            ))
          }
        </div>}
      </div>
    </div>
  );
};

export default Skills;
