"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    BookOpen, Code, Award, GraduationCap,
    Users, Rocket, Heart, Brain,
    ArrowRight, Sparkles, Briefcase, Search, Target,
    MessageCircle,
    Coffee,
    Music,
    Camera,
    Gamepad2,
    Lightbulb,
    Zap,
    Trophy,
    FileText,
    Quote,
    MapPin,
    Building2,
    Star,
    Languages,
    Medal,
    Crown,
    Palette,
    Mic,
    Presentation,
    Microscope,
    Smartphone,
    Calendar,
} from 'lucide-react';
import Link from 'next/link';
import FutureVision from './dreams';
import { useLang } from '../i18n';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } }
};

const cardBase = "rounded-[2.5rem] border border-white bg-white/80 shadow-[0_20px_60px_-30px_rgba(190,80,100,0.25)] backdrop-blur";

// Tiêu đề nhỏ dùng chung cho các section
const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
    <div className="flex items-center gap-3">
        <span className={`h-px w-10 ${light ? 'bg-rose-300/60' : 'bg-rose-300'}`} />
        <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${light ? 'text-rose-200' : 'text-rose-500'}`}>{children}</span>
    </div>
);

// Ô icon hồng dùng chung
const IconBadge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-[#fde4dc] text-rose-500 ring-1 ring-white shadow-[0_10px_30px_-10px_rgba(244,63,94,0.35)] ${className}`}>
        {children}
    </div>
);

// Tiêu đề card: icon + chữ
const CardTitle = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
    <div className="mb-7 flex items-center gap-4">
        <IconBadge className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
            <Icon size={22} />
        </IconBadge>
        <h3 className="text-2xl font-black tracking-tight">{children}</h3>
    </div>
);

