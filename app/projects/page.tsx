"use client";

import React, { useState } from 'react';
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useMotionTemplate,
    Variants,
} from 'framer-motion';
import {
    Stethoscope,
    Car,
    MessageSquare,
    Layers,
    Sparkles,
    Activity,
    ArrowUpRight,
    Layout,
    Award,
} from 'lucide-react';
import Link from 'next/link';
import { useLang, pick } from '../i18n';

type ProjectGroup = "ai" | "web";

// Văn bản song ngữ
type Localized = { vi: string; en: string };

type Project = {
    year: Localized;
    title: Localized;
    category: string;
    group: ProjectGroup;
    desc: Localized;
    icon: React.ElementType;
    accent: string;
    link: string;
    techStack: string[];
    image: string;
    featured?: boolean;
};

const projectList: Project[] = [
    {
        year: { vi: "2025 - Hiện tại", en: "2025 - Present" },
        title: {
            vi: "Khóa luận Tốt nghiệp: Nghiên cứu phương pháp kết hợp đặc trưng đa nguồn dựa trên Gated Fusion cho bài toán chẩn đoán bệnh viêm phổi từ ảnh X-quang",
            en: "Graduation Thesis: A Gated Fusion Approach to Multi-Source Feature Integration for Pneumonia Diagnosis from Chest X-ray Images",
        },
        category: "Deep Learning / Healthcare",
        group: "ai",
        desc: {
            vi: "Dự án tâm huyết nhất, tập trung vào việc tối ưu hóa độ chính xác trong việc phát hiện các tổn thương phổi phức tạp bằng các kiến trúc mạng nơ-ron tiên tiến nhất.",
            en: "My most meaningful project, focused on maximizing accuracy in detecting complex lung lesions using state-of-the-art neural network architectures.",
        },
        icon: Sparkles,
        accent: "#f59e0b",
        link: "https://drive.google.com/file/d/1AqDR3z6G5wPuqz_syZjtJ3CiMvAhmchR/view",
        techStack: ["Python", "PyTorch", "EfficientNet"],
        image: "/pictures/xray.png",
        featured: true,
    },
    {
        year: { vi: "2025", en: "2025" },
        title: {
            vi: "Nghiên cứu khoa học: Kết hợp Phân đoạn & Phân lớp",
            en: "Scientific Research: Combining Segmentation & Classification",
        },
        category: "Research / AI",
        group: "ai",
        desc: {
            vi: "Đề tài nghiên cứu phương pháp kết hợp phân đoạn và phân lớp dựa trên học sâu cho chẩn đoán bệnh Viêm phổi từ ảnh X-quang lồng ngực.",
            en: "A research project on a deep learning approach that combines segmentation and classification to diagnose pneumonia from chest X-ray images.",
        },
        icon: Stethoscope,
        accent: "#f43f5e",
        link: "https://drive.google.com/file/d/1O1vPY-XOXIIM21QA4dJ-xUrYzcbW_o7H/view",
        techStack: ["Python", "PyTorch", "Kaggle"],
        image: "/pictures/NCKH_1.jpg",
    },
    {
        year: { vi: "2025", en: "2025" },
        title: {
            vi: "Nhận dạng vùng phổi & Chẩn đoán đa giai đoạn",
            en: "Lung Region Detection & Multi-Stage Diagnosis",
        },
        category: "Computer Vision",
        group: "ai",
        desc: {
            vi: "Hệ thống kết hợp YOLOv8, VGG16 và Random Forest để tối ưu hóa độ chính xác trong chẩn đoán lâm sàng.",
            en: "A system combining YOLOv8, VGG16 and Random Forest to maximize accuracy in clinical diagnosis.",
        },
        icon: Activity,
        accent: "#3b82f6",
        link: "https://drive.google.com/file/d/1rtOeo2ktcGgeMjkaiQt_DBfYSB-jkCsk/view",
        techStack: ["YOLOv8", "VGG16", "Random Forest"],
        image: "/pictures/Lý thuyết nhận dạng.png",
    },
    {
        year: { vi: "2025", en: "2025" },
        title: {
            vi: "Phân tích cảm xúc với PhoBERT",
            en: "Sentiment Analysis with PhoBERT",
        },
        category: "NLP / Vietnamese",
        group: "ai",
        desc: {
            vi: "Sử dụng mô hình PhoBERT để phân loại phản hồi sinh viên, hỗ trợ cải thiện chất lượng đào tạo.",
            en: "Uses the PhoBERT model to classify student feedback, helping improve the quality of teaching and learning.",
        },
        icon: MessageSquare,
        accent: "#6366f1",
        link: "https://drive.google.com/file/d/1PsZwZOL1JtzuVaNwAHwdSPXLKoD3V9qi/view",
        techStack: ["NLP", "PhoBERT", "Transformers"],
        image: "/pictures/Xử lý ngôn ngữ tự nhiên.png",
    },
    {
        year: { vi: "2025", en: "2025" },
        title: {
            vi: "Nhận dạng Biển báo giao thông (CNN)",
            en: "Traffic Sign Recognition (CNN)",
        },
        category: "Computer Vision",
        group: "ai",
        desc: {
            vi: "Xây dựng mạng nơ-ron tích chập (CNN) để nhận diện biển báo từ tập dữ liệu thực tế.",
            en: "Built a convolutional neural network (CNN) to recognize traffic signs from a real-world dataset.",
        },
        icon: Car,
        accent: "#10b981",
        link: "https://drive.google.com/file/d/1Y-Avf6gFmovR_S9rg7Pt0xtozGb0FEI9/view",
        techStack: ["CNN", "OpenCV", "Tensorflow"],
        image: "/pictures/Lý thuyết nhận dạng_2.png",
    },
    {
        year: { vi: "2026", en: "2026" },
        title: {
            vi: "Thiết kế giao diện Chả cá cây Sang",
            en: "Chả cá cây Sang Website Design",
        },
        category: "UX/UI Design",
        group: "web",
        desc: {
            vi: "Dự án phát triển giao diện website bằng Next.js, tập trung vào trải nghiệm người dùng và hiệu năng.",
            en: "A website front-end built with Next.js, focused on user experience and performance.",
        },
        icon: Layout,
        accent: "#f97316",
        link: "https://chacacaysang.bachthanh.id.vn/",
        techStack: ["Next.js", "TailwindCSS"],
        image: "/pictures/cha_ca.png",
    },
    {
        year: { vi: "2024", en: "2024" },
        title: {
            vi: "Thiết kế giao diện CLB SPIT",
            en: "SPIT Club Website Design",
        },
        category: "UX/UI Design",
        group: "web",
        desc: {
            vi: "Dự án đầu tay về phát triển giao diện bằng HTML/CSS thuần, tập trung vào trải nghiệm người dùng.",
            en: "My very first front-end project, built with pure HTML/CSS and focused on user experience.",
        },
        icon: Layers,
        accent: "#a855f7",
        link: "https://bach-thi-thien-thanh.github.io/BanhTrang/index.html",
        techStack: ["HTML", "CSS", "JS"],
        image: "/pictures/front_end.png",
    },
];

