import Nav from "@/components/nav";
import Image from "next/image";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <div className="py-20 flex flex-col gap-6">
            <span className="text-base uppercase tracking-widest font-medium">
              about me
            </span>
            <span className="text-5xl font-[600]">
              I am a Software Developer who specializes in Web Development, I have gained experience working with international companies and talented developers over the years and strive to meet client needs.
            </span>
          </div>
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <div className="py-20 flex flex-col gap-6">
            <span className="text-base uppercase tracking-widest font-medium">
              contact
            </span>
            <span className="text-5xl font-[600]">
              Thank you for visiting. Let&apos;s build something amazing together!
            </span>
            <div className="flex gap-5 mt-20 text-3xl font-[600] uppercase">
              <a href="mailto:gulmaticokim@protonmail.com">Email</a> ||
              <a href="https://www.linkedin.com/in/kim-benedict-gulmatico-29742214b/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
