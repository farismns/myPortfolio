import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import SectionDivider from "@/components/sections/divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider />

        <Experience />
        <SectionDivider />

        <Projects />
        <SectionDivider />

        <Contact />
        <SectionDivider />
      </main>
    </>
  );
}
