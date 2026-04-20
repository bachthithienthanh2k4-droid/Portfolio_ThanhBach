"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Stethoscope,
    Car,
    MessageSquare,
    ExternalLink,
    Layers,
    Sparkles,
    Activity,
    ArrowUpRight,
    ArrowRight,
    Layout
} from 'lucide-react';
import { GithubIcon } from '../components/icons';
import Link from 'next/link';

const Projects = () => {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const projectList = [
        {
            year: "2025 - Hiện tại",
            title: "Khóa luận Tốt nghiệp: Phân tích X-quang Phổi nâng cao",
            category: "Deep Learning / Healthcare",
            desc: "Dự án tâm huyết nhất, tập trung vào việc tối ưu hóa độ chính xác trong việc phát hiện các tổn thương phổi phức tạp bằng các kiến trúc mạng nơ-ron tiên tiến nhất.",
            icon: Sparkles,
            color: "bg-amber-50/50",
            borderColor: "border-amber-200",
            size: "md:col-span-12",
            link: "",
            techStack: ["Python", "PyTorch", "EfficientNet"],
            image: "/pictures/xray.png"
        },
        {
            year: "2025",
            title: "Nghiên cứu khoa học: Kết hợp Phân đoạn & Phân lớp",
            category: "Research / AI",
            desc: "Đề tài nghiên cứu phương pháp kết hợp phân đoạn và phân lớp dựa trên học sâu cho chẩn đoán bệnh Viêm phổi từ ảnh X-quang lồng ngực.",
            icon: Stethoscope,
            color: "bg-rose-50/50",
            borderColor: "border-rose-200",
            size: "md:col-span-6",
            link: "https://drive.google.com/file/d/1O1vPY-XOXIIM21QA4dJ-xUrYzcbW_o7H/view",
            techStack: ["Python", "PyTorch", "Kaggle"],
            image: "/pictures/NCKH_1.jpg"
        },
        {
            year: "2025",
            title: "Nhận dạng vùng phổi & Chẩn đoán đa giai đoạn",
            category: "Computer Vision",
            desc: "Hệ thống kết hợp YOLOv8, VGG16 và Random Forest để tối ưu hóa độ chính xác trong chẩn đoán lâm sàng.",
            icon: Activity,
            color: "bg-blue-50/50",
            borderColor: "border-blue-200",
            size: "md:col-span-6",
            link: "https://drive.google.com/file/d/1rtOeo2ktcGgeMjkaiQt_DBfYSB-jkCsk/view",
            techStack: ["YOLOv8", "VGG16", "Random Forest"],
            image: "/pictures/Lý thuyết nhận dạng.png"
        },
        {
            year: "2025",
            title: "Phân tích cảm xúc với PhoBERT",
            category: "NLP / Vietnamese",
            desc: "Sử dụng mô hình PhoBERT để phân loại phản hồi sinh viên, hỗ trợ cải thiện chất lượng đào tạo.",
            icon: MessageSquare,
            color: "bg-indigo-50/50",
            borderColor: "border-indigo-200",
            size: "md:col-span-6",
            link: "https://drive.google.com/file/d/1PsZwZOL1JtzuVaNwAHwdSPXLKoD3V9qi/view",
            techStack: ["NLP", "PhoBERT", "Transformers"],
            image: "/pictures/Xử lý ngôn ngữ tự nhiên.png"
        },
        {
            year: "2025",
            title: "Nhận dạng Biển báo giao thông (CNN)",
            category: "Computer Vision",
            desc: "Xây dựng mạng nơ-ron tích chập (CNN) để nhận diện biển báo từ tập dữ liệu thực tế.",
            icon: Car,
            color: "bg-emerald-50/50",
            borderColor: "border-emerald-200",
            size: "md:col-span-6",
            link: "https://drive.google.com/file/d/1Y-Avf6gFmovR_S9rg7Pt0xtozGb0FEI9/view",
            techStack: ["CNN", "OpenCV", "Tensorflow"],
            image: "/pictures/Lý thuyết nhận dạng_2.png"
        },
        {
            year: "2026",
            title: "Thiết kế giao diện Chả cá cây Sang",
            category: "UX/UI Design",
            desc: "Dự án phát triển giao diện website bằng Next.js, tập trung vào trải nghiệm người dùng và hiệu năng.",
            icon: Layout, 
            color: "bg-orange-50/50",
            borderColor: "border-orange-200",
            size: "md:col-span-6",
            link: "https://chacacaysang.bachthanh.id.vn/", 
            techStack: ["Next.js", "TailwindCSS"],
            image: "/pictures/cha_ca.png"
        },
        {
            year: "2024",
            title: "Thiết kế giao diện CLB SPIT",
            category: "UX/UI Design",
            desc: "Dự án đầu tay về phát triển giao diện bằng HTML/CSS thuần, tập trung vào trải nghiệm người dùng.",
            icon: Layers,
            color: "bg-purple-50/50",
            borderColor: "border-purple-200",
            size: "md:col-span-6",
            link: "https://bach-thi-thien-thanh.github.io/BanhTrang/index.html",
            techStack: ["HTML", "CSS", "JS"],
            image: "/pictures/front_end.png"
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-[#fcfcfc] min-h-screenoverflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="w-12 h-[1px] bg-rose-500"></span>
                            <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-xs">Projects</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-black text-[#2D1E17] tracking-tighter"
                        >
                            CÁC DỰ ÁN <br />
                            <span className="italic font-light text-rose-500 text-4xl md:text-5xl">Tiêu biểu.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-stone-500 italic max-w-sm text-right"
                    >
                        "Hành trình 4 năm không ngừng thử nghiệm, từ những dòng code thuần đầu tiên đến các mô hình học sâu phức tạp."
                    </motion.p>
                </div>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12"
                >
                    {projectList.map((project, index) => {
                        const isLarge = project.size === "md:col-span-12";

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`${project.size} group relative`}
                            >
                                {/* KHUNG NGOÀI CÙNG (Card Container) */}
                                <div className={`h-full bg-white border ${project.borderColor} border rounded-[3rem] overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]`}>

                                    <div className={`flex flex-col ${isLarge ? 'md:flex-row' : 'flex-col'} h-full rounded-[2.5rem] overflow-hidden`}>

                                        {/* PHẦN ẢNH - KIỂU 2 (FLOATING & LAYERS) */}
                                        <div className={`${isLarge ? 'md:w-[48%]' : 'w-full'} p-4 relative order-2 ${isLarge ? 'md:order-2' : ''}`}>
                                            {/* --- LAYERS TRANG TRÍ PHÍA SAU --- */}

                                            {/* 1. Lớp nền quầng sáng (Glow Blob) */}
                                            <div
                                                className="absolute -inset-6 rounded-[3rem] opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-1000 scale-90 group-hover:scale-110"
                                                style={{ backgroundColor: `rgba(${project.color}, 0.12)` }} // Sử dụng rgbColor từ projectList
                                            />

                                            {/* 2. Khối hình học trang trí nổi (Decorative Shape) */}
                                            <motion.div
                                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500 rounded-full -z-0 opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-700"
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                    rotate: [12, 20, 12],
                                                }}
                                                transition={{
                                                    duration: 10,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />


                                            {/* --- KHUNG ẢNH CHÍNH (FLOATING CARD) --- */}
                                            <div className="relative z-10 aspect-video md:aspect-auto h-full min-h-[280px] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1">

                                                {/* Viền sáng bao quanh ảnh khi hover */}
                                                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-rose-300 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 ease-out"
                                                    />

                                                    {/* Lớp phủ màu gradient hòa quyện */}
                                                    <div
                                                        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                                                        style={{
                                                            background: `linear-gradient(to bottom right, rgba(${project.color}, 0.6), transparent 60%)`
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* --- TAG NỔI TRÊN ẢNH (Dùng asolute với container p-4) --- */}
                                            <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm p-4 rounded-[1.5rem] shadow-2xl translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 z-20 border border-stone-100">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Xem ảnh</span>
                                                    <ExternalLink size={20} className="text-rose-600" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* NỘI DUNG TEXT - Nền đồng bộ màu Border */}
                                        <div className={`flex-1 p-10 md:p-14 flex flex-col justify-between ${project.color} order-1 ${isLarge ? 'md:order-1' : ''}`}>
                                            <div>
                                                <div className="flex justify-between items-start mb-12">
                                                    <div className="w-14 h-14 flex items-center justify-center bg-white shadow-sm border border-stone-100 rounded-2xl text-stone-800 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                                                        {project.icon && <project.icon size={28} strokeWidth={1.5} />}
                                                    </div>
                                                    <span className="text-[10px] font-bold text-stone-400 bg-white px-3 py-1 rounded-full border border-stone-100 uppercase tracking-widest">{project.year}</span>
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="text-xs font-black text-rose-500 uppercase tracking-widest">{project.category}</p>
                                                    <h3 className={`${isLarge ? 'text-4xl md:text-5xl' : 'text-3xl'} font-black text-stone-950 leading-[1.1] tracking-tight`}>
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-stone-600 text-base leading-relaxed max-w-lg">
                                                        {project.desc}
                                                    </p>
                                                </div>

                                                {/* Tech Stack Pills */}
                                                <div className="flex flex-wrap gap-2 pt-6">
                                                    {project.techStack?.map((tech, i) => (
                                                        <span key={i} className="text-[10px] font-bold px-4 py-1.5 bg-white text-stone-600 rounded-full border border-stone-100 group-hover:border-rose-200 transition-colors">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="mt-12 flex items-center justify-between">
                                                <Link href="#" className="text-stone-400 hover:text-rose-500 transition-colors">
                                                    <GithubIcon size={24} />
                                                </Link>

                                                <Link href={project.link} target="_blank" className="relative inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full overflow-hidden group/btn transition-all duration-300 shadow-lg active:scale-95">
                                                    <div className="absolute inset-0 w-0 bg-rose-600 transition-all duration-300 ease-out group-hover/btn:w-full" />
                                                    <span className="relative z-10 text-[11px] font-black uppercase tracking-widest">Xem chi tiết</span>
                                                    <div className="relative z-10 bg-white/20 p-1 rounded-full">
                                                        <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;