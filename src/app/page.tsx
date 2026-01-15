import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { DigitalSelf } from "@/components/digital-self";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <DigitalSelf />
    </div>
  );
}
