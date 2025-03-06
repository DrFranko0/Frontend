"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect: Moves the image slightly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-gray-900">
      <motion.img
        src="/imgg.jpg"
        alt="Parallax Effect"
        className="absolute w-full h-auto max-h-[80vh] object-cover"
        style={{ y }}
      />
    </section>
  );
}