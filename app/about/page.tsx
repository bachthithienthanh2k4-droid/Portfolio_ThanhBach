"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Award, BookOpen, Zap, ArrowUpRight, Sparkles, Star, Quote, FileText, Mail, ArrowRight } from 'lucide-react';
import { FacebookIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from '../components/icons';
import Link from 'next/link';
import StartPage from '../components/start';
import Decor from '../components/decor';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Hiệu ứng Spring giúp animation mượt và có độ nảy (physics-based)
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const yContent = useTransform(smoothProgress, [0, 0.2], [0, -80]);
    const yImage = useTransform(smoothProgress, [0, 0.3], [0, 120]);
    const rotateImage = useTransform(smoothProgress, [0, 0.3], [0, 5]);

    const achievements = [
        {
            title: "Sao Tháng Giêng 2024",
            desc: "Giải thưởng cao quý dành cho cán bộ Hội SV có thành tích xuất sắc trong học tập và rèn luyện.",
            date: "2024",
            icon: <Star className="text-rose-400" />,
            image: "/pictures/Sao tháng giêng-2024.jpg"
        },
        {
            title: "Sinh viên 5 Tốt 2 năm",
            desc: "Đạt danh hiệu liên tiếp 2023 - 2024, minh chứng cho sự toàn diện trong đạo đức, học tập, thể lực, tình nguyện và hội nhập.",
            date: "23-24",
            icon: <Zap className="text-rose-400" />,
            image: "/pictures/SV5T_2023_2.jpg"
        },
        {
            title: "Sinh viên Xuất sắc",
            desc: "Duy trì phong độ học thuật ấn tượng trong suốt 4 năm đại học với bảng điểm rực rỡ.",
            date: "4 Years",
            icon: <Award className="text-rose-400" />,
            image: "/pictures/z7706777109007_23a5f5f8d29e646288fc635d8458cc7c.jpg"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const socialLinks = [
        { Icon: FacebookIcon, href: "https://www.facebook.com/thanh.bach.395/" },
        { Icon: YoutubeIcon, href: "https://youtube.com/yourchannel" },
        { Icon: LinkedinIcon, href: "https://linkedin.com/in/yourprofile" },
        { Icon: GithubIcon, href: "https://github.com/bachthithienthanh2k4-droid" },
    ];
    return (
        <div ref={containerRef} className="bg-[#faf7f2] min-h-screen text-[#432818] selection:bg-rose-200 overflow-x-hidden">
            <motion.div
                className="fixed top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-rose-300 via-rose-500 to-amber-200 z-[100] origin-left shadow-lg shadow-rose-200/50"
                style={{ scaleX: smoothProgress }}
            />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-24 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">

                    {/* Cột trái: Văn bản với hiệu ứng xuất hiện theo trình tự */}
                    <motion.div
                        style={{ y: yContent }}
                        className="text-center lg:text-left order-2 lg:order-1 relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-rose-200 bg-white shadow-sm text-rose-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-10"
                        >
                            <Sparkles size={14} className="animate-pulse" /> Digital Portfolio 2026
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-7xl md:text-9xl italic font-light leading-none mb-6">
                                Bạch <br />
                                <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-br from-[#432818] via-[#8d7b6d] to-rose-400">Thanh</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="max-w-md mx-auto lg:mx-0 text-[#6b584c] text-xl font-light tracking-wide italic leading-relaxed border-l-2 border-rose-200 pl-6"
                        >
                            "Nơi những dòng code không chỉ là logic, mà còn là câu chuyện mang đậm dấu ấn của riêng mình."
                        </motion.p>

                        <div className="flex gap-6 justify-center lg:justify-start mt-12">
                            {socialLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + (i * 0.1), type: 'spring' }}
                                    whileHover={{ y: -10, scale: 1.15, rotate: 5 }}
                                    href={item.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-14 h-14 flex items-center justify-center rounded-full border border-[#d6ccc2] bg-white transition-colors shadow-md group hover:border-rose-400 hover:bg-rose-50"
                                >
                                    <div className="text-[#8d7b6d] group-hover:text-rose-500 transition-colors">
                                        <item.Icon size={22} />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ y: yImage, rotate: rotateImage }}
                        className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group p-4">
                            {/* Khung trang trí phía dưới */}
                            <div className="absolute top-0 right-0 w-full h-full border-2 border-rose-300 rounded-[3.5rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

                            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-20 transition-transform duration-700 group-hover:scale-[1.02]">
                                <img
                                    src="/pictures/Ảnh đại diện.jpg"
                                    alt="Bạch Thanh"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-200/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -bottom-4 -left-8 bg-white p-6 rounded-2xl shadow-xl z-30 hidden md:block"
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-rose-500">Student Excellence</p>
                                <p className="text-lg font-black text-[#432818]">Class of 2026</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[0%] w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[150px]" />
                </div>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ repeat: Infinity, duration: 8 }}
                        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-rose-200/50 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[150px]"
                    />
                </div>
            </section>

            <section className="py-32 px-6 relative flex justify-center items-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex flex-wrap justify-around">
                    {[...Array(20)].map((_, i) => <Star key={i} size={40} />)}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl text-center relative z-10 px-8 py-16 border-y-2 border-rose-100"
                >
                    <h2 className="text-4xl md:text-7xl leading-tight text-[#432818]">
                        Trưởng thành là hành trình được vun đắp bằng
                        <span className="block italic text-rose-500 mt-4 relative">
                            đôi tay và sự nỗ lực không ngừng
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="absolute bottom-0 left-0 h-2 bg-rose-100/60 -z-10"
                            />
                        </span>
                        của chính mình.
                    </h2>
                </motion.div>
            </section>


            <section className="py-24 px-6 bg-[#FCFBF9] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-50/50 blur-[120px] rounded-full -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5 relative group"
                        >
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src="/pictures/Ảnh profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-6 rounded-3xl shadow-xl border border-rose-50 z-20 max-w-[200px]"
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center">
                                                <Star size={12} className="text-rose-500" fill="currentColor" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[11px] font-bold uppercase tracking-tighter text-stone-400">Awarded</p>
                                    <p className="text-sm font-bold text-stone-800 italic">"Sinh viên 5 Tốt"</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-7 pt-8 lg:pt-0"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-12 bg-rose-300" />
                                <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-[11px]">
                                    Personal Biography
                                </span>
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-[#2D1E17] mb-10 leading-[0.9] tracking-tighter">
                                Kỹ thuật, tâm hồn <br />
                                <span className="text-rose-500 font-light italic"> & sự cống hiến.</span>
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
                                <motion.div variants={itemVariants} className="space-y-4">
                                    <p className="text-lg text-[#5D4D44] leading-relaxed">
                                        Mình là <strong>Bạch Thị Thiện Thanh</strong>, sinh viên năm cuối chuyên ngành Khoa học Máy tính tại
                                        <span className="text-rose-600 font-medium"> Khoa Công nghệ thông tin, Đại học Khoa học, Đại học Huế</span>.
                                    </p>
                                    <p className="text-base text-stone-500 font-light">
                                        Với mình, code không chỉ là những dòng lệnh khô khan, mà là công cụ để giải quyết những "vấn đề" của xã hội thông qua lăng kính công nghệ.
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-4 bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
                                    <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-2">
                                        <Zap size={20} fill="currentColor" />
                                    </div>
                                    <p className="text-sm text-[#5D4D44] leading-relaxed">
                                        Dự án tâm huyết nhất là nghiên cứu <strong>Deep Learning</strong> chẩn đoán viêm phổi từ ảnh X-quang. Một hành trình từ thuật toán đến giá trị cộng đồng.
                                    </p>

                                </motion.div>
                            </div>
                            <Link href="/introduction" className="inline-block mt-8">
                                <motion.button
                                    whileHover="hover"
                                    initial="rest"
                                    animate="rest"
                                    className="relative group/btn flex items-center gap-4 py-2 pr-2 pl-6 overflow-hidden rounded-full bg-[#2D1E17] transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(225,29,72,0.3)]"
                                >
                                    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em] text-white/90 group-hover/btn:text-white transition-colors duration-300">
                                        Xem chi tiết
                                    </span>

                                    <motion.div
                                        variants={{
                                            rest: { scale: 1, rotate: 0 },
                                            hover: { scale: 1.05, rotate: 45 }
                                        }}
                                        className="relative z-10 w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-rose-500"
                                    >
                                        <ArrowUpRight size={18} strokeWidth={3} />
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            rest: { x: "-100%" },
                                            hover: { x: "0%" }
                                        }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-400 -z-0"
                                    />
                                </motion.button>
                            </Link>
                            <motion.div
                                variants={itemVariants}
                                className="mt-12 p-1 border-t border-stone-100 flex flex-wrap items-center gap-x-12 gap-y-6 pt-10"
                            >
                                <div>
                                    <p className="text-3xl font-black text-stone-800">3.81</p>
                                    <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">GPA Tích lũy</p>
                                </div>
                                <div className="h-10 w-[1px] bg-stone-200 hidden md:block" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-stone-600 mb-2 flex items-center gap-2">
                                        <Sparkles size={16} className="text-amber-400" /> Hoạt động nổi bật
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Đoàn - Hội', 'Câu lạc bộ', 'Nghiên cứu khoa học', 'Văn nghệ'].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-[11px] font-bold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* 4. ACHIEVEMENTS SECTION - CAROUSEL-STYLE GRID */}
            <section className="py-1 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 mt-10">

                    <div className="text-center md:text-left">
                        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-rose-300" />
                            <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-[11px]">
                                HIGHLIGHT
                            </span>
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mt-4">
                            Hành trình <br /> <span className="font-serif italic font-light text-rose-400">& Thành tựu</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-[#8d7b6d] text-lg font-light italic border-l-2 border-rose-300 pl-6 mb-2">
                        Lưu giữ những khoảnh khắc nỗ lực và những cột mốc đáng tự hào.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-10 shadow-2xl group-hover:shadow-rose-200 transition-all duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                                {/* Year Badge */}
                                <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-black/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white">
                                    <span className="text-xs font-bold uppercase tracking-tighter">Year</span>
                                    <span className="text-xl font-bold">{item.date}</span>
                                </div>
                            </div>

                            <div className="space-y-5 px-4 mb-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-rose-50 rounded-2xl text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-rose-200 to-transparent" />
                                </div>

                                <h4 className="text-3xl font-bold text-[#432818] group-hover:text-rose-600 transition-colors leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-[#8d7b6d] leading-relaxed text-base font-light italic">
                                    {item.desc}
                                </p>

                                {/* <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-3 text-xs font-bold text-rose-500 tracking-widest uppercase pt-2"
                                >
                                    Tìm hiểu thêm <ArrowUpRight size={18} />
                                </motion.button> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center items-center pb-10">
                    <Link href="/journey" passHref>
                        <motion.button
                            whileHover={{ scale: 1.02, translateY: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-5 bg-rose-50/50 backdrop-blur-sm border border-rose-200 rounded-full overflow-hidden transition-all duration-300 shadow-sm hover:shadow-rose-200/50 hover:shadow-xl"
                        >
                            {/* Hiệu ứng tia sáng lướt qua khi hover */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                            <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                {/* Chữ màu hồng đậm (Rose-600) trên nền hồng nhạt (Rose-50) sẽ rất nổi bật */}
                                <span className="text-lg font-bold text-rose-600 transition-colors duration-300">
                                    Hãy cùng khám phá hành trình của Thanh nhé!
                                </span>

                                <div className="flex items-center">
                                    <Sparkles
                                        size={18}
                                        className="text-rose-400 group-hover:text-rose-500 group-hover:rotate-12 transition-all duration-300"
                                    />
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileHover={{ width: "auto", opacity: 1 }}
                                        className="overflow-hidden"
                                    >
                                        <ArrowRight size={20} className="ml-2 text-rose-500" />
                                    </motion.div>
                                </div>
                            </span>

                            {/* Lớp nền phủ nhẹ khi hover để nút trông "đầy" hơn một chút */}
                            <div className="absolute inset-0 bg-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* 5. NÂNG CẤP FOOTER CTA */}
            <section className="px-6 py-24 relative overflow-hidden bg-[#FCFBF9]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/40 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl mx-auto bg-white border border-stone-100 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.03)]"
                >
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-10 left-10 w-2 h-2 bg-rose-200 rounded-full" />
                        <div className="absolute bottom-20 right-20 w-3 h-3 bg-amber-200 rounded-full" />
                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-rose-300 rounded-full" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-8 flex items-center gap-2 px-4 py-1.5 bg-rose-50 rounded-full text-rose-500 font-bold text-[10px] uppercase tracking-[0.3em]">
                            <Sparkles size={14} fill="currentColor" /> Sẵn sàng cho những ý tưởng mới
                        </div>

                        <h2 className="text-4xl md:text-7xl font-light text-[#2D1E17] mb-12 leading-[1.1] tracking-tight">
                            Cùng tạo nên những <br />
                            <span className="italic text-rose-500 pr-2">điều tuyệt vời</span>
                            <span className="font-black"> nhé?</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
                            <motion.a
                                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                href="mailto:contact@yourname.com"
                                className="group px-10 py-5 bg-[#2D1E17] text-white rounded-full font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-3 shadow-xl shadow-stone-200"
                            >
                                <Mail size={18} strokeWidth={2.5} />
                                Gửi tin nhắn
                                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                whileHover={{ backgroundColor: "#FFF5F5", borderColor: "#FDA4AF" }}
                                whileTap={{ scale: 0.98 }}
                                target="_blank"
                                href="https://drive.google.com/file/d/1mnZTDMhEp757wSQL0N-xrcYFmgmIzGk0/view"
                                className="px-10 py-5 border border-stone-200 text-stone-600 rounded-full font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-3 bg-white"
                            >

                                <FileText size={18} /> Tải CV chi tiết


                            </motion.a>
                        </div>

                        {/* Câu quote nhỏ tinh tế phía dưới */}
                        <p className="mt-12 text-stone-400 text-sm font-medium italic">
                            "Luôn phản hồi trong vòng 24 giờ làm việc"
                        </p>
                    </div>

                    {/* Decor nhẹ nhàng phía sau text */}
                    <div className="absolute -bottom-10 -left-5 text-rose-50/50 pointer-events-none select-none italic text-[12rem]">
                        Thanh Bạch
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default About;