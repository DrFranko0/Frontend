"use client";
import { useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion, animate } from "framer-motion";
import gsap from "gsap";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate the color motion value
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Motion templates
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // Default path values
  let initialPath = `M 240 270 Q 500 270 600 270`;
  let finalPath = `M 240 270 Q 500 270 600 270`;

  // Add mousemove event listener
  useEffect(() => {
    const stringElem = document.querySelector("#string");
    if (!stringElem) return;

    const handleMouseMove = (event) => {
      // Use event.clientX / event.clientY in the path
      initialPath = `M 240 270 Q ${event.clientX} ${event.clientY} 600 270`;
      gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    stringElem.addEventListener("mousemove", handleMouseMove);
    stringElem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringElem.removeEventListener("mousemove", handleMouseMove);
      stringElem.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      style={{ backgroundImage }}
      className="flex flex-col h-screen relative"
    >
      <div className="flex-grow flex flex-col justify-center items-center relative z-10">
        <div className="font-hero text-white font-black text-9xl text-center">
          <span className="block mr-36">HELLO,</span>
          <span className="block ml-28">WORLD</span>
        </div>
      </div>
      <div
        id="string"
        className="string absolute inset-0 z-40"
      >
        <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M 240 270 Q 500 270 600 270" stroke="white" fill="transparent" />
        </svg>
      </div>

      <div className="flex z-50 justify-between items-center px-6 pb-6 font-hero text-white">
        <div className="text-lg">ROHIT</div>
        <motion.a
          href="/resume.pdf"
          download
          style={{ border, boxShadow }}
          className="px-6 py-3 rounded-full text-white hover:scale-110 transition-transform duration-300"
        >
          RESUME
        </motion.a>
      </div>
    </motion.div>
  );
}