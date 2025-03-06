"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMotionValue, useMotionTemplate, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Contact() {
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
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <footer className="bottom-0 w-full bg-black text-white flex flex-col md:flex-row justify-between items-center min-h-[50vh] p-16 gap-8">
      
      {/* Profile Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center space-y-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Contact Me Button (Opens Email Client) */}
        <motion.a 
          href="mailto:your-email@example.com" 
          style={{ border, boxShadow }} 
          className="border border-white px-6 py-3 text-lg uppercase font-hero hover:bg-white hover:text-black transition-colors rounded-full"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-lg font-hero">
        <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
        <Link href="#about" className="hover:text-gray-400 transition-colors">About</Link>
        <Link href="#projects" className="hover:text-gray-400 transition-colors">Projects</Link>
      </nav>

    </footer>
  );
}
