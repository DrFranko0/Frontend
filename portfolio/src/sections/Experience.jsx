"use client";
import { useState,useEffect } from "react";
import { useMotionValue,useMotionTemplate } from "framer-motion";
import { animate } from "framer-motion";
import { motion } from "framer-motion";

const COLORS_TOP=["#13FFAA","#1E67C6","#CE84CF","#DD335C"]
const tabs = ["Experience", "Education"];

const experienceData = [
  {
    title: "AI Intern",
    company: "Cognizance",
    date: "June 2024 - September 2024",
    description:
      "A Sentiment Analysis Chatbot to measure the mood and the degree of emotion using a Neural Network from Scratch.",
  },
];

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KIIT University",
    date: "2021 - 2025",
    description:
      "Graduated with a focus on data structures, and AI/ML while contributing to open source models.",
  },
];

const TabContent = ({ data }) => (
    <div className="space-y-8" >
      {data.map((item, index) => (
        <div key={index} className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-1">{item.title || item.degree}</h3>
          <p className="text-lg text-gray-300 text-center">{item.company || item.institution}</p>
          <p className="text-gray-400 mb-2">{item.date}</p>
          <p className="text-gray-400 mb-2 italic">{item.description}</p>
        </div>
      ))}
    </div>
  );

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");
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
    <motion.section style={{backgroundImage}} id="experience" className="min-h-screen py-16">
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <motion.button
              style={{border,boxShadow}}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-3xl mb-4 px-2 py-0.5 w-fit rounded-full transition-colors ${
                activeTab === tab
                  ? "bg-gray-900 text-white"
                  : "bg-gray-900 text-gray-300"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        
        {activeTab === "Experience" ? (
          <TabContent data={experienceData}/>
        ) : (
          <TabContent data={educationData} />
        )}
      </div>
    </motion.section>
  );
}