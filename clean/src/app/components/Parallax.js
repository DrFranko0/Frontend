"use client";

import Showcase from "./Showcase";
import Footer from "./Footer";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from 'lenis';

export default function Parallax(){
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target:container,
        offset:['start start','end end']
    })
    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])

    return(
        <div ref={container} className="h-[220vh]">
            <Showcase scrollYProgress={scrollYProgress} />
            <Footer scrollYProgress={scrollYProgress} />
        </div>
    )
}