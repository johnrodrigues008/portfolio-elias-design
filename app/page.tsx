"use client";

import About from "@/components/about";
import Into from "@/components/into";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Into />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
