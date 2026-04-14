"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope,
    Brain,
    Car,
    MessageSquare,
    ExternalLink,
    Layers,
    Sparkles,
    Activity
} from 'lucide-react';
import { GithubIcon } from '../components/icons';
import Link from 'next/link';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const projectList = [
        {
            year: "2025 - Hiện tại",
            title: "Khóa luận Tốt nghiệp: Phân tích X-quang Phổi nâng cao",
            category: "Deep Learning / Healthcare",
            desc: "Dự án tâm huyết nhất, tập trung vào việc tối ưu hóa độ chính xác trong việc phát hiện các tổn thương phổi phức tạp bằng các kiến trúc mạng nơ-ron tiên tiến nhất.",
            icon: <Sparkles className="text-amber-600" />,
            color: "bg-amber-50", 
            borderColor: "border-amber-200",
            size: "md:col-span-12", // Nổi bật nhất, chiếm trọn 1 hàng
            link: ""
        },
        {
            year: "2025",
            title: "Nghiên cứu khoa học: Kết hợp Phân đoạn & Phân lớp",
            category: "Research / AI",
            desc: "Đề tài: Nghiên cứu phương pháp kết hợp phân đoạn và phân lớp dựa trên học sâu cho chẩn đoán bệnh Viêm phổi từ ảnh X-quang lồng ngực.",
            icon: <Stethoscope className="text-rose-600" />,
            color: "bg-rose-50",
            borderColor: "border-rose-200",
            size: "md:col-span-6", // Chia đôi hàng với dự án tiếp theo
            link: "https://drive.google.com/file/d/1O1vPY-XOXIIM21QA4dJ-xUrYzcbW_o7H/view"
        },
        {
            year: "2025",
            title: "Nhận dạng vùng phổi & Chẩn đoán đa giai đoạn",
            category: "Computer Vision / Hybrid Model",
            desc: "Hệ thống kết hợp YOLOv8 (tách vùng), VGG16 (trích xuất đặc trưng) và Random Forest (phân loại) để tối ưu hóa độ chính xác trong chẩn đoán viêm phổi.",
            icon: <Activity className="text-indigo-600" />, // Đổi icon sang Activity để thể hiện tính đa giai đoạn
            color: "bg-indigo-50", // Màu Indigo tạo cảm giác kỹ thuật, hiện đại
            borderColor: "border-indigo-200",
            size: "md:col-span-6", // Ghép cặp với dự án Nghiên cứu khoa học
            link: "https://drive.google.com/file/d/1rtOeo2ktcGgeMjkaiQt_DBfYSB-jkCsk/view"
        },
        {
            year: "2025",
            title: "Phân tích cảm xúc với PhoBERT",
            category: "NLP / Vietnamese",
            desc: "Sử dụng mô hình ngôn ngữ PhoBERT để phân loại phản hồi của sinh viên, hỗ trợ cải thiện chất lượng đào tạo.",
            icon: <MessageSquare className="text-blue-600" />,
            color: "bg-blue-50",
            borderColor: "border-blue-200",
            size: "md:col-span-4", // Layout 3 cột ở hàng dưới
            link: "https://drive.google.com/file/d/1PsZwZOL1JtzuVaNwAHwdSPXLKoD3V9qi/view"
        },
        {
            year: "2025",
            title: "Nhận dạng Biển báo giao thông (CNN)",
            category: "Computer Vision",
            desc: "Xây dựng mạng nơ-ron tích chập (CNN) để nhận diện biển báo từ tập dữ liệu thực tế.",
            icon: <Car className="text-emerald-600" />,
            color: "bg-emerald-50",
            borderColor: "border-emerald-200",
            size: "md:col-span-4",
            link: "https://drive.google.com/file/d/1Y-Avf6gFmovR_S9rg7Pt0xtozGb0FEI9/view"
        },
        {
            year: "2024",
            title: "Thiết kế giao diện CLB SPIT",
            category: "UX/UI Design",
            desc: "Dự án đầu tay về phát triển giao diện bằng HTML/CSS thuần, tập trung vào trải nghiệm người dùng.",
            icon: <Layers className="text-purple-600" />,
            color: "bg-purple-50",
            borderColor: "border-purple-200",
            size: "md:col-span-4",
            link: "https://bach-thi-thien-thanh.github.io/BanhTrang/index.html"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-[#fcfcfc] min-h-screen">

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

                {/* Bento Grid Projects */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.01 }}
                            className={`${project.size} ${project.color} ${project.borderColor} border-2 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] relative overflow-hidden`}
                        >
                            {/* Highlight Overlay */}
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div>
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="p-4 bg-white rounded-2xl shadow-md group-hover:shadow-lg group-hover:-rotate-6 transition-all duration-500">
                                        {project.icon}
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-stone-600 bg-white px-4 py-1.5 rounded-full shadow-sm border border-stone-100">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <p className="text-xs font-black text-rose-600 uppercase tracking-[0.2em]">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-black text-[#1a120e] leading-tight transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-stone-700 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-black/5 flex items-center justify-between relative z-10">
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-500 hover:text-black transition-colors">
                                        <GithubIcon size={20} /> Code
                                    </button>
                                </div>
                                <Link href={project.link}
                                target="_blank"
                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter bg-[#1a120e] text-white px-5 py-2.5 rounded-full hover:bg-rose-600 transition-all shadow-md">
                                    Xem chi tiết <ExternalLink size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;