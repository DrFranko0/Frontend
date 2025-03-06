"use client";
import { useState,useEffect } from "react";
import { useMotionValue,useMotionTemplate } from "framer-motion";
import { animate } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

const COLORS_TOP=["#13FFAA","#1E67C6","#CE84CF","#DD335C"]

export default function Hero() {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color,COLORS_TOP,{
            ease:"easeInOut",
            duration:10,
            repeat:Infinity,
            repeatType:"mirror"
        })
    }, [color])

    const backgroundImage= useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border= useMotionTemplate`1px solid ${color}`
    const boxShadow= useMotionTemplate`0px 4px 24px ${color}`

    return(
        <motion.section
        id="home"
        style={{backgroundImage}}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200" >
            <div className="flex flex-col justify-center text-center">
                <h1 className="text-9xl font-bold">Welcome</h1>
                <p className="text-lg mt-4">Hi, I'm Rohit Ranjan Rout. A AI/ML professional exploring backend technologies to build robust, full-stack websites.</p>
            </div>
            <div className="flex flex-row justify-center text-center gap-4 mt-6">
                <motion.button style={{border,boxShadow}} className="rounded-full px-2 py-0.5">
                    <Link href="#projects" scroll={true}>View Projects</Link>
                </motion.button>
                <motion.a href="/Rohit_resume.pdf" download style={{border,boxShadow}} className="rounded-full px-2 py-0.5">
                    Download Resume
                </motion.a>
            </div>
        </motion.section>
    )
}