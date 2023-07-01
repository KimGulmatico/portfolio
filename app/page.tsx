import Loader from '@/components/loader'
import Nav from '@/components/nav'
import Image from 'next/image'
import Hero from '@/components/hero'
import Experience from '@/components/experience';
import Certifications from '@/components/certifications';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <>
      <Loader />
      <>
          <Nav />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="about">
                <div className="py-20 flex flex-col gap-6">
                  <span className="text-base uppercase tracking-widest font-medium">about me</span>
                  <span className="text-5xl font-[600]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quisquam totam temporibus assumenda aut ipsum.
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
                  <span className="text-base uppercase tracking-widest font-medium">contact</span>
                  <span className="text-5xl font-[600]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quisquam totam temporibus assumenda aut ipsum.
                  </span>
                </div>
            </section>
          </main>
        </>
    </>
  );
}