const filters: { key: "all" | ProjectGroup; label: Localized }[] = [
    { key: "all", label: { vi: "Tất cả", en: "All" } },
    { key: "ai", label: { vi: "AI & Nghiên cứu", en: "AI & Research" } },
    { key: "web", label: { vi: "Web & Giao diện", en: "Web & UI" } },
];

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

// Vầng sáng chạy theo con trỏ chuột
const useSpotlight = () => {
    const mouseX = useMotionValue(-400);
    const mouseY = useMotionValue(-400);
    const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };
    return { mouseX, mouseY, onMouseMove };
};

const FeaturedProject = ({ project }: { project: Project }) => {
    const { mouseX, mouseY, onMouseMove } = useSpotlight();
    const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(244,63,94,0.18), transparent 70%)`;
    const Icon = project.icon;
    const { lang, t } = useLang();

    return (
        <motion.article
            variants={itemVariants}
            onMouseMove={onMouseMove}
            className="group relative overflow-hidden rounded-[2.5rem] bg-[#2D1E17] text-white shadow-[0_50px_100px_-30px_rgba(45,30,23,0.55)]"
        >
            <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: spotlight }} />
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-rose-500/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 p-8 md:p-14 flex flex-col">
                    <div className="flex flex-wrap items-center gap-3 mb-10">
                        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-rose-400 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-[#2D1E17]">
                            <Award size={14} /> {t("Dự án nổi bật", "Featured Project")}
                        </span>
                        <span className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                            {pick(project.year, lang)}
                        </span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300 ring-1 ring-white/15 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-rose-300">{project.category}</p>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold leading-[1.2] tracking-tight">
                        {pick(project.title, lang)}
                    </h3>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                        {pick(project.desc, lang)}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-12 lg:mt-auto lg:pt-12">
                        <Link
                            href={project.link}
                            target="_blank"
                            className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[#2D1E17] shadow-xl transition-transform active:scale-95"
                        >
                            <span className="absolute inset-0 w-0 bg-gradient-to-r from-rose-500 to-amber-400 transition-all duration-500 ease-out group-hover/btn:w-full" />
                            <span className="relative z-10 text-[11px] font-black uppercase tracking-widest transition-colors group-hover/btn:text-white">{t("Khám phá dự án", "Explore project")}</span>
                            <ArrowUpRight size={18} className="relative z-10 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-5 relative p-6 md:p-10 lg:pl-0 flex items-center">
                    <div className="relative w-full">
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-rose-500/40 via-amber-300/20 to-transparent blur-2xl opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                        <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/20 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1">
                            <img
                                src={encodeURI(project.image)}
                                alt={pick(project.title, lang)}
                                className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1E17]/70 via-transparent to-transparent" />
                            <span className="absolute bottom-5 left-5 text-[64px] font-black leading-none text-white/15 select-none">01</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const { mouseX, mouseY, onMouseMove } = useSpotlight();
    const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${project.accent}22, transparent 70%)`;
    const Icon = project.icon;
    const { lang, t } = useLang();

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.6, ease, delay: index * 0.06 }}
            onMouseMove={onMouseMove}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_40px_80px_-30px_rgba(45,30,23,0.3)]"
        >
            <motion.div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: spotlight }} />
            {/* Viền gradient khi hover */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: `inset 0 0 0 1.5px ${project.accent}55` }}
            />

            {/* Ảnh */}
            <div className="relative m-3 mb-0 aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <img
                    src={encodeURI(project.image)}
                    alt={pick(project.title, lang)}
                    className="h-full w-full object-cover grayscale-[0.35] transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10" />
                <div
                    className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-30"
                    style={{ background: `linear-gradient(135deg, ${project.accent}, transparent 65%)` }}
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-stone-800 backdrop-blur">
                        {project.category}
                    </span>
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur">
                    {pick(project.year, lang)}
                </span>
                <span className="absolute bottom-3 left-5 text-5xl font-black leading-none text-white/80 drop-shadow-lg select-none">
                    {String(index + 2).padStart(2, "0")}
                </span>
            </div>

            {/* Nội dung */}
            <div className="relative flex flex-1 flex-col p-7 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                    <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110"
                        style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                    >
                        <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-[#2D1E17]">
                    {pick(project.title, lang)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone-500">
                    {pick(project.desc, lang)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold text-stone-600">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-8">
                    <Link
                        href={project.link}
                        target="_blank"
                        className="group/btn flex items-center justify-between border-t border-stone-100 pt-5"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-800 transition-colors group-hover/btn:text-rose-500">
                            {t("Xem chi tiết", "View details")}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2D1E17] text-white transition-all duration-500 group-hover:bg-rose-500 group-hover/btn:rotate-45">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState<"all" | ProjectGroup>("all");
    const { lang, t } = useLang();

    const featured = projectList.find((p) => p.featured)!;
    const others = projectList
        .filter((p) => !p.featured)
        .filter((p) => filter === "all" || p.group === filter);

    const stats = [
        { key: "projects", value: projectList.length, label: t("Dự án", "Projects") },
        { key: "ai", value: projectList.filter((p) => p.group === "ai").length, label: t("AI & Nghiên cứu", "AI & Research") },
        { key: "fields", value: new Set(projectList.map((p) => p.category)).size, label: t("Lĩnh vực", "Fields") },
    ];

    return (
        <section id="projects" className="relative overflow-hidden bg-[#fbf8f4] py-32 px-6 min-h-screen">
            {/* Nền trang trí */}
            <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-[140px]" />
            <div className="pointer-events-none absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-amber-100/60 blur-[140px]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: "linear-gradient(rgba(45,30,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,30,23,0.05) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)",
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 flex items-center gap-3"
                        >
                            <span className="h-px w-12 bg-rose-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">Projects</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-[#2D1E17] leading-[0.95]"
                        >
                            {t("Các dự án", "Selected")} <br />
                            <span className="italic font-normal bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 bg-clip-text text-transparent">
                                {t("tiêu biểu.", "works.")}
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease, delay: 0.15 }}
                        className="lg:col-span-5"
                    >
                        <p className="border-l-2 border-rose-300 pl-5 italic leading-relaxed text-stone-500">
                            {t(
                                "“Hành trình 4 năm không ngừng thử nghiệm, từ những dòng code thuần đầu tiên đến các mô hình học sâu phức tạp.”",
                                "“Four years of relentless experimentation — from my very first lines of plain code to complex deep learning models.”"
                            )}
                        </p>
                        <div className="mt-8 grid grid-cols-3 divide-x divide-stone-200 rounded-2xl border border-stone-200/80 bg-white/70 backdrop-blur">
                            {stats.map((s) => (
                                <div key={s.key} className="px-4 py-4 text-center">
                                    <div className="text-3xl font-black text-[#2D1E17]">{s.value}</div>
                                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-stone-400">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Dự án nổi bật */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <FeaturedProject project={featured} />
                </motion.div>

                {/* Bộ lọc */}
                <div className="mt-24 mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2D1E17]">
                        {t("Dự án khác", "Other projects")} <span className="text-stone-300">/</span>{" "}
                        <span className="text-rose-500">{others.length}</span>
                    </h3>
                    <div className="inline-flex w-fit flex-wrap gap-1 rounded-full border border-stone-200 bg-white/80 p-1.5 shadow-sm backdrop-blur">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setFilter(f.key)}
                                className={`relative rounded-full px-5 py-2 text-xs font-bold tracking-wide transition-colors ${filter === f.key ? "text-white" : "text-stone-500 hover:text-stone-900"}`}
                            >
                                {filter === f.key && (
                                    <motion.span
                                        layoutId="project-filter"
                                        className="absolute inset-0 rounded-full bg-[#2D1E17]"
                                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                    />
                                )}
                                <span className="relative z-10">{pick(f.label, lang)}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lưới dự án */}
                <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {others.map((project, index) => (
                            <ProjectCard key={project.link} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
