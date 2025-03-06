"use client";
import emailjs from 'emailjs-com';
import React,{ useState,useEffect } from "react";
import { useMotionValue,useMotionTemplate,animate,motion } from "framer-motion";
import Footer from "./Footer";

const COLORS_TOP=["#13FFAA","#1E67C6","#CE84CF","#DD335C"]

export default function Contact() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_msgfa9m',
        'template_kvugapq',
        formData,
        'eCORw9M-oqL4LYLMG'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
        }
      );
  };

  return (
    <motion.section style={{backgroundImage}} id="contact" className="min-h-screen overflow-hidden py-12 mt-10">
      <div className="container mx-auto px-4">
        <motion.h2 style={{border,boxShadow}} className="text-3xl w-fit px-2 py-0.5 rounded-full mb-8">Get in Touch</motion.h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded"
          >
            Send
          </button>
        </form>
        {status === 'success' && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4">Failed to send the message. Try again later.</p>
        )}
      </div>
      <Footer />
    </motion.section>
  );
}
