"use client";
import React,{ useState,useEffect } from "react";
import { useMotionValue,useMotionTemplate,animate,motion } from "framer-motion";
import Image from "next/image";
import project1 from '@/assets/proj1.png'
import project2 from '@/assets/proj2.png'
import project3 from '@/assets/proj3.png'

const COLORS_TOP=["#13FFAA","#1E67C6","#CE84CF","#DD335C"]

const projects = [
  {id:1,
    title:'Model Finder',
    description:'This Agent provides you model according to your use-case.The models which are provided will be compared to find the best model which works best for you.',
    image:project1,
    github: "https://github.com/yourusername/model-finder",
  },
  {id:2,
    title:'Drowsiness Detection',
    description:'A ML model to detect and warn drivers if they are drowsy while driving.This also gives people of emergency a note about your state alongwith a rest area recommendation.',
    image:project2,
    github: "https://github.com/yourusername/model-finder",
  },
  {id:3,
    title:'Portfolio',
    description:'A Portfolio using Nextjs with Mail integration.',
    image:project3,
    github: "https://github.com/yourusername/model-finder",
  }
]

export default function Portfolio() {
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

const [selectedProject,setSelectedProject] = useState(projects[0])

  return(
    <motion.section style={{backgroundImage}} id="projects" className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 lg:px-8 items-center">
      <div>
      <motion.h1 style={{border,boxShadow}} className="w-fit rounded-full text-3xl px-2 py-0.5 mt-8 mb-8">Personal Projects</motion.h1>
      {projects.map((project) => (
        <div key={project.id} onClick={() => setSelectedProject(project)} className="group cursor-pointer mb-8">
          <div className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${selectedProject.id === project.id ? 'text-white/70':''} duration-300`}>{project.title}</div>
          {selectedProject.id === project.id && (
          <div className="border-b-2 border-gray-100 my-4"></div>  
          )}
        {selectedProject.id === project.id && (
          <div className="text-gray-400">{project.description}</div>
        )}
        {selectedProject.id === project.id && (
          <div className="text-gray-400"><a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-white/70 hover:underline"
          >
          GitHub
          </a></div>
        )}
        </div>
      ))}
      </div>
      <Image src={selectedProject.image.src} alt={selectedProject.title} className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out" width={800} height={450} />
      </div>
    </motion.section>
  )
}