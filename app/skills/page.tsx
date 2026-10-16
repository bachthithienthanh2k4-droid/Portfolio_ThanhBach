"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Layout,
  Terminal,
  Users,
  Wrench,
  Cpu,
  BrainCircuit,
  Microscope,
  Presentation,
  Lightbulb,
  Clock,
  Scale,
  Smile,
  Sparkles,
  Rocket,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { useLang, pick, type Lang } from '../i18n';

const ease = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } }
};

// Văn bản song ngữ; chuỗi thường dùng chung cho cả hai ngôn ngữ (tên riêng, thuật ngữ)
type Text = string | { vi: string; en: string };
const tx = (value: Text, lang: Lang) => (typeof value === "string" ? value : pick(value, lang));

type Skill = { name: Text; level: number };
type SkillGroup = {
  key: string;
  title: Text;
  subtitle: Text;
  desc: Text;
  icon: React.ElementType;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    key: "ai",
    title: { vi: "AI & Khoa học dữ liệu", en: "AI & Data Science" },
    subtitle: { vi: "Nghiên cứu & Chuyên ngành", en: "Research & Specialization" },
    desc: {
      vi: "Nền tảng cho các đề tài nghiên cứu chẩn đoán viêm phổi từ ảnh X-quang.",
      en: "The foundation of my research on diagnosing pneumonia from chest X-ray images.",
    },
    icon: BrainCircuit,
    skills: [
      { name: "Deep Learning (CNNs, Vision)", level: 90 },
      { name: "Machine Learning (Scikit-learn)", level: 90 },
      { name: "Computer Vision (OpenCV)", level: 85 },
      { name: { vi: "Xử lý dữ liệu (Pandas/NumPy)", en: "Data Processing (Pandas/NumPy)" }, level: 90 },
    ]
  },
  {
    key: "frontend",
    title: { vi: "Phát triển Frontend", en: "Frontend Development" },
    subtitle: { vi: "Thế mạnh thực chiến & Trải nghiệm", en: "Hands-on Strength & User Experience" },
    desc: {
      vi: "Xây dựng giao diện hiện đại, mượt mà và chú trọng trải nghiệm người dùng.",
      en: "Building modern, smooth interfaces with a strong focus on user experience.",
    },
    icon: Layout,
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML / CSS", level: 85 },
    ]
  },
  {
    key: "backend",
    title: { vi: "Backend & Hệ thống", en: "Backend & Systems" },
    subtitle: { vi: "Nền tảng kỹ thuật & Giải thuật", en: "Engineering Foundations & Algorithms" },
    desc: {
      vi: "Ngôn ngữ, cơ sở dữ liệu và công cụ làm nền cho tư duy giải thuật.",
      en: "Languages, databases and tools that underpin my algorithmic thinking.",
    },
    icon: Terminal,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java / C++", level: 80 },
      { name: "SQL Server", level: 80 },
      { name: "Git", level: 85 },
    ]
  }
];

// Công nghệ đã dùng trong công việc / thực tập
const appliedTech: Text[] = ["Flutter", "Dart", "Qwen3-VL", { vi: "Kiểm thử phần mềm", en: "Software Testing" }, "UI/UX", "PyTorch", "YOLOv8"];

const softSkills: { name: Text; icon: React.ElementType }[] = [
  { name: { vi: "Giao tiếp & Thuyết trình", en: "Communication & Presentation" }, icon: Presentation },
  { name: { vi: "Làm việc nhóm", en: "Teamwork" }, icon: Users },
  { name: { vi: "Tư duy logic & Giải thuật", en: "Logical & Algorithmic Thinking" }, icon: Cpu },
  { name: { vi: "Nghiên cứu khoa học", en: "Scientific Research" }, icon: Microscope },
  { name: { vi: "Tự học", en: "Self-learning" }, icon: BrainCircuit },
  { name: { vi: "Giải quyết vấn đề", en: "Problem Solving" }, icon: Lightbulb },
  { name: { vi: "Quản lý thời gian", en: "Time Management" }, icon: Clock },
  { name: { vi: "Tư duy phản biện", en: "Critical Thinking" }, icon: Scale },
  { name: { vi: "Thích nghi & Quản lý cảm xúc", en: "Adaptability & Emotional Management" }, icon: Smile },
];

