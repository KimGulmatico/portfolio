"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const exp = [
  {
    title: "Junior Software Eng.",
    date: "May 2018 - May 2021",
    location: "Iloilo City, Philippines",
    description: "As a coding tournament winner hired by the company during college, I was a pioneer and gained professional experience working on international and external projects while also learning modern stacks like React and Node.js.",
    image: "/stacktrek>.png",
    alt: "Stacktrek",
    link: "https://stacktrek.com/",
  },
  {
    title: "Senior Software Eng.",
    date: "Jun 2021 - Apr 2023",
    location: "Atlanta United States",
    description: "As a pioneer of the company, I worked as a full stack developer on both internal and international client projects, and was given the opportunity to grow through a scholarship for Kingsland's blockchain and cybersecurity certifications.",
    image: "/kic.png",
    alt: "Kingsland Innovation Centre",
    link: "https://www.kingsland.io/",
  },
  {
    title: "Part Time - Full Stack",
    date: "Oct 2022 - Jan 2023",
    location: "Iloilo City, Philippines",
    description: "As a developer for a restaurant app, I worked on both mobile and web platforms, building new features, optimizing code, updating the UI, managing their AWS EC2 instance and RDS, and implementing Detox, an end-to-end testing library for their React Native app.",
    image: "/savorite-app.png",
    alt: "Savorite",
    link: "https://savoriteapp.com/",
  },
  {
    title: "Part Time Full Stack",
    date: "Oct 2022 - Feb 2023",
    location: "Cardiff, UK",
    description: "As a Senior Frontend developer at a UK travel technology company, I worked on two major client projects, gained valuable experience on the differences between big software companies and startups, and honed my skills by working on challenging legacy projects.",
    image: "/inspiretec.svg",
    alt: "Inspiretec",
    link: "https://inspiretec.com/",
  },
  {
    title: "Senior Frontend Eng.",
    date: "Mar 2023 - Present",
    location: "Melbourne, Australia",
    description: "As a Senior Frontend Developer at FMClarity, I have the exciting task of improving the existing codebase of FM and creating a brand new Next.js application as version 2.0. Working in the field of facility management is a fresh and invigorating challenge for me. I am focused on enhancing user experiences and bringing innovation to the industry through my technical expertise.",
    image: "/fmclarity.svg",
    alt: "FM Clarity",
    link: "https://fmclarity.com/",
  },
]

const Experience = () => {
  return (
    <div className="py-20 sticky top-0">
      {exp.map((data, i) => (
        <div key={`exp${i}`} className="border-[#333333] border-t -mx-5 lg:-mx-40 2xl:-mx-64 3xl:-mx-[23rem] h-screen exp sticky top-[155px] lg:top-[105px] 2xl:top-[155px]">
          <div className="mx-5 lg:mx-40 2xl:mx-64 3xl:mx-[23rem] bg-black relative h-full">
            {i == 0 && <span className="text-base text uppercase absolute -top-[70px] lg:-top-[45px] 2xl:-top-[70px] tracking-widest font-medium">
              work history
            </span>}
            <div className="flex gap-5 md:gap-20 max-h-min py-10 flex-col-reverse md:flex-row">
              <div className="flex-1 flex flex-col justify-between gap-5">
                <h3 className="text-2xl md:text-4xl 5xl:text-5xl uppercase font-semibold">
                  {data.date}
                </h3>
                <div className="flex flex-col gap-5 xl:gap-8 5xl:gap-10">
                  <span className="text-sm 5xl:text-lg tracking-widest font-semibold uppercase">
                    {data.location}
                  </span>
                  <p className="text-lg 3xl:text-xl 5xl:text-2xl">{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className="px-10 5xl:px-20 py-2 5xl:py-5 text-xl border bg-[#d2d2d2] text-black w-min">
                    Explore
                  </a>
                </div>
              </div>
              <div className="flex-1 flex-col">
                <h3 className="text-3xl md:text-4xl 5xl:text-5xl uppercase font-semibold mb-5 md:mb-28 3xl:mb-40 5xl:mb-56">
                  {data.title}
                </h3>
                <div className="border-[#333333] border flex justify-center items-center h-[180px] 3xl:h-[380px] 5xl:h-[400px] overflow-hidden md:h-[300px] md:overflow-auto px-10">
                  <Image
                    className="w-[270px] md:w-[400px] 5xl:w-[500px]"
                    src={data.image}
                    alt={data.image}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
