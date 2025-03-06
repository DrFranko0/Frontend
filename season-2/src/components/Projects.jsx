"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "bottom bottom",
          end: "bottom -200%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="scroll-section-outer font-hero bg-black text-white">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
        
          {/* Section 1 - Portfolio */}
          <div
            className="scroll-section section-style relative"
            style={{ backgroundImage: 'url("/img1.png")' }}
          >
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-left">
              <Link href="/portfolio" className="text-lg font-bold hover:underline">
                PORTFOLIO
              </Link>
              <h2 className="text-xl">FRONTEND</h2>
            </div>
          </div>

          {/* Section 2 - AI Agent */}
          <div
            className="scroll-section section-style relative"
            style={{ backgroundImage: 'url("/img2.png")' }}
          >
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-left text-orange-300">
              <Link href="/ai-agent" className="text-lg font-bold hover:underline">
                AI AGENT
              </Link>
              <h2 className="text-xl">
                AGENTIC <br /> SYSTEMS
              </h2>
            </div>
          </div>

          {/* Section 3 - Fullstack */}
          <div
            className="scroll-section section-style relative"
            style={{ backgroundImage: 'url("/img3.jpg")' }}
          >
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-left text-black">
              <Link href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">
                Y
              </Link>
              <h2 className="text-xl">FULLSTACK</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
