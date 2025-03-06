"use client";
import { useTransform,motion } from "framer-motion";

export default function Footer({scrollYProgress}) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.footer style={{scale,rotate}} className="footer">
      <div className="logo">ALL IN ONE</div>
      <div className="footer-content">
        <div className="footer-left">
          <p>2025 © ROHIT</p>
        </div>
        
        <div className="footer-center">
          <div className="social-links">
            <a href="#" aria-label="Phone">
              <div className="circle-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                </svg>
              </div>
            </a>
            <a href="#" aria-label="Calendar">
              <div className="circle-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"></path>
                </svg>
              </div>
            </a>
            <a href="#" aria-label="Email">
              <div className="circle-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className="footer-right">
          <p>GOURMET</p>
        </div>
      </div>
    </motion.footer>
  );
}