"use client";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiVite, SiPython , SiPytorch , SiReact, SiJavascript, SiTailwindcss, SiFlask , SiNumpy , SiHtml5, SiCss3, SiHuggingface , SiGithub, SiOpencv, SiOpenai } from 'react-icons/si';
import { useEffect } from "react";
import { useMotionValue,useMotionTemplate,animate,motion } from "framer-motion";

const technologies = [
  {
    category: 'Fullstack',
    items: [
      { name: 'Javascript', icon: <SiJavascript /> },
      { name: 'NextJS', icon: <SiNextdotjs /> },
      { name: 'Node', icon: <SiNodedotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
    ],
  },
  {
    category: 'Python',
    items: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Pytorch', icon: <SiPytorch /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Numpy', icon: <SiNumpy /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Github', icon: <SiGithub /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
      { name: 'Opencv', icon: <SiOpencv /> },
      { name: 'Openai', icon: <SiOpenai /> },
    ],
  },
];

const COLORS_TOP=["#13FFAA","#1E67C6","#CE84CF","#DD335C"]

const About = () => {
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


    return (
    <motion.div style={{backgroundImage}} id='about' className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <motion.h1 style={{border,boxShadow}} className="text-3xl w-fit rounded-full px-2 py-0.5 mb-12 text-center">Stack</motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">{tech.category}</h2>
            <div className="grid grid-cols-2 gap-4">
              {tech.items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-2 px-4 rounded text-center font-medium hover:bg-gray-900 flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
