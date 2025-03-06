"use client";
import { useEffect, useState } from "react";
import { gsap, Expo } from "gsap";

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("reveal completed");
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".loading-content", { opacity: 0, duration: 0.3 })
      .to(".loading-content", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".main", { 
        opacity: 1,
        ease: Expo.easeInOut, 
        duration: 0.7 
      });
  };

  return (
    <>
      <div className="loading-content">
        <div className="follow"></div>
        <div 
          className="progress-bar"
          style={{ width: counter + "%" }}
        ></div>
        <p className="counter">
          {counter}%
        </p>
      </div>

      <div className="main">
        <div className="hero">
          Welcome
        </div>
        <video src="/vid.mp4" autoPlay muted loop playsInline className="vids" />
      </div>
    </>
  );
}