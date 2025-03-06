"use client";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", function(e) {});
    };
  }, []); // Empty dependency array means this runs once after mount

  return (
    <html lang="en">
      <body>
        <div className="cursor-dot" data-cursor-dot></div>
        <div className="cursor-outline" data-cursor-outline></div>
        {children}
      </body>
    </html>
  );
}