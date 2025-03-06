import HeroVideo from "./components/HeroVideo";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Parallax from "./components/Parallax";


export default function Home() {
  return (
    <main>
      <HeroVideo />
      <About /> 
      <Achievements />
      <Parallax />
    </main>
  );
}