const tools = ['Git', 'VS Code', 'Kaggle', 'Canva', 'Colab', 'Figma', 'Postman'];

// Vòng tròn phần trăm
const SkillRing = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const { lang } = useLang();
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay }}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center rounded-[2rem] border border-rose-100/80 bg-gradient-to-b from-white to-[#fff8f5] p-6 text-center transition-shadow duration-500 hover:shadow-[0_25px_50px_-25px_rgba(244,63,94,0.5)]"
    >
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#fde4e4" strokeWidth="7" />
          <motion.circle
            cx="50" cy="50" r={r} fill="none"
            stroke="url(#ringGradient)" strokeWidth="7" strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c * (1 - skill.level / 100) }}
            transition={{ duration: 1.4, ease, delay: delay + 0.15 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-black tracking-tight text-[#3a2420]">
            {skill.level}<span className="text-sm text-rose-400">%</span>
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-bold leading-snug text-[#6e5249] transition-colors group-hover:text-rose-500">{tx(skill.name, lang)}</p>
    </motion.div>
  );
};

const Skills = () => {
  const { lang, t } = useLang();
  const [active, setActive] = useState(skillGroups[0].key);
  const group = skillGroups.find((g) => g.key === active)!;
  const GroupIcon = group.icon;
  const totalTech = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  const stats = [
    { key: "groups", value: skillGroups.length, label: t("Nhóm chuyên môn", "Expertise Areas") },
    { key: "tech", value: totalTech, label: t("Kỹ năng kỹ thuật", "Technical Skills") },
    { key: "soft", value: softSkills.length, label: t("Kỹ năng mềm", "Soft Skills") },
    { key: "tools", value: tools.length, label: t("Công cụ", "Tools") },
  ];

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#fbf5f1] px-4 pb-28 pt-32 text-[#3a2420] selection:bg-rose-200 sm:px-6">
      {/* Gradient dùng chung cho vòng tròn */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nền trang trí */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-rose-200/50 blur-[140px]" />
      <div className="pointer-events-none absolute top-[40%] -left-60 h-[560px] w-[560px] rounded-full bg-[#fde4dc]/80 blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px] opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(190,80,100,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= TIÊU ĐỀ ================= */}
        <div className="mb-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">{t("Năng lực chuyên môn", "Professional Expertise")}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl"
            >
              {t("Kỹ năng", "Skills")} <br />
              <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-[#e8a598] bg-clip-text font-normal italic text-transparent">
                {t("& công cụ", "& tools")}
              </span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="border-l-2 border-rose-300 pl-5 italic leading-relaxed text-[#6e5249]">
              {t(
                "Sự kết hợp giữa tư duy toán học và sự tinh tế trong giao diện.",
                "Where mathematical thinking meets a refined eye for interface design."
              )}
            </p>
            <div className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-[1.5rem] border border-rose-100 bg-rose-100">
              {stats.map((s) => (
                <div key={s.key} className="bg-[#fffaf8] px-2 py-4 text-center">
                  <div className="text-2xl font-black text-rose-500">{s.value}</div>
                  <div className="mt-1 text-[9px] font-bold uppercase leading-tight tracking-wider text-[#a88a80]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= KỸ NĂNG CHUYÊN MÔN (TAB) ================= */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="rounded-[2.5rem] border border-white bg-white/70 p-4 shadow-[0_30px_80px_-40px_rgba(190,80,100,0.4)] backdrop-blur md:p-6"
        >
          {/* Thanh tab */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              const isActive = g.key === active;
              return (
                <button
                  key={g.key}
                  onClick={() => setActive(g.key)}
                  className={`relative flex items-center gap-3 rounded-[1.5rem] px-5 py-4 text-left transition-colors ${isActive ? "text-white" : "text-[#6e5249] hover:bg-rose-50"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-rose-500 to-pink-400 shadow-lg shadow-rose-200"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/20" : "bg-rose-50 text-rose-500"}`}>
                    <Icon size={20} />
                  </span>
                  <span className="relative z-10">
                    <span className="block font-black leading-tight">{tx(g.title, lang)}</span>
                    <span className={`block text-xs ${isActive ? "text-white/80" : "text-[#a88a80]"}`}>{tx(g.subtitle, lang)}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Nội dung tab */}
          <AnimatePresence mode="wait">
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12"
            >
              <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] p-8 text-white lg:col-span-4">
                <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-rose-400/25 blur-[80px]" />
                <GroupIcon size={180} className="pointer-events-none absolute -bottom-10 -right-10 text-white/[0.06]" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-rose-200 ring-1 ring-white/15">
                    <GroupIcon size={26} />
                  </div>
                  <h2 className="text-3xl font-black leading-tight tracking-tight">{tx(group.title, lang)}</h2>
                  <p className="mt-3 leading-relaxed text-rose-100/75">{tx(group.desc, lang)}</p>
                </div>
                <div className="relative mt-8 flex items-end gap-2">
                  <span className="text-5xl font-black text-rose-200">
                    {Math.round(group.skills.reduce((n, s) => n + s.level, 0) / group.skills.length)}%
                  </span>
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-rose-100/60">{t("Trung bình", "Average")}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:col-span-8">
                {group.skills.map((skill, i) => (
                  <SkillRing key={tx(skill.name, "vi")} skill={skill} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ================= ĐÃ ỨNG DỤNG THỰC TẾ ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-6 flex flex-col gap-5 rounded-[2.5rem] border border-rose-100 bg-gradient-to-r from-[#fff8f5] via-rose-50 to-pink-50 p-7 md:flex-row md:items-center md:p-8"
        >
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-md">
              <Rocket size={22} />
            </div>
            <div>
              <p className="font-black">{t("Đã ứng dụng thực tế", "Applied in Practice")}</p>
              <p className="text-xs text-[#a88a80]">{t("Trong công việc, thực tập & nghiên cứu", "At work, in internships & research")}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto md:justify-end">
            {appliedTech.map((tech) => (
              <span key={tx(tech, "vi")} className="flex items-center gap-1.5 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-bold text-[#6e5249] shadow-sm">
                <CheckCircle2 size={14} className="text-rose-400" /> {tx(tech, lang)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ================= KỸ NĂNG MỀM & CÔNG CỤ ================= */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="rounded-[2.5rem] border border-white bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(190,80,100,0.25)] backdrop-blur lg:col-span-8"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-[#fde4dc] text-rose-500">
                <Heart size={22} />
              </div>
              <h3 className="text-2xl font-black tracking-tight">{t("Kỹ năng mềm", "Soft Skills")}</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {softSkills.map(({ name, icon: Icon }, i) => (
                <motion.div
                  key={tx(name, "vi")}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-3 rounded-2xl border border-rose-100/80 bg-[#fff8f5] p-3.5 transition-colors hover:border-rose-400 hover:bg-rose-500"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm font-semibold text-[#6e5249] transition-colors group-hover:text-white">{tx(name, lang)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-400 to-pink-400 p-8 text-white shadow-[0_30px_60px_-30px_rgba(244,63,94,0.6)] lg:col-span-4"
          >
            <Wrench size={160} className="pointer-events-none absolute -bottom-8 -right-8 rotate-12 text-white/10" />
            <div className="relative">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
                  <Wrench size={22} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">{t("Công cụ", "Tools")}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <motion.div
                    key={tool}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-2.5 rounded-2xl bg-white/15 p-3 ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white hover:text-rose-500"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/25 text-xs font-black">
                      {tool.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="text-sm font-bold">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center gap-2 text-center text-sm italic text-[#a88a80]"
        >
          <Sparkles size={14} className="text-rose-400" /> {t("Luôn học hỏi và cập nhật công nghệ mới mỗi ngày", "Always learning and keeping up with new technology every day")}
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
