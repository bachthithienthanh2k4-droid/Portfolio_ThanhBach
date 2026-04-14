"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import {
  Layout,
  Terminal,
  Users,
  Zap,
  Coffee,
  Cpu,
  BrainCircuit,
  Microscope,
  Book,
  Presentation,
  Lightbulb,
  Clock,
  Scale,
  Smile,
  ExternalLink,
} from 'lucide-react';
const SkillCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const skillGroups = [
    {
      title: "AI & Data Science",
      subtitle: "Nghiên cứu & Chuyên ngành Hệ thống",
      icon: <BrainCircuit className="text-indigo-500" size={24} />,
      gradient: "from-indigo-50/50 to-white",
      skills: [
        { name: "Deep Learning (CNNs, Vision)", level: "85%", color: "bg-indigo-600" },
        { name: "Machine Learning (Scikit-learn)", level: "80%", color: "bg-blue-500" },
        { name: "Computer Vision (OpenCV)", level: "75%", color: "bg-cyan-500" },
        { name: "Data Processing (Pandas/Numpy)", level: "90%", color: "bg-violet-500" },
      ]
    },
    {
      title: "Frontend Development",
      subtitle: "Thế mạnh thực chiến & Trải nghiệm",
      icon: <Layout className="text-rose-500" size={24} />,
      gradient: "from-rose-50/50 to-white",
      skills: [
        { name: "Next.js / React", level: "90%", color: "bg-black" },
        { name: "Tailwind CSS", level: "95%", color: "bg-sky-400" },
        { name: "Framer Motion (Animation)", level: "80%", color: "bg-rose-400" },
        { name: "HTML/CSS", level: "85%", color: "bg-blue-600" },
      ]
    },
    {
      title: "Backend & Systems",
      subtitle: "Nền tảng kỹ thuật & Giải thuật",
      icon: <Terminal className="text-amber-500" size={24} />,
      gradient: "from-amber-50/50 to-white",
      skills: [
        { name: "Python", level: "90%", color: "bg-blue-700" },
        { name: "Java / C++", level: "80%", color: "bg-red-500" },
        { name: "SQL Server", level: "75%", color: "bg-slate-600" },
        { name: "Git", level: "85%", color: "bg-orange-600" },
      ]
    }
  ];

  const softSkills = [
    { name: "Giao tiếp & Thuyết trình", icon: <Presentation size={18} /> },
    { name: "Làm việc nhóm", icon: <Users size={18} /> },
    { name: "Tư duy logic & Giải thuật", icon: <Cpu size={18} /> },
    { name: "Nghiên cứu khoa học", icon: <Microscope size={18} /> },
    { name: "Kỹ năng tự học", icon: <BrainCircuit size={18} /> },
    { name: "Kỹ năng giải quyết vấn đề", icon: <Lightbulb size={18} /> },
    { name: "Kỹ năng quản lý thời gian", icon: <Clock size={18} /> },
    { name: "Kỹ năng tư duy phản biện", icon: <Scale size={18} /> },
    { name: "Thích nghi & quản lý cảm xúc", icon: <Smile size={18} /> }
  ];
  return (
    <section className="py-25 lg:py-35 px-4 sm:px-8 bg-[#FAF9F6] min-h-screen selection:bg-rose-200 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 lg:mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-rose-200"></span>
            <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-[10px]">Technical Expertise</span>
            <span className="h-[1px] w-8 bg-rose-200"></span>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D1E17] tracking-tight leading-tight"
          >
            KỸ NĂNG <span className="italic font-light text-rose-500">& CÔNG CỤ</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-stone-500 italic text-base lg:text-lg max-w-2xl mx-auto px-4 leading-relaxed"
          >
            Sự kết hợp giữa tư duy toán học và sự tinh tế trong giao diện.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          <div className="col-span-1 md:col-span-8 grid grid-cols-1 gap-6">
            {skillGroups.map((group, idx) => (
              <SkillCard key={idx} className="group relative bg-white border border-stone-100 rounded-[2.5rem] p-8 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-stone-50 rounded-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-inner">
                        {group.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800">{group.title}</h3>
                        <p className="text-stone-400 text-sm font-medium">{group.subtitle}</p>
                      </div>
                    </div>
                    <ExternalLink size={20} className="text-stone-300 group-hover:text-rose-500 transition-colors" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-stone-600 tracking-tight">{skill.name}</span>
                          <span className="text-xs font-black text-rose-500">{skill.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
                            className={`h-full ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute top-0 right-0 h-full w-8 bg-white/20 skew-x-[30deg] animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SkillCard>
            ))}
          </div>

          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-[#2D1E17] p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] text-white relative overflow-hidden shadow-lg"
            >
              <div className="absolute -right-4 -top-4 opacity-5 rotate-12 pointer-events-none">
                <BrainCircuit size={120} />
              </div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3 relative z-10">
                <span className="w-8 h-[2px] bg-rose-500"></span>
                Kỹ năng mềm
              </h3>
              <div className="space-y-3 relative z-10">
                {softSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex items-center gap-4 p-3.5 bg-white/5 rounded-xl border border-white/5 transition-all"
                  >
                    <div className="text-rose-400 shrink-0">{skill.icon}</div>
                    <span className="text-sm font-medium text-stone-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] border border-stone-100 shadow-sm"
            >
              <h3 className="text-stone-800 font-bold mb-6 flex items-center gap-2 text-base">
                <Zap className="text-amber-500" size={18} /> Toolkits
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Kaggle', 'Canva', 'Colab', 'Figma', 'Postman'].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-stone-50 rounded-lg text-[11px] font-bold text-stone-500 border border-stone-100 hover:text-rose-500 hover:bg-rose-50/30 transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;