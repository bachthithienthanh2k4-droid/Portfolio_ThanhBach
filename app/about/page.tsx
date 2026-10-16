"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import {
    Award, Zap, ArrowUpRight, Sparkles, Star, Quote, FileText, Mail, ArrowRight,
    Crown, GraduationCap, MapPin, Brain, Smartphone, Code, Bug, Trophy, Users,
} from 'lucide-react';
import { FacebookIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from '../components/icons';
import Link from 'next/link';
import { useLang } from '../i18n';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } }
};

// Tiêu đề nhỏ dùng chung
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-rose-300" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">{children}</span>
    </div>
);

// Tiêu đề section có đánh số (đồng bộ với trang Giới thiệu)
const SectionHeader = ({ number, eyebrow, title, accent, subtitle }: {
    number: string; eyebrow: string; title: string; accent: string; subtitle?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
        <div className="flex items-end gap-5">
            <span className="select-none bg-gradient-to-b from-rose-300 to-rose-100 bg-clip-text text-6xl font-black leading-none text-transparent md:text-7xl">
                {number}
            </span>
            <div>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className="mt-3 text-3xl font-black tracking-tighter md:text-5xl">
                    {title} <span className="font-normal italic text-rose-500">{accent}</span>
                </h2>
            </div>
        </div>
        {subtitle && <p className="max-w-sm italic text-[#a88a80] md:text-right">{subtitle}</p>}
    </motion.div>
);

const About = () => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const yImage = useTransform(smoothProgress, [0, 0.3], [0, 60]);
    const { t } = useLang();

    const socialLinks = [
        { Icon: FacebookIcon, href: "https://www.facebook.com/thanh.bach.395/", label: "Facebook" },
        { Icon: YoutubeIcon, href: "https://youtube.com/yourchannel", label: "YouTube" },
        { Icon: LinkedinIcon, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
        { Icon: GithubIcon, href: "https://github.com/bachthithienthanh2k4-droid", label: "GitHub" },
    ];

    const quickStats = [
        { value: "3.83", label: "GPA / 4.0" },
        { value: t("Á khoa", "Runner-up"), label: t("Khoa CNTT", "Valedictorian, IT") },
        { value: "03", label: t("Kinh nghiệm", "Experiences") },
        { value: "02", label: t("Giải Nhì", "Second Prizes") },
    ];

    const focusAreas = [
        { icon: Brain, title: t("Trí tuệ nhân tạo", "Artificial Intelligence"), desc: t("Deep Learning cho ảnh y tế", "Deep learning for medical imaging") },
        { icon: Code, title: t("Phát triển Web", "Web Development"), desc: t("Next.js, giao diện UI/UX", "Next.js & UI/UX design") },
        { icon: Smartphone, title: t("Ứng dụng di động", "Mobile Apps"), desc: t("Flutter & Dart đa nền tảng", "Cross-platform with Flutter & Dart") },
        { icon: Bug, title: t("Kiểm thử phần mềm", "Software Testing"), desc: t("Test case, kiểm thử hồi quy", "Test cases & regression testing") },
    ];

    const activities = [
        { icon: Users, label: t("Đoàn – Hội", "Youth Union & Student Association") },
        { icon: Code, label: t("Câu lạc bộ", "Clubs") },
        { icon: Brain, label: t("Nghiên cứu khoa học", "Scientific Research") },
        { icon: Sparkles, label: t("Văn nghệ", "Performing Arts") },
    ];

    // Xếp theo trình tự thời gian
    const achievements = [
        {
            title: t("Sinh viên 5 Tốt", "Five-Merit Student"),
            desc: t(
                "Đạt danh hiệu liên tiếp 2023 – 2024, toàn diện về đạo đức, học tập, thể lực, tình nguyện và hội nhập.",
                "Earned the title in consecutive years (2023 – 2024) for all-round excellence in ethics, academics, fitness, volunteering and global integration."
            ),
            date: "2023 – 2024",
            icon: Zap,
            image: "/pictures/SV5T_2023_2.jpg"
        },
        {
            title: t("Sao Tháng Giêng", "January Star Award"),
            desc: t(
                "Giải thưởng dành cho cán bộ Hội Sinh viên có thành tích xuất sắc trong học tập và rèn luyện.",
                "An award honoring Student Association officers for outstanding achievement in academics and personal development."
            ),
            date: "2024",
            icon: Star,
            image: "/pictures/Sao tháng giêng-2024.jpg"
        },
        {
            title: t("Sinh viên Xuất sắc", "Excellent Student"),
            desc: t(
                "Duy trì phong độ học tập xuất sắc trong suốt 4 năm đại học.",
                "Maintained outstanding academic performance throughout four years of university."
            ),
            date: t("4 năm", "4 years"),
            icon: Award,
            image: "/pictures/z7706777109007_23a5f5f8d29e646288fc635d8458cc7c.jpg"
        }
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#fbf5f1] text-[#3a2420] selection:bg-rose-200">
            {/* Thanh tiến trình cuộn */}
            <motion.div
                className="fixed left-0 right-0 top-0 z-[100] h-[4px] origin-left bg-gradient-to-r from-rose-300 via-rose-500 to-pink-300"
                style={{ scaleX: smoothProgress }}
            />

            {/* Nền trang trí */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-rose-200/50 blur-[140px]" />
            <div className="pointer-events-none absolute top-[35%] -left-60 h-[560px] w-[560px] rounded-full bg-[#fde4dc]/80 blur-[140px]" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-40"
                style={{
                    backgroundImage: "radial-gradient(rgba(190,80,100,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
                    WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
                }}
            />

            {/* ================= MỞ ĐẦU ================= */}
            <section className="relative z-10 px-6 pb-20 pt-32 lg:pt-36">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
                    <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500 shadow-sm backdrop-blur"
                        >
                            <Sparkles size={14} className="animate-pulse" /> {t("Hồ sơ cá nhân 2026", "Personal Portfolio 2026")}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.1 }}
                            className="mb-6 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl"
                        >
                            Bạch Thị <br />
                            <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-[#e8a598] bg-clip-text font-normal italic text-transparent">
                                Thiện Thanh
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-bold uppercase tracking-[0.2em] text-[#a88a80] lg:justify-start"
                        >
                            <span>{t("Khoa học Máy tính", "Computer Science")}</span>
                            <span className="h-1 w-1 rounded-full bg-rose-300" />
                            <span className="text-rose-500">{t("Á khoa CNTT", "IT Runner-up Valedictorian")}</span>
                            <span className="h-1 w-1 rounded-full bg-rose-300" />
                            <span>{t("ĐH Khoa học Huế", "University of Sciences, Hue University")}</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.8, ease }}
                            className="relative mx-auto max-w-xl rounded-[2rem] border border-white/80 bg-white/60 p-7 pl-14 text-left shadow-[0_20px_60px_-30px_rgba(190,80,100,0.35)] backdrop-blur lg:mx-0"
                        >
                            <Quote size={24} className="absolute left-5 top-7 text-rose-300" />
                            <p className="text-lg italic leading-relaxed text-[#6e5249]">
                                {t(
                                    "Nơi những dòng code không chỉ là logic, mà còn là câu chuyện mang đậm dấu ấn của riêng mình.",
                                    "Where lines of code are more than logic — they tell a story that is unmistakably my own."
                                )}
                            </p>
                        </motion.div>

                        <div className="mt-10 flex justify-center gap-4 lg:justify-start">
                            {socialLinks.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                                    whileHover={{ y: -6 }}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-white text-[#a88a80] shadow-md transition-colors hover:border-rose-500 hover:bg-rose-500 hover:text-white hover:shadow-rose-200"
                                >
                                    <item.Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Ảnh đại diện */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, ease }}
                        style={{ y: yImage }}
                        className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:col-span-5"
                    >
                        <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-b from-rose-200/70 to-[#fde4dc]/40 blur-2xl" />
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[3rem] border-2 border-rose-200" />
                        <div className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] border-[8px] border-white shadow-[0_40px_80px_-30px_rgba(150,50,70,0.45)]">
                            <img
                                src="/pictures/anhtotnghiep.jpg"
                                alt="Bạch Thị Thiện Thanh"
                                className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a]/40 via-transparent to-transparent" />
                        </div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 pr-6 shadow-xl backdrop-blur md:-left-12"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 text-white">
                                <Crown size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500">{t("Tốt nghiệp", "Graduated")}</p>
                                <p className="font-black text-[#3a2420]">{t("Á khoa CNTT", "IT Runner-up Valedictorian")}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-5 right-4 text-rose-300"
                        >
                            <Sparkles size={36} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ================= TUYÊN NGÔN ================= */}
            <section className="relative z-10 px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] px-8 py-14 text-center shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)] md:px-16 md:py-20"
                >
                    <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-400/25 blur-[100px]" />
                    <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-pink-300/15 blur-[100px]" />
                    <Quote size={48} className="mx-auto mb-6 text-rose-300/60" />
                    <h2 className="relative text-2xl font-light leading-snug text-rose-50 md:text-4xl">
                        {t(
                            <>
                                Trưởng thành là hành trình được vun đắp bằng{" "}
                                <span className="font-normal italic text-rose-300">đôi tay và sự nỗ lực không ngừng</span>{" "}
                                của chính mình.
                            </>,
                            <>
                                Growth is a journey shaped by{" "}
                                <span className="font-normal italic text-rose-300">my own hands and unwavering effort</span>.
                            </>
                        )}
                    </h2>
                </motion.div>
            </section>

            {/* ================= 01. CÂU CHUYỆN ================= */}
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
                <SectionHeader
                    number="01"
                    eyebrow={t("Câu chuyện", "My Story")}
                    title={t("Kỹ thuật, tâm hồn", "Craft, soul")}
                    accent={t("& sự cống hiến", "& dedication")}
                    subtitle={t("Mình là ai, mình làm gì và điều gì thúc đẩy mình.", "Who I am, what I do, and what drives me.")}
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Ảnh chân dung */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease }}
                        className="group relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-30px_rgba(150,50,70,0.45)] lg:col-span-5"
                    >
                        <img
                            src={encodeURI("/pictures/Ảnh profile.jpg")}
                            alt={t("Chân dung Thiện Thanh", "Portrait of Thiện Thanh")}
                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a]/85 via-[#4a1f2a]/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                            <div className="mb-3 flex items-center gap-2 text-xs text-rose-100/90">
                                <MapPin size={14} /> {t("Huế, Việt Nam", "Hue, Vietnam")}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {activities.map(({ icon: Icon, label }) => (
                                    <span key={label} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold ring-1 ring-white/25 backdrop-blur">
                                        <Icon size={12} /> {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tiểu sử */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 lg:col-span-7"
                    >
                        <motion.div variants={itemVariants} className="rounded-[2.5rem] border border-white bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(190,80,100,0.25)] backdrop-blur md:p-10">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-[#fde4dc] text-rose-500">
                                    <GraduationCap size={22} />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight">{t("Xin chào, mình là Thanh", "Hi, I'm Thanh")}</h3>
                            </div>
                            <div className="space-y-4 leading-relaxed text-[#6e5249]">
                                {t(
                                    <>
                                        <p>
                                            Mình là <strong className="text-[#3a2420]">Bạch Thị Thiện Thanh</strong>, tốt nghiệp chuyên ngành Khoa học Máy tính với danh hiệu{" "}
                                            <strong className="text-rose-500">Á khoa Khoa Công nghệ Thông tin</strong>, Trường Đại học Khoa học – Đại học Huế.
                                        </p>
                                        <p>
                                            Với mình, code không chỉ là những dòng lệnh khô khan, mà là công cụ để giải quyết các vấn đề của xã hội. Dự án tâm huyết nhất là nghiên cứu{" "}
                                            <strong className="text-[#3a2420]">Deep Learning chẩn đoán viêm phổi từ ảnh X-quang</strong> – hành trình từ thuật toán đến giá trị cộng đồng.
                                        </p>
                                    </>,
                                    <>
                                        <p>
                                            I&apos;m <strong className="text-[#3a2420]">Bạch Thị Thiện Thanh</strong>, a Computer Science graduate honored as the{" "}
                                            <strong className="text-rose-500">Runner-up Valedictorian of the Faculty of Information Technology</strong>, University of Sciences, Hue University.
                                        </p>
                                        <p>
                                            To me, code is more than dry lines of instructions — it is a tool for solving real problems in society. My most meaningful project is my research on{" "}
                                            <strong className="text-[#3a2420]">deep learning for pneumonia diagnosis from chest X-rays</strong> – a journey from algorithms to real value for the community.
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-rose-100 bg-rose-100 sm:grid-cols-4">
                                {quickStats.map((s) => (
                                    <div key={s.label} className="bg-[#fffaf8] px-3 py-4 text-center">
                                        <div className="text-2xl font-black tracking-tight text-rose-500">{s.value}</div>
                                        <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#a88a80]">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Lĩnh vực theo đuổi */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {focusAreas.map(({ icon: Icon, title, desc }) => (
                                <motion.div
                                    key={title}
                                    whileHover={{ y: -4 }}
                                    className="group flex items-center gap-4 rounded-[1.75rem] border border-rose-100/80 bg-gradient-to-br from-[#fff8f5] to-white p-5 transition-shadow hover:shadow-[0_20px_40px_-25px_rgba(244,63,94,0.5)]"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-200 transition-transform duration-500 group-hover:-rotate-6">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <p className="font-black text-[#3a2420]">{title}</p>
                                        <p className="text-sm text-[#a88a80]">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Link
                                href="/introduction"
                                className="group inline-flex items-center gap-4 rounded-full bg-[#4a1f2a] py-2 pl-6 pr-2 text-white shadow-lg transition-all duration-300 hover:bg-rose-500 hover:shadow-rose-200"
                            >
                                <span className="text-[11px] font-black uppercase tracking-[0.2em]">{t("Đọc giới thiệu chi tiết", "Read the full introduction")}</span>
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:rotate-45">
                                    <ArrowUpRight size={18} />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ================= 02. DANH HIỆU & THÀNH TỰU ================= */}
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
                <SectionHeader
                    number="02"
                    eyebrow={t("Dấu ấn", "Milestones")}
                    title={t("Danh hiệu", "Honors")}
                    accent={t("& thành tựu", "& achievements")}
                    subtitle={t("Lưu giữ những khoảnh khắc nỗ lực và những cột mốc đáng tự hào.", "Capturing moments of hard work and the milestones I'm proud of.")}
                />

                {/* Danh hiệu nổi bật nhất */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                    className="relative mb-8 flex flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-rose-500 via-rose-400 to-pink-400 p-8 text-white shadow-[0_30px_60px_-30px_rgba(244,63,94,0.7)] md:flex-row md:p-10"
                >
                    <Crown size={200} className="pointer-events-none absolute -bottom-10 -right-6 rotate-12 text-white/10" />
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
                        <GraduationCap size={38} />
                    </div>
                    <div className="relative text-center md:text-left">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-rose-100">{t("Danh hiệu tốt nghiệp", "Graduation Honor")}</p>
                        <h3 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">{t("Á khoa Khoa Công nghệ Thông tin", "Runner-up Valedictorian, Faculty of Information Technology")}</h3>
                        <p className="mt-2 text-white/85">{t("Thành quả của 4 năm bền bỉ học tập và rèn luyện, GPA 3.83/4.0.", "The result of four years of persistent study and personal growth, with a GPA of 3.83/4.0.")}</p>
                    </div>
                    <div className="relative flex shrink-0 gap-3 md:ml-auto">
                        <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-bold backdrop-blur">
                            <Trophy size={14} /> {t("2 giải Nhì", "2 Second Prizes")}
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.image}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease }}
                            viewport={{ once: true }}
                            className="group overflow-hidden rounded-[2.5rem] border border-white bg-white/80 shadow-[0_20px_60px_-30px_rgba(190,80,100,0.3)] backdrop-blur transition-shadow duration-500 hover:shadow-[0_40px_80px_-30px_rgba(244,63,94,0.45)]"
                        >
                            <div className="relative m-3 mb-0 aspect-[4/3] overflow-hidden rounded-[2rem]">
                                <img
                                    src={encodeURI(item.image)}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a]/60 via-transparent to-transparent" />
                                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black text-rose-500 backdrop-blur">
                                    {item.date}
                                </span>
                            </div>
                            <div className="p-7">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500 transition-all duration-500 group-hover:bg-rose-500 group-hover:text-white">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="h-px flex-1 bg-gradient-to-r from-rose-200 to-transparent" />
                                </div>
                                <h4 className="text-xl font-black text-[#3a2420] transition-colors group-hover:text-rose-500">{item.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-[#6e5249]">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center pt-14">
                    <Link href="/journey" className="group relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-[#e8a598] opacity-30 blur transition duration-1000 group-hover:opacity-90 group-hover:duration-200" />
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative flex items-center gap-3 rounded-full border border-white bg-white px-8 py-4 shadow-2xl"
                        >
                            <Sparkles size={18} className="text-rose-400" />
                            <span className="font-bold text-[#3a2420] transition-colors group-hover:text-rose-500 md:text-lg">
                                {t("Khám phá toàn bộ hành trình", "Explore my full journey")}
                            </span>
                            <ArrowRight className="text-rose-500 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* ================= KẾT NỐI ================= */}
            <section className="relative z-10 px-6 pb-24 pt-8">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-rose-100 via-[#fdeee9] to-pink-100 p-10 text-center shadow-[0_40px_80px_-40px_rgba(190,80,100,0.5)] md:p-16"
                >
                    <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-8 -left-4 select-none text-[8rem] italic leading-none text-white/60 md:text-[11rem]">
                        Thanh
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500 shadow-sm">
                            <Sparkles size={14} /> {t("Sẵn sàng cho những ý tưởng mới", "Open to new ideas")}
                        </div>
                        <h2 className="mb-10 text-4xl font-black leading-[1.1] tracking-tight text-[#3a2420] md:text-6xl">
                            {t("Cùng tạo nên những", "Shall we build something")} <br />
                            <span className="font-normal italic text-rose-500">{t("điều tuyệt vời nhé?", "wonderful together?")}</span>
                        </h2>

                        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                            <Link
                                href="/connect"
                                className="group flex items-center gap-3 rounded-full bg-rose-500 px-9 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-rose-300/50 transition-all duration-300 hover:bg-[#4a1f2a]"
                            >
                                <Mail size={18} /> {t("Gửi tin nhắn", "Send a message")}
                                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/1mnZTDMhEp757wSQL0N-xrcYFmgmIzGk0/view"
                                className="flex items-center gap-3 rounded-full border border-white bg-white/80 px-9 py-4 text-sm font-bold uppercase tracking-widest text-[#6e5249] backdrop-blur transition-all duration-300 hover:bg-white hover:text-rose-500"
                            >
                                <FileText size={18} /> {t("Tải CV chi tiết", "Download full CV")}
                            </a>
                        </div>

                        <p className="mt-10 text-sm italic text-[#a88a80]">{t("Luôn phản hồi trong vòng 24 giờ làm việc", "I always reply within 24 business hours")}</p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
