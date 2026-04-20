"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const JourneyRibbon = () => {
    const { scrollYProgress } = useScroll();
  const [pageHeight, setPageHeight] = useState(2000); // Mặc định ban đầu

  // Cập nhật chiều cao thực tế của trang để SVG không bị ngắn
  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Cấu hình Spring cực kỳ mượt mà (Damping cao để tránh rung)
const springConfig = { damping: 40, stiffness: 100, restDelta: 0.0001 };
  const pathLength = useSpring(scrollYProgress, springConfig);
  

  return (
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ height: pageHeight }}>
          <svg
        className="w-full h-full opacity-50"
        // Tăng chiều cao ảo của viewBox để đường cong có không gian uốn lượn
        viewBox="0 0 1000 2000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="modernPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" stopOpacity="0" />
            <stop offset="10%" stopColor="#f43f5e" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.9" />
            <stop offset="90%" stopColor="#f43f5e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Lớp Shadow sâu (Ambient Glow) - Tạo độ thon nhưng có chiều sâu */}
        <motion.path
          d="M -50 0 Q 300 300 800 500 T 200 1000 T 900 1500 T 400 2000"
          stroke="#f43f5e"
          strokeWidth="15"
          strokeOpacity="0.03"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* 2. Đường line chính - Mảnh mai (Thin & Elegant) */}
        <motion.path
          d="M -50 0 Q 300 300 800 500 T 200 1000 T 900 1500 T 400 2000"
          stroke="url(#modernPink)"
          strokeWidth="1.5"
          strokeLinecap="round"
          // Tạo hiệu ứng nét đứt cực mảnh và dài (Modern Dash)
          strokeDasharray="100 150"
          style={{ pathLength, filter: "url(#softGlow)" }}
        />

        {/* 3. Đường line phụ chạy song song tạo hiệu ứng lụa (Ribbon Effect) */}
        <motion.path
          d="M -60 10 Q 290 310 790 510 T 190 1010 T 890 1510 T 390 2010"
          stroke="url(#modernPink)"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          style={{ pathLength }}
        />

        {/* 4. Hạt lấp lánh (Sparkles) tĩnh dọc theo đường bay */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            r="1.5"
            fill="#f43f5e"
            style={{
              // Hiệu ứng hạt chạy theo tiến trình scroll
              offsetPath: "path('M -50 0 Q 300 300 800 500 T 200 1000 T 900 1500 T 400 2000')",
              offsetDistance: `${(i * 12) + (pathLength.get() * 100)}%`,
              opacity: 0.4
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default JourneyRibbon;