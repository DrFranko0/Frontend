"use client";

import { useRef } from "react";
import { useScroll,motion,useTransform, progress } from "framer-motion"

export default function About(){
    const para1="Prototype Project Panning Proper Playing Playground"
    const para2="Beautiful"
    const para3="Sections Summing Sound Stererotypes Summed"

    const words = [...para1.split(" "), ...para2.split(" "), ...para3.split(" ")];
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target:element,
        offset:['start 0.7','start 0.3']
    })

    

    return(
        <div className="flex items-center justify-center min-h-screen bg-black">
            <p ref={element} className="paragraph text-white">
                {words.map((word,i) => {
                    const start=i/words.length;
                    const end=start+(1/words.length);
                    return <motion.span key={i} style={{opacity: useTransform(scrollYProgress, [start, end], [0, 1])}} className="word"> {" "}{word}{" "} </motion.span>
                })}
            </p>
        </div>
    )
}