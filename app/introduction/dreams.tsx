"use client";

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ArrowUpRight, 
  Heart, 
  Cpu, 
  Sparkles, 
  Globe, 
  Code2
} from "lucide-react";
import { useLang } from '../i18n';

const FutureVision = () => {
  const { t } = useLang();

  // Sinh số ngẫu nhiên sau khi mount để HTML server và client khớp nhau (tránh lỗi hydration)
  const [petals, setPetals] = useState<{ left: number; duration: number; delay: number }[]>([]);
  useEffect(() => {
    setPetals(Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
    })));
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const floatAnim: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    // Nền sáng chủ đạo với hiệu ứng hạt mịn (grainy)
    <section className="py-14 px-6 relative overflow-hidden text-[#3a2420]">
      
      {/* --- LAYER HỌA TIẾT BAY BAY (Floating Elements) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Pink Blurs - Tạo cảm giác mây hồng */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-rose-100/50 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-pink-100/40 rounded-full blur-[140px]" 
        />

        {/* Họa tiết SVG bay lơ lửng (Cánh hoa hoặc hình tròn mờ) */}
        {petals.map((petal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [-100, -900],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: petal.duration,
              repeat: Infinity, 
              delay: petal.delay
            }}
            className="absolute"
            style={{ 
              left: `${petal.left}%`, 
              top: '100%' 
            }}
          >
             <div className="w-12 h-12 border-2 border-rose-200/50 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-rose-300 rounded-full" />
             </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* TIÊU ĐỀ SECTION */}
        <motion.div variants={itemVariants} className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex items-end gap-5">
            <span className="select-none bg-gradient-to-b from-rose-300 to-rose-100 bg-clip-text text-6xl font-black leading-none text-transparent md:text-7xl">
              06
            </span>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-rose-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">{t("Tầm nhìn", "Vision")}</span>
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tighter text-[#3a2420] md:text-5xl">
                {t("Vượt qua", "Beyond the")} <span className="font-normal italic text-rose-500">{t("giới hạn", "limits")}</span>
              </h2>
            </div>
          </div>
          <p className="max-w-sm italic text-[#a88a80] md:text-right">{t("Định hướng và khát vọng cho chặng đường phía trước.", "My direction and aspirations for the road ahead.")}</p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. ĐỊNH HƯỚNG TƯƠNG LAI */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 bg-white/60 backdrop-blur-md rounded-[3rem] p-10 border border-white shadow-xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-rose-100 text-rose-500 shadow-inner">
                <Cpu size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-6 text-[#2d1b22]">{t("Kiến trúc &", "AI Architecture")} <br />{t("Kỹ thuật AI", "& Engineering")}</h3>
              <div className="grid md:grid-cols-2 gap-8 text-stone-600 leading-relaxed font-medium">
                <p>
                  {t(
                    "Mình hướng tới việc đưa AI thoát khỏi những server cồng kềnh để hiện diện mượt mà trên trình duyệt. Biến AI thành một phần DNA của sản phẩm chứ không chỉ là công cụ hỗ trợ.",
                    "I want to free AI from heavyweight servers and let it run smoothly right in the browser — making AI part of a product's DNA, not just a supporting tool."
                  )}
                </p>
                <p>
                  {t(
                    "Trong 5 năm tới, mục tiêu là làm chủ các công nghệ tối ưu hóa tài nguyên, giúp người dùng phổ thông tiếp cận được trí tuệ nhân tạo đỉnh cao mà không cần phần cứng đắt đỏ.",
                    "Over the next five years, my goal is to master resource-optimization techniques so everyday users can access cutting-edge AI without expensive hardware."
                  )}
                </p>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-[0.05] text-rose-500">
              <Code2 size={400} />
            </div>
          </motion.div>

          {/* 2. ƯỚC MƠ (Gradient sáng) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="md:col-span-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-[3rem] p-10 flex flex-col justify-between text-white shadow-lg relative overflow-hidden"
          >
            <div className="flex justify-between items-start relative z-10">
              <Sparkles size={40} className="text-white/80" />
              <ArrowUpRight size={24} />
            </div>
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-4 tracking-tight">{t("AI cho mọi người", "AI for everyone")}</h4>
              <p className="text-white/90 text-sm font-medium leading-relaxed">
                {t(
                  "Khao khát của mình là xóa nhòa ranh giới công nghệ. Mang AI đến với y tế và giáo dục tại những vùng sâu vùng xa qua những thiết bị giá rẻ.",
                  "My aspiration is to close the technology gap — bringing AI to healthcare and education in remote areas through affordable devices."
                )}
              </p>
            </div>
          </motion.div>

          {/* 5. TẦNG CON NGƯỜI (Bright & Emotional) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 bg-white rounded-[4rem] p-12 md:p-16 relative overflow-hidden shadow-2xl border border-rose-50"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex-1 space-y-6 text-[#2d1b22]">
                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Heart size={14} fill="currentColor" />
                  <span>{t("Tâm hồn trong công nghệ", "The soul of technology")}</span>
                </div>
                <h3 className="text-4xl md:text-6xl italic leading-[1.1] text-[#3a2420]">
                  &ldquo;{t(
                    <>Công nghệ chỉ là xác, cảm xúc mới là <span className="text-rose-500">linh hồn</span>.</>,
                    <>Technology is the body; emotion is the <span className="text-rose-500">soul</span>.</>
                  )}&rdquo;
                </h3>
                <p className="text-stone-500 text-lg max-w-xl leading-relaxed font-medium">
                  {t(
                    "Tôi tin rằng một sản phẩm AI tốt phải khiến người dùng cảm thấy được thấu hiểu chứ không phải bị điều khiển.",
                    "I believe a great AI product should make people feel understood, not controlled."
                  )}
                </p>
              </div>
              
              <motion.div 
                variants={floatAnim}
                initial="initial"
                animate="animate"
                className="w-full md:w-[45%] aspect-[16/9] bg-rose-50 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <img 
                  src="/pictures/anhhusc.jpg"
                  alt={t("Trường Đại học Khoa học Huế", "University of Sciences, Hue University")}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Huge Background Globe (Mờ ảo) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none text-rose-500">
              <Globe size={1000} />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default FutureVision;