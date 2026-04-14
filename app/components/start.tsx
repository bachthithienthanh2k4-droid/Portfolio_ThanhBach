"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom'; // Thêm cái này
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const PARTICLE_COUNT = 40;

const FloatingParticle = ({ type }: { type: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomDelay = useMemo(() => Math.random() * 20, []);
  const duration = useMemo(() => Math.random() * 15 + 15, []);
  const size = useMemo(() => Math.random() * 12 + 6, []);

  const renderIcon = () => {
    if (type % 3 === 0) return <Heart size={size} fill="currentColor" className="text-rose-500/40" />;
    if (type % 3 === 1) return <Star size={size} fill="currentColor" className="text-amber-400/40" />;
    return <Sparkles size={size} className="text-rose-400/40" />;
  };

  return (
    <motion.div
      initial={{ y: "110vh", x: `${randomX}vw`, opacity: 0 }}
      animate={{ 
        y: "-10vh", 
        opacity: [0, 1, 1, 0],
        x: `${randomX + (Math.random() * 10 - 5)}vw` 
      }}
      transition={{ duration, repeat: Infinity, delay: randomDelay, ease: "linear" }}
      className="fixed pointer-events-none top-0 left-0"
      style={{ zIndex: 99999 }} // Tăng thêm số 9 cho chắc
    >
      {renderIcon()}
    </motion.div>
  );
};

export default function StartPage() {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(() => Array.from({ length: PARTICLE_COUNT }), []);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Chỉ render khi đã mount ở phía client và dùng Portal
  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 99999 }}>
      {particles.map((_, i) => (
        <FloatingParticle key={i} type={i} />
      ))}
    </div>,
    document.body // Ép nó nhảy ra ngoài cùng của <body>
  );
}