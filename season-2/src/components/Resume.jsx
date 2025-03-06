"use client";
import { useRef, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion, animate } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Resume = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate the border color
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Motion templates
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // Refs for top and bottom scrolling text
  const topText = useRef(null);
  const bottomText = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateText = (element, direction = -1) => {
      let xPercent = 0;

      const tick = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }
        gsap.set(element.current, { xPercent: xPercent });
        requestAnimationFrame(tick);
        xPercent += 0.1 * direction;
      };

      tick();
    };

    if (topText.current) animateText(topText, -1);
    if (bottomText.current) animateText(bottomText, 1);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white relative font-hero overflow-hidden">
      {/* Scrolling Text Top */}
      <div className="absolute top-10 w-full overflow-hidden">
        <div ref={topText} className="flex whitespace-nowrap text-6xl md:text-8xl font-bold">
          <span className="mr-16">Experience? Education?</span>
          <span className="mr-16">Experience? Education?</span>
        </div>
      </div>

      <motion.a
          href="/resume.pdf"
          download
          style={{ border, boxShadow }}
          className="px-6 py-3 rounded-full text-white hover:scale-110 transition-transform duration-300"
        >
          RESUME
        </motion.a>

      {/* Scrolling Text Bottom */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div ref={bottomText} className="flex whitespace-nowrap text-6xl md:text-8xl font-bold">
          <span className="mr-16">Projects in detail? Tech Stack?</span>
          <span className="mr-16">Projects in detail? Tech Stack?</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
