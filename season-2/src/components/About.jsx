"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the heading when it scrolls into view
    gsap.from('h1', {
      scrollTrigger: {
        trigger: 'h1',
        start: 'top 80%', // animation starts when top of h1 hits 80% of viewport height
      },
      y: -50,
      opacity: 0,
      duration: 1,
    });

    // Animate the paragraph when it scrolls into view
    gsap.from('p', {
      scrollTrigger: {
        trigger: 'p',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Animate the image scaling from 0 when it scrolls into view
    gsap.from('.profile', {
      scrollTrigger: {
        trigger: '.profile',
        start: 'top 80%',
      },
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    });
  }, []);

  return (
    <div id='about' className="h-screen bg-black flex justify-center items-center">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-white w-1/2 font-hero">
            Frontend & Python Developer
          </h1>
          <p className="mt-4 text-xl text-gray-300 w-1/2 font-hero">
            AI/ML Professional Crafting Agentic Systems and Creating Creative Frontend Applications.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image 
            src="/New.jpg" 
            alt="Developer Profile" 
            width={400} 
            height={400} 
            className="rounded-lg border border-e-cyan-100 profile"
          />
        </div>
      </div>
    </div>
  );
}