// Tiêu đề section có đánh số
const SectionHeader = ({ number, eyebrow, title, accent, subtitle, center = false }: {
    number: string; eyebrow: string; title: string; accent: string; subtitle?: string; center?: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className={`mb-10 flex flex-col gap-5 md:mb-12 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}
    >
        <div className={`flex gap-5 ${center ? "flex-col items-center gap-3" : "items-end"}`}>
            <span className="select-none bg-gradient-to-b from-rose-300 to-rose-100 bg-clip-text text-6xl font-black leading-none text-transparent md:text-7xl">
                {number}
            </span>
            <div className={center ? "flex flex-col items-center" : ""}>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className="mt-3 text-3xl font-black tracking-tighter md:text-5xl">
                    {title} <span className="font-normal italic text-rose-500">{accent}</span>
                </h2>
            </div>
        </div>
        {subtitle && (
            <p className={`max-w-sm italic text-[#a88a80] ${center ? "" : "md:text-right"}`}>{subtitle}</p>
        )}
    </motion.div>
);

const Introduction = () => {
    const { t } = useLang();

    const timelineData = [
        { year: "2023", title: t("Sinh viên 5 Tốt", "Five-Merit Student"), desc: t("Giấy khen xuất sắc công tác Hội, gia nhập CLB Hỗ trợ lập trình.", "Commended for outstanding Student Association work; joined the Programming Support Club."), icon: Heart, tag: t("Hoạt động", "Activities") },
        { year: "2024", title: t("Sao tháng Giêng", "January Star Award"), desc: t("Danh hiệu Sao tháng Giêng & Sinh viên 5 Tốt cấp Trường.", "Received the January Star Award and the university-level Five-Merit Student title."), icon: Award, tag: t("Vinh danh", "Honors") },
        { year: "2024", title: t("Giải Nhì SPIT Front-end", "Second Prize, SPIT Front-end"), desc: t("Cùng tham gia Olympic Toán học Sinh viên toàn quốc.", "Also competed in the National Student Mathematics Olympiad."), icon: Code, tag: t("Giải thưởng", "Award") },
        { year: "2025", title: t("Thực tập Tester tại DHY Solutions", "Tester Intern at DHY Solutions"), desc: t("Kiểm thử app giao hàng PANGO (4/2025 - 10/2025).", "Tested the PANGO delivery app (Apr 2025 – Oct 2025)."), icon: Search, tag: t("Kinh nghiệm", "Experience") },
        { year: "2025", title: t("Nghiên cứu khoa học", "Scientific Research"), desc: t("Đề tài Deep Learning chẩn đoán viêm phổi; Phó LCH Khoa CNTT.", "Deep Learning research on pneumonia diagnosis; Vice President of the IT Faculty Student Association."), icon: Brain, tag: t("Nghiên cứu", "Research") },
        { year: "2026", title: t("Giải Nhì HUE-ICT Challenge", "Second Prize, HUE-ICT Challenge"), desc: t("Sản phẩm Gated Fusion chẩn đoán viêm phổi từ ảnh X-quang.", "Gated Fusion: a product for diagnosing pneumonia from chest X-rays."), icon: Trophy, tag: t("Giải thưởng", "Award") },
        { year: "2026", title: t("Thực tập tại VNNIC", "Internship at VNNIC"), desc: t("Phát triển giao diện web & ứng dụng AI đa phương thức.", "Built web interfaces and applied multimodal AI."), icon: Briefcase, tag: t("Thực tập", "Internship") },
        { year: "2026", title: t("Lập trình viên tại PT Valley", "Developer at PT Valley"), desc: t("Phát triển ứng dụng di động đa nền tảng với Flutter.", "Building cross-platform mobile apps with Flutter."), icon: Smartphone, tag: t("Làm việc", "Work") },
        { year: "2026", title: t("Tốt nghiệp Á khoa CNTT", "Graduated as IT Runner-up Valedictorian"), desc: t("Tốt nghiệp với danh hiệu Á khoa Khoa Công nghệ Thông tin.", "Graduated as Runner-up Valedictorian of the Faculty of Information Technology."), icon: GraduationCap, tag: t("Tốt nghiệp", "Graduation") },
    ];

    const experiences = [
        {
            company: "PT Valley",
            role: t("Lập trình viên Fresher", "Fresher Developer"),
            type: t("Làm việc", "Full-time"),
            period: "",
            icon: Smartphone,
            tasks: t(
                [
                    "Phát triển app di động đa nền tảng",
                    "Xây dựng giao diện & chức năng theo yêu cầu",
                    "Quản lý mã nguồn, làm việc nhóm qua Git/GitHub",
                ],
                [
                    "Develop cross-platform mobile apps",
                    "Build UIs and features to specification",
                    "Manage source code and collaborate via Git/GitHub",
                ],
            ),
            tech: ["Flutter", "Dart", "Git"],
        },
        {
            company: t("Trung tâm Internet Việt Nam", "Vietnam Internet Network Information Center (VNNIC)"),
            role: t("Thực tập sinh", "Intern"),
            type: t("Thực tập", "Internship"),
            period: "4/2026 - 5/2026",
            icon: Briefcase,
            tasks: t(
                [
                    "Thiết kế & phát triển giao diện website",
                    "Dùng Qwen3-VL-2B phân tích ảnh, phát hiện vi phạm",
                    "Làm việc nhóm & giải quyết vấn đề",
                ],
                [
                    "Designed and developed website interfaces",
                    "Used Qwen3-VL-2B to analyze images and detect violations",
                    "Teamwork and problem-solving",
                ],
            ),
            tech: ["UI/UX", "Qwen3-VL", "Website"],
        },
        {
            company: "DHY Solutions",
            role: t("Thực tập sinh Tester", "Tester Intern"),
            type: t("Thực tập", "Internship"),
            period: "4/2025 - 10/2025",
            icon: Search,
            tasks: t(
                [
                    "Kiểm thử app giao hàng PANGO",
                    "Viết & thực thi test case, theo dõi bug",
                    "Kiểm thử lại, kiểm thử hồi quy cùng lập trình viên",
                ],
                [
                    "Tested the PANGO delivery app",
                    "Wrote and executed test cases, tracked bugs",
                    "Ran retests and regression tests with developers",
                ],
            ),
            tech: t(["Test case", "Theo dõi lỗi", "Kiểm thử hồi quy"], ["Test cases", "Bug tracking", "Regression testing"]),
        },
    ];

    const achievements = [
        {
            icon: FileText,
            tag: t("Công bố khoa học", "Publication"),
            title: t("Bài báo khoa học", "Research Paper"),
            desc: t(
                "“Phương pháp kết hợp đặc trưng thích nghi cho bài toán phân lớp bệnh viêm phổi từ ảnh X-quang” – ĐH Khoa học Huế.",
                "“An Adaptive Feature Fusion Method for Pneumonia Classification from Chest X-ray Images” – University of Sciences, Hue University.",
            ),
        },
        {
            icon: Trophy,
            tag: "HUE-ICT 2026",
            title: t("Giải Nhì HUE-ICT Challenge", "Second Prize, HUE-ICT Challenge"),
            desc: t("Sản phẩm sáng tạo CNTT: Gated Fusion chẩn đoán viêm phổi từ ảnh X-quang.", "IT innovation entry: Gated Fusion, diagnosing pneumonia from chest X-rays."),
            image: "/pictures/hueict.jpg",
        },
        {
            icon: Medal,
            tag: "SPIT Front-end",
            title: t("Giải Nhì SPIT Front-end", "Second Prize, SPIT Front-end"),
            desc: t("Cuộc thi thiết kế giao diện web của CLB Hỗ trợ lập trình.", "A web interface design contest hosted by the Programming Support Club."),
            image: "/pictures/spitfront-end.jpg",
        },
    ];

    const heroStats = [
        { value: "3.83", label: "GPA / 4.0" },
        { value: "B1", label: t("Ngoại ngữ", "English") },
        { value: "03", label: t("Kinh nghiệm", "Positions") },
        { value: "07", label: t("Dự án", "Projects") },
    ];

    const academicFacts = [
        { icon: GraduationCap, label: t("Chuyên ngành", "Major"), value: t("Khoa học Máy tính", "Computer Science") },
        { icon: Building2, label: t("Trường", "University"), value: t("ĐH Khoa học – ĐH Huế", "University of Sciences – Hue University") },
        { icon: Star, label: "GPA", value: "3.83 / 4.0" },
        { icon: Languages, label: t("Ngoại ngữ", "Language"), value: t("Chứng chỉ B1", "B1 English Certificate") },
    ];

    const leadershipSkills = [
        { icon: Crown, label: t("Lãnh đạo", "Leadership") },
        { icon: Palette, label: t("Thiết kế ấn phẩm", "Graphic design") },
        { icon: Mic, label: t("Văn nghệ", "Performing arts") },
        { icon: Presentation, label: t("Đào tạo", "Training") },
    ];

    const strengths = [
        { icon: Brain, label: t("Tư duy thuật toán", "Algorithmic thinking") },
        { icon: BookOpen, label: t("Tự học nhanh", "Fast self-learner") },
        { icon: Users, label: t("Làm việc nhóm", "Teamwork") },
    ];

    const interests = [
        { icon: Coffee, label: t("Code bên ly cà phê", "Coding over coffee") },
        { icon: Music, label: t("Nhạc Lo-fi", "Lo-fi music") },
        { icon: Camera, label: t("Nhiếp ảnh", "Photography") },
        { icon: Gamepad2, label: t("Trò chơi tư duy", "Puzzle games") },
        { icon: BookOpen, label: t("Đọc blog công nghệ", "Reading tech blogs") },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fbf5f1] text-[#3a2420] pb-24 selection:bg-rose-200">
            {/* Nền trang trí toàn trang */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-rose-200/50 blur-[140px]" />
            <div className="pointer-events-none absolute top-[30%] -left-60 h-[560px] w-[560px] rounded-full bg-[#fde4dc]/80 blur-[140px]" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-40"
                style={{
                    backgroundImage: "radial-gradient(rgba(190,80,100,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
                    WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
                }}
            />

            {/* ================= HERO ================= */}
            <section className="relative px-6 pt-32 pb-24">
                <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
                            <Eyebrow>{t("Giới thiệu", "About me")}</Eyebrow>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease }}
                            className="mb-10 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl"
                        >
                            Bạch Thị <br />
                            <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-[#e8a598] bg-clip-text italic font-normal text-transparent">
                                Thiện Thanh
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease }}
                            className="relative max-w-xl rounded-[2rem] border border-white/80 bg-white/60 p-7 pl-14 shadow-[0_20px_60px_-30px_rgba(190,80,100,0.35)] backdrop-blur"
                        >
                            <Quote size={24} className="absolute left-5 top-7 text-rose-300" />
                            <p className="text-lg italic leading-relaxed text-[#6e5249]">
                                {t(
                                    "Không chỉ nhìn vào những dòng code, mà còn thấy giá trị nhân văn sau mỗi giải pháp công nghệ.",
                                    "Looking beyond the lines of code to the human value behind every technology solution."
                                )}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease }}
                            className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-rose-100 bg-rose-100 sm:grid-cols-4"
                        >
                            {heroStats.map((s) => (
                                <div key={s.label} className="bg-[#fffaf8] px-4 py-5 text-center transition-colors hover:bg-white">
                                    <div className="text-3xl font-black tracking-tight text-rose-500">{s.value}</div>
                                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#a88a80]">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Ảnh chân dung dạng vòm */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-sm lg:col-span-5"
                    >
                        <div className="absolute -inset-6 rounded-t-full rounded-b-[3rem] bg-gradient-to-b from-rose-200/70 to-[#fde4dc]/40 blur-2xl" />
                        <div className="absolute -inset-3 rounded-t-full rounded-b-[2.75rem] border border-rose-200/80" />
                        <div className="group relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2.5rem] border-[6px] border-white bg-rose-100 shadow-[0_40px_80px_-30px_rgba(150,50,70,0.45)]">
                            <img
                                src={encodeURI("/pictures/Ảnh profile.jpg")}
                                alt="Bạch Thanh"
                                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a]/75 via-transparent to-transparent" />
                            <div className="absolute bottom-7 left-0 right-0 text-center text-white">
                                <p className="text-2xl font-bold tracking-tight">Thiện Thanh</p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-rose-100/90">{t("Lập trình viên & Thủ lĩnh", "Developer & Leader")}</p>
                            </div>
                        </div>

                        {/* Huy hiệu nổi */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-6 top-1/4 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:-left-12"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white">
                                <GraduationCap size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-[#3a2420]">{t("Á khoa CNTT", "IT Runner-up Valedictorian")}</p>
                                <p className="text-[10px] text-[#a88a80]">{t("Khoa học Máy tính", "Computer Science")}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 bottom-1/4 flex items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur md:-right-10"
                        >
                            <MapPin size={14} className="text-rose-500" />
                            <span className="text-[11px] font-bold text-[#3a2420]">{t("ĐH Khoa học Huế", "University of Sciences, Hue University")}</span>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-4 right-6 text-rose-300"
                        >
                            <Sparkles size={36} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* ================= 01. VỀ MÌNH ================= */}
            <section id="ve-minh" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-14">
                <SectionHeader
                    number="01"
                    eyebrow={t("Về mình", "About me")}
                    title={t("Nền tảng", "Background")}
                    accent={t("& con người", "& character")}
                    subtitle={t("Học vấn, lý do theo đuổi ngành và những điều mình đang hoàn thiện.", "My education, why I chose this field, and what I'm still working on.")}
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-12"
                >
                    {/* Học vấn */}
                    <motion.div variants={itemVariants} className={`group relative overflow-hidden p-8 md:col-span-7 md:p-10 ${cardBase}`}>
                        <motion.img
                            src="/pictures/Plane2.png"
                            alt=""
                            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="pointer-events-none absolute -bottom-12 -right-16 w-[260px] opacity-20 transition-opacity duration-700 group-hover:opacity-50"
                        />
                        <div className="relative z-10">
                            <CardTitle icon={GraduationCap}>{t("Học vấn", "Education")}</CardTitle>
                            <div className="mb-6 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-400 p-4 text-white shadow-lg shadow-rose-200">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30">
                                    <Crown size={22} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-100">{t("Danh hiệu tốt nghiệp", "Graduation honor")}</p>
                                    <p className="text-lg font-black leading-tight">{t("Á khoa Công nghệ Thông tin", "Runner-up Valedictorian, Information Technology")}</p>
                                </div>
                            </div>
                            <p className="mb-6 max-w-md text-[#6e5249]">
                                {t(
                                    <>Tốt nghiệp với danh hiệu <strong className="text-[#3a2420]">Á khoa Khoa Công nghệ Thông tin</strong>, nhiều năm liền đạt danh hiệu <strong className="text-[#3a2420]">Sinh viên Xuất sắc</strong>.</>,
                                    <>Graduated as <strong className="text-[#3a2420]">Runner-up Valedictorian of the Faculty of Information Technology</strong>, and named an <strong className="text-[#3a2420]">Excellent Student</strong> for several consecutive years.</>
                                )}
                            </p>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {academicFacts.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-rose-100/80 bg-[#fff8f5]/80 p-4 transition-colors hover:bg-white">
                                        <Icon size={20} className="shrink-0 text-rose-400" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#a88a80]">{label}</p>
                                            <p className="text-sm font-black text-[#3a2420]">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tại sao KHMT */}
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-[2.5rem] border border-rose-100 bg-gradient-to-br from-[#fff8f5] via-[#fdeee9] to-rose-100 p-8 md:col-span-5"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-md"
                        >
                            <Lightbulb size={22} />
                        </motion.div>
                        <h3 className="mb-4 text-2xl font-black leading-tight tracking-tight">
                            {t("Vì sao chọn", "Why")} <span className="font-normal italic text-rose-500">{t("Khoa học Máy tính?", "Computer Science?")}</span>
                        </h3>
                        <div className="space-y-4 leading-relaxed text-[#6e5249]">
                            <p>
                                {t(
                                    <>Bắt đầu từ sự tò mò về cách thế giới vận hành qua những con số, mình nhận ra <strong className="text-[#3a2420]">lập trình không chỉ là gõ phím</strong>. Đó là công cụ mạnh mẽ để biến những ý tưởng trừu tượng thành giải pháp thiết thực cho cuộc sống.</>,
                                    <>It started with curiosity about how the world runs on numbers. Along the way I realized that <strong className="text-[#3a2420]">programming is more than typing code</strong> — it&rsquo;s a powerful tool for turning abstract ideas into practical solutions for everyday life.</>
                                )}
                            </p>
                            <p className="rounded-2xl border-l-4 border-rose-300 bg-white/60 py-3 pl-5 pr-3 text-sm italic">
                                &ldquo;{t(
                                    "Thử thách lớn nhất là khi thuật toán không chạy, nhưng hạnh phúc nhất là khi thấy sản phẩm của mình giúp ích được cho cộng đồng.",
                                    "The hardest moments are when an algorithm won't work; the happiest are when I see my work making a difference for the community."
                                )}&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* Thế mạnh */}
                    <motion.div variants={itemVariants} className={`group p-8 md:col-span-7 ${cardBase}`}>
                        <CardTitle icon={Zap}>{t("Thế mạnh", "Strengths")}</CardTitle>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {strengths.map(({ icon: Icon, label }) => (
                                <motion.div key={label} whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 rounded-2xl bg-[#fff8f5] p-4 text-center text-sm font-semibold text-[#6e5249]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                                        <Icon size={18} />
                                    </span>
                                    {label}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Điểm cần cải thiện */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-400 to-pink-400 p-8 text-white shadow-[0_30px_60px_-30px_rgba(244,63,94,0.6)] md:col-span-5"
                    >
                        <div className="relative z-10">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                                <Target size={22} />
                            </div>
                            <h3 className="mb-4 text-2xl font-black tracking-tight">{t("Đang cải thiện", "Working on")}</h3>
                            <p className="italic text-white/90">
                                {t("Bớt cầu toàn, cân bằng giữa sự hoàn hảo và tiến độ.", "Letting go of perfectionism and balancing quality with deadlines.")}
                            </p>
                        </div>
                        <Target size={150} className="pointer-events-none absolute -bottom-8 -right-8 text-white/10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                    </motion.div>

                </motion.div>
            </section>

            {/* ================= 02. KINH NGHIỆM ================= */}
            <section id="kinh-nghiem" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-14">
                <SectionHeader
                    number="02"
                    eyebrow={t("Kinh nghiệm", "Experience")}
                    title={t("Thực tập", "Internships")}
                    accent={t("& làm việc", "& work")}
                    subtitle={t("Môi trường thực tế giúp mình trưởng thành về kỹ năng và tư duy.", "Real-world environments that sharpened both my skills and my mindset.")}
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-12"
                >
                    {/* Kinh nghiệm thực tập và làm việc */}
                    <motion.div variants={itemVariants} className={`group p-8 md:col-span-12 md:p-10 ${cardBase}`}>
                        <div className="flex items-start justify-between gap-4">
                            <CardTitle icon={Rocket}>{t("Kinh nghiệm", "Experience")}</CardTitle>
                            <span className="mt-3 rounded-full border border-rose-100 bg-rose-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-rose-500">
                                {experiences.length} {t("vị trí", "roles")}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                            {experiences.map((exp) => (
                                <motion.div
                                    key={exp.company}
                                    whileHover={{ y: -6 }}
                                    className="group/card relative flex flex-col overflow-hidden rounded-[2rem] border border-rose-100/80 bg-gradient-to-b from-[#fff8f5] to-white p-6 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(244,63,94,0.45)]"
                                >
                                    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-[#e8a598] opacity-60 transition-opacity group-hover/card:opacity-100" />
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-200 transition-transform duration-500 group-hover/card:-rotate-6">
                                            <exp.icon size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="truncate font-black leading-tight text-[#3a2420]">{exp.company}</h4>
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-rose-500">{exp.role}</p>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold text-[#a88a80]">
                                        <Calendar size={12} />
                                        <span>{exp.period || exp.type}</span>
                                    </div>
                                    <ul className="space-y-2 border-t border-rose-100 pt-4">
                                        {exp.tasks.map((task) => (
                                            <li key={task} className="flex items-start gap-2.5 text-sm text-[#6e5249]">
                                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-rose-400" />
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                                        {exp.tech.map((t) => (
                                            <span key={t} className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold text-rose-500">{t}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </section>

            {/* ================= 03. NGHIÊN CỨU & THÀNH TÍCH ================= */}
            <section id="nghien-cuu" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-14">
                <SectionHeader
                    number="03"
                    eyebrow={t("Học thuật", "Academics")}
                    title={t("Nghiên cứu", "Research")}
                    accent={t("& thành tích", "& achievements")}
                    subtitle={t("Những dấu ấn học thuật và giải thưởng nổi bật.", "Academic milestones and notable awards.")}
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-12"
                >
                    {/* Nghiên cứu khoa học - điểm nhấn rượu vang */}
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] p-8 text-rose-50 shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)] md:col-span-12 md:p-12"
                    >
                        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-400/25 blur-[100px]" />
                        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
                            <div className="lg:col-span-6">
                                <Eyebrow light>{t("Nghiên cứu", "Research")}</Eyebrow>
                                <h3 className="mt-5 text-4xl font-black leading-tight tracking-tighter text-white md:text-5xl">
                                    {t("Từ thuật toán", "From algorithms")} <br />
                                    <span className="font-normal italic text-rose-200">{t("đến thực tiễn", "to real-world impact")}</span>
                                </h3>
                                <div className="mt-8 space-y-4">
                                    {[
                                        { icon: Microscope, year: "2025", text: t("NCKH: Kết hợp phân đoạn & phân lớp ảnh X-quang chẩn đoán viêm phổi", "Research: combining segmentation and classification of chest X-rays to diagnose pneumonia") },
                                        { icon: Smartphone, year: "2026", text: t("Xây dựng ứng dụng di động tiện ích cho sinh viên HUSC", "Building a utility mobile app for HUSC students") },
                                    ].map(({ icon: Icon, year, text }) => (
                                        <div key={year} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-400/20 text-rose-200">
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black tracking-widest text-rose-300">{year}</span>
                                                <p className="text-sm leading-relaxed text-rose-50/90">{text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative lg:col-span-6">
                                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-rose-400/40 to-transparent blur-2xl" />
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-white/20">
                                    <img src="/pictures/NCKH_2.jpg" alt={t("Báo cáo nghiên cứu khoa học", "Presenting scientific research")} className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a1820]/60 to-transparent" />
                                    <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-[#4a1f2a]">
                                        <Presentation size={13} /> {t("Báo cáo NCKH cấp Trường", "University-level research presentation")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Thành tích */}
                    <motion.div variants={itemVariants} className="group rounded-[2.5rem] border border-rose-100/80 bg-gradient-to-br from-[#fff8f5] to-rose-50 p-8 md:col-span-12 md:p-10">
                        <CardTitle icon={Trophy}>{t("Thành tích & Nghiên cứu", "Achievements & Research")}</CardTitle>
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                            {achievements.map(({ icon: Icon, tag, title, desc, image }) => (
                                <motion.div
                                    key={title}
                                    whileHover={{ y: -6 }}
                                    className="relative flex flex-col overflow-hidden rounded-[2rem] bg-white/80 p-6 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(244,63,94,0.45)]"
                                >
                                    {image && (
                                        <img src={encodeURI(image)} alt={title} className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-6 rounded-2xl object-cover opacity-90 shadow-lg ring-4 ring-white" />
                                    )}
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-400 text-white shadow-lg shadow-rose-200">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-400">{tag}</span>
                                    <h4 className="mt-1 text-lg font-black leading-snug text-[#3a2420]">{title}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-[#6e5249]">{desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= 04. HOẠT ĐỘNG & SỞ THÍCH ================= */}
            <section id="hoat-dong" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-14">
                <SectionHeader
                    number="04"
                    eyebrow={t("Cộng đồng", "Community")}
                    title={t("Hoạt động", "Activities")}
                    accent={t("& sở thích", "& interests")}
                    subtitle={t("Kết nối cộng đồng và những điều mình yêu thích.", "Giving back to the community, and the things I love.")}
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-12"
                >
                    {/* Hoạt động & lãnh đạo - có ảnh nền CLB */}
                    <motion.div variants={itemVariants} className="group relative min-h-[420px] overflow-hidden rounded-[2.5rem] md:col-span-7">
                        <img
                            src="/pictures/clb.jpg"
                            alt={t("CLB Hỗ trợ lập trình", "Programming Support Club")}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a] via-[#4a1f2a]/70 to-[#4a1f2a]/10" />
                        <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white md:p-10">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                                <Users size={22} />
                            </div>
                            <h3 className="mb-4 text-2xl font-black tracking-tight">{t("Sứ mệnh tuổi trẻ", "Youth in Action")}</h3>
                            <ul className="mb-6 space-y-2 text-sm text-rose-50/90">
                                <li className="flex items-center gap-2"><Crown size={14} className="text-rose-300" /> {t("Phó Liên chi hội trưởng Khoa CNTT", "Vice President, IT Faculty Student Association")}</li>
                                <li className="flex items-center gap-2"><Code size={14} className="text-rose-300" /> {t("Phó ban Kỹ năng CLB Hỗ trợ lập trình", "Deputy Head of Skills, Programming Support Club")}</li>
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {leadershipSkills.map(({ icon: Icon, label }) => (
                                    <span key={label} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold ring-1 ring-white/25 backdrop-blur">
                                        <Icon size={12} /> {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sở thích */}
                    <motion.div variants={itemVariants} className={`group flex flex-col p-8 md:col-span-5 md:p-10 ${cardBase}`}>
                        <CardTitle icon={Heart}>{t("Sở thích", "Interests")}</CardTitle>
                        <p className="mb-6 text-[#6e5249]">{t("Những điều giúp mình cân bằng sau giờ làm việc.", "What keeps me balanced outside of work.")}</p>
                        <div className="mt-auto flex flex-wrap gap-3">
                            {interests.map(({ icon: Icon, label }) => (
                                <motion.div
                                    key={label}
                                    whileHover={{ y: -4 }}
                                    className="group/chip flex cursor-default items-center gap-2.5 rounded-2xl border border-rose-100 bg-[#fff8f5] px-4 py-2.5 text-sm font-bold text-[#6e5249] transition-colors hover:border-rose-400 hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-200"
                                >
                                    <Icon size={16} className="text-rose-400 transition-colors group-hover/chip:text-white" />
                                    <span>{label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= 05. HÀNH TRÌNH ================= */}
            <section id="hanh-trinh" className="relative z-10 mx-auto max-w-5xl scroll-mt-28 px-6 py-14">
                <SectionHeader
                    number="05"
                    eyebrow={t("Cột mốc", "Milestones")}
                    title={t("Hành trình", "A journey of")}
                    accent={t("trưởng thành", "growth")}
                    subtitle={t("Từ năm nhất đến hôm nay, qua từng cột mốc đáng nhớ.", "From freshman year to today, one memorable milestone at a time.")}
                    center
                />

                <div className="relative">
                    <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-rose-300 via-rose-200 to-transparent md:left-1/2" />

                    <div className="space-y-8 md:space-y-10">
                        {timelineData.map((step, index) => {
                            const Icon = step.icon;
                            const isLeft = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.7, ease }}
                                    className={`group relative pl-16 md:w-1/2 md:pl-0 ${isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'}`}
                                >
                                    <div className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-[0_8px_20px_-6px_rgba(244,63,94,0.45)] ring-4 ring-[#fbf5f1] transition-all duration-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white ${isLeft ? 'md:left-auto md:-right-5' : 'md:-left-5'}`}>
                                        <Icon size={18} />
                                    </div>
                                    <div className="rounded-[1.75rem] border border-white bg-white/70 p-5 shadow-[0_20px_50px_-30px_rgba(190,80,100,0.3)] backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white">
                                        <div className="mb-2 flex items-center gap-3">
                                            <span className="rounded-full bg-rose-500 px-3 py-0.5 text-xs font-black tabular-nums text-white">{step.year}</span>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">{step.tag}</span>
                                        </div>
                                        <h4 className="text-lg font-bold tracking-tight text-[#3a2420]">{step.title}</h4>
                                        <p className="mt-1 text-sm text-[#6e5249]">{step.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center pt-16"
                >
                    <Link href="/journey" className="group relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-[#e8a598] opacity-30 blur transition duration-1000 group-hover:opacity-90 group-hover:duration-200" />
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative flex items-center gap-3 rounded-full border border-white bg-white px-8 py-4 shadow-2xl"
                        >
                            <span className="font-bold text-[#3a2420] transition-colors group-hover:text-rose-500 md:text-lg">
                                {t("Xem toàn bộ hành trình", "View the full journey")}
                            </span>
                            <ArrowRight className="text-rose-500 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                        </motion.div>
                    </Link>
                </motion.div>
            </section>

            {/* ================= 06. TẦM NHÌN ================= */}
            <FutureVision />

            {/* ================= CALL TO ACTION ================= */}
            <section className="relative z-10 px-6 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-rose-100 via-[#fdeee9] to-pink-100 p-10 text-center shadow-[0_40px_80px_-40px_rgba(190,80,100,0.5)] md:p-14"
                >
                    <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
                    <Rocket size={340} className="pointer-events-none absolute -bottom-16 -right-16 -rotate-12 text-rose-500/[0.06]" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500 shadow-sm">
                            <Sparkles size={14} /> {t("Cùng nhau kết nối", "Let's connect")}
                        </div>
                        <h3 className="mb-10 text-3xl font-black leading-[1.15] tracking-tight text-[#3a2420] md:text-5xl">
                            {t("Cùng khám phá", "Ready to explore")} <br />
                            <span className="font-normal italic text-rose-500">{t("các dự án của mình?", "my projects?")}</span>
                        </h3>
                        <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                            <Link
                                href="/projects"
                                className="group flex items-center justify-center gap-3 rounded-full bg-rose-500 px-9 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-rose-300/50 transition-all duration-300 hover:bg-[#4a1f2a]"
                            >
                                {t("Khám phá dự án", "Explore projects")}
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/connect"
                                className="flex items-center justify-center gap-3 rounded-full border border-white bg-white/80 px-9 py-4 text-sm font-bold uppercase tracking-widest text-[#6e5249] backdrop-blur transition-all duration-300 hover:bg-white hover:text-rose-500"
                            >
                                <MessageCircle size={18} /> {t("Liên hệ ngay", "Get in touch")}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Introduction;
