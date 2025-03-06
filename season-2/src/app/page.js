import About from "@/components/About";
import Hero from "@/components/Hero";
import Stack from "@/components/Resume";
import Projects from "@/components/Projects"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Stack/>
      <Projects/>
      <Contact/>
    </div>
  );
}
