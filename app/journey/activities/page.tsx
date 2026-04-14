"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Lightbulb, Users, Trophy, GraduationCap, Building2, Sparkles } from 'lucide-react';

const activityData = [
    {
        title: "Câu lạc bộ Hỗ trợ lập trình - SPIT",
        subtitle: "Nơi khơi nguồn đam mê kỹ thuật",
        lesson: "Kỹ năng sư phạm, làm việc nhóm và tư duy giải thuật hệ thống.",
        icon: <Users className="text-pink-500" />,
        color: "from-pink-500 to-rose-500",
        images: ["/pictures/clb_@.jpg", "/pictures/clb.jpg", "/pictures/clb_2.jpg", "/pictures/hotro.jpg"]
    },
    {
        title: "Cống hiến & Hỗ trợ Khoa",
        subtitle: "Gắn kết cộng đồng sinh viên",
        lesson: "Khả năng điều phối sự kiện quy mô lớn và quản lý nhân sự dưới áp lực.",
        icon: <Trophy className="text-orange-500" />,
        color: "from-orange-400 to-red-500",
        images: [
            "/pictures/Hỗ_trợ_ICPC.jpg",
            "/pictures/thanhlap30.jpg",
            "/pictures/DHKH1103-07471.jpg",
            "/pictures/z7706776986346_80839b68a1c9a0923802171d661751ca.jpg",
            "/pictures/mc.png"
        ]
    },
    {
        title: "Hội thảo Khoa học & Seminar",
        subtitle: "Cập nhật tri thức công nghệ mới",
        lesson: "Tư duy phản biện, cách đặt vấn đề và nắm bắt xu hướng công nghệ tương lai.",
        icon: <GraduationCap className="text-blue-500" />,
        color: "from-blue-500 to-cyan-500",
        images: ["/pictures/hoithaoKH.jpg", "/pictures/seminar.jpg", "/pictures/seminar_2.jpg", "/pictures/seminar_3.jpg"]
    },
    {
        title: "Văn nghệ & Nghệ thuật",
        subtitle: "Tự tin tỏa sáng trên sân khấu",
        lesson: "Sự tự tin trước đám đông và khả năng biểu đạt cảm xúc qua ngôn ngữ hình thể.",
        icon: <Sparkles className="text-purple-500" />,
        color: "from-purple-500 to-indigo-500",
        images: [
            "/pictures/VanNghe.jpg",
            "/pictures/z7706777017285_3edda6686d13e489d1bd22cc44f3ad82.jpg",
            "/pictures/z7706777119229_e39c17c51e1158bf0c63db7251d751b8.jpg",
            "/pictures/z7706777127210_2b4de4ae5c6cf9333d50750e6a50d47d.jpg",
            "/pictures/Miss.jpg"
        ]
    },
    {
        title: "Office Tour & Doanh nghiệp",
        subtitle: "Tiếp cận môi trường làm việc thực tế",
        lesson: "Hiểu về văn hóa doanh nghiệp, quy trình Agile và các tiêu chuẩn ngành IT.",
        icon: <Building2 className="text-emerald-500" />,
        color: "from-emerald-500 to-teal-600",
        images: ["/pictures/rikkei.jpg", "/pictures/pokkadot.jpg", "/pictures/fpt.jpg"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
export default function Activities() {
    return (
        <div className="relative min-h-screen bg-[#fffafa] overflow-hidden py-24 px-4 sm:px-8 mt-10">

            {/* 🔮 Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[10%] left-[5%] w-96 h-96 bg-pink-100/50 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto">

                {/* 🚀 Hero Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mb-32"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-bold uppercase tracking-widest mb-10"
                    >
                        <Sparkles size={16} /> My Journey & Activities
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-[1.4] overflow-visible">
                        <span className="inline-block py-2">HOẠT ĐỘNG</span>{" "}
                        <span className="relative inline-block">
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500 py-8 px-2"
                                style={{
                                    WebkitBoxDecorationBreak: 'clone',
                                    boxDecorationBreak: 'clone'
                                }}
                            >
                                NỔI BẬT
                            </span>
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed italic">
                        "Không chỉ là những tấm hình kỷ niệm, mỗi hành trình đều mang lại những bài học quý giá giúp tôi hoàn thiện bản thân mỗi ngày.""
                    </p>

                </motion.div>

                {/* 🧩 Activities Sections */}
                <div className="space-y-40">
                    {activityData.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                            className="relative"
                        >
                            {/* Section Info */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="p-3 rounded-2xl bg-white shadow-xl shadow-gray-100 border border-gray-50">
                                            {section.icon}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-400 font-medium ml-14">{section.subtitle}</p>
                                </div>

                                {/* Glass Lesson Box */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="md:max-w-md p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-2xl shadow-gray-200/50 flex gap-4 items-start"
                                >
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${section.color} text-white shrink-0`}>
                                        <Lightbulb size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Key Lesson</h4>
                                        <p className="text-sm text-gray-700 font-semibold leading-snug italic">"{section.lesson}"</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* 📸 Masonry-like Image Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {section.images.map((img, imgIdx) => (
                                    <motion.div
                                        key={imgIdx}
                                        variants={cardVariants}
                                        whileHover={{ y: -10 }}
                                        className={`relative rounded-[2rem] overflow-hidden group shadow-xl shadow-gray-200/40 
                      ${imgIdx === 0 ? "col-span-2 row-span-2 h-[400px] md:h-[500px]" : "h-[190px] md:h-[240px]"}`}
                                    >
                                        <img
                                            src={img}
                                            alt={section.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000'; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                                            <p className="text-white text-sm font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform">
                                                {section.title} - #{imgIdx + 1}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* 🏆 Closing Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 text-center border-t border-gray-100 pt-20"
                >
                    <div className="inline-block p-4 rounded-full bg-gray-50 mb-8">
                        <Sparkles className="text-pink-400 animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-800 italic">
                        "Sống hết mình với đam mê, thành công sẽ theo đuổi bạn."
                    </h3>
                </motion.div>
            </div>
        </div>
    );
}