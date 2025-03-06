"use client";
import { useState } from 'react';
import { useTransform,motion } from 'framer-motion';

export default function Showcase({scrollYProgress}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  const [activeItem, setActiveItem] = useState("produits");

  const menuItems = [
    {
      id: "coffee",
      title: "Signature Coffee",
      content: "Our house blend espresso with velvety steamed milk.",
      image: "coffee.jpg"
    },
    {
      id: "pastry",
      title: "Artisan Pastries",
      content: "Freshly baked croissants and Danish pastries.",
      image: "coffee.jpg"
    },
    {
      id: "Sandwiche",
      title: "Gourmet Sandwiches",
      content: "Crafted with locally sourced ingredients.",
      image: "coffee.jpg"
    }
  ];

  return (
    <motion.section style={{scale,rotate}} className="menu-section">
      <div className="menu-container">
        <div className="menu-left">
          {menuItems.map((item) => (
            <h2
              key={item.id}
              className={`menu-title ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              {item.title}
            </h2>
          ))}
        </div>
        
        <div className="menu-center">
          <img 
            src={menuItems.find(item => item.id === activeItem)?.image} 
            alt={activeItem}
            className="menu-image"
          />
        </div>

        <div className="menu-right">
          <h2 className="content-title">
            {menuItems.find(item => item.id === activeItem)?.title}
          </h2>
          <p className="content-text">
            {menuItems.find(item => item.id === activeItem)?.content}
          </p>
        </div>
      </div>
    </motion.section>
  );
}