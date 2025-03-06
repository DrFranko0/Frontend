"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: 1, title: "Drink And Drive" },
  { id: 2, title: "Drink Crazy" },
  { id: 3, title: "Drink Viking" },
];

export default function ParallaxTextSections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);


  const handleScroll = (direction) => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentIndex((prevIndex) => {
    const newIndex = prevIndex + direction;
    if (newIndex < 0 || newIndex >= sections.length) {
    return prevIndex; // Do nothing if it's out-of-bounds
    }
    return newIndex;
    });
    
    setTimeout(() => setAnimating(false), 1200);
    };

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) handleScroll(1);
      else if (event.deltaY < 0) handleScroll(-1);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.section
          key={sections[currentIndex].id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center h-screen w-screen"
        >
          <motion.h2
            className="text-white text-5xl md:text-6xl font-semibold font-hero tracking-widest text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {sections[currentIndex].title}
          </motion.h2>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
