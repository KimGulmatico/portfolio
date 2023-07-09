"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Image from "next/image";

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

const Skills = () => {
  const offset = useBreakpoint({ xs: "+=75px", lg: "+=25px", _2xl: "+=75px" });
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

  return (
    <div id="skills" className="py-20 flex flex-col relative">
      <span className="text-base uppercase tracking-widest font-medium absolute top-3 lg:top-9 2xl:top-3">technology stack</span>
      <div className="-mx-5 lg:-mx-40 xl:-mx-64 3xl:-mx-[23rem] h-screen w-screen flex flex-col gap-5 overflow-hidden">
        <div className="border-[#333333] flex gap-5 rect1 -translate-x-[100vw] w-min self-end">
          {
            skills[0].map(skill => (
              <div key={skill.name} className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-centers">
                <Image src={skill.src} alt={skill.name} width="150" height="150"/>
              </div>
            ))
          }
            {/* <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-centers">
              <Image className="" src="/redux.svg" alt="redux" width="150" height="150"/>
            </div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
              <Image src="/tailwindcss.svg" alt="tailwind" width="150" height="150"/>
            </div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
              <Image src="/nodejs.svg" alt="react" width="150" height="150"/>
            </div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
              <Image src="/typescript.svg" alt="react" width="150" height="150"/>
            </div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
              <Image src="/next.svg" alt="react" width="150" height="150"/>
            </div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
              <Image src="/react.svg" alt="react" width="150" height="150"/>
            </div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
              <Image src="/js.svg" alt="react" width="150" height="150"/>
            </div> */}
        </div>
        <div className="border-[#333333] flex gap-5 rect2  translate-x-[100vw] w-min">
          {
            skills[1].map(skill => (
              <div key={skill.name} className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-center">
                <Image src={skill.src} alt="redux" width="150" height="150" className="object-contain"/>
              </div>
            ))
          }
            {/* <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px] flex justify-center items-centers">
              <Image src="/redux.svg" alt="redux" width="150" height="150"/>
            </div> */}
            {/* <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div>
            <div className="border-[#333333] border aspect-video flex-none w-[350px] md:w-[430px] xl:w-[480px] 3xl:w-[900px]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
