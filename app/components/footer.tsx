"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 1. Import hook nhận diện trang
import { FacebookIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from './icons';
import Decor from './decor';

const Footer = () => {
    const pathname = usePathname(); // 2. Khởi tạo lấy path hiện tại
    const stars = useMemo(() => Array.from({ length: 100 }), []);

    // 3. Định nghĩa mảng link với href chính xác (đổi tên để map cho chuẩn)
    const navLinks = [
        { name: 'Giới thiệu', href: '/introduction' },
        { name: 'Dự án', href: '/projects' },
        { name: 'Kỹ năng', href: '/skills' },
        { name: 'Hành trình', href: '/journey' },
        { name: 'Liên hệ', href: '/contact' },
    ];

    return (
        <footer className="relative bg-[#FCFBF9] pt-10 pb-12 overflow-hidden border-t border-stone-100">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-rose-100/40 blur-[120px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-50/30 blur-[100px] rounded-full" />
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {stars.map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            top: -20,
                            left: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: Math.random() * 0.5 + 0.3
                        }}
                        animate={{
                            top: "100%",
                            opacity: [0, 0.8, 0.8, 0],
                            x: [0, Math.random() * 50 - 25],
                        }}
                        transition={{
                            duration: Math.random() * 7 + 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 15,
                        }}
                        className="absolute shadow-[0_0_10px_rgba(225,29,72,0.2)]"
                    >
                        <div className="w-[3px] h-[3px] bg-rose-400 rotate-45 rounded-sm" />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-10 border-b border-stone-200/60">

                    {/* CỘT TRÁI */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="relative inline-block group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-rose-200 to-amber-100 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative w-28 h-28 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/pictures/Logo.jpg"
                                    alt="Bạch Thị Thiện Thanh"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                                />
                            </div>
                            <motion.div
                                animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white shadow-lg p-2.5 rounded-2xl text-rose-500 border border-rose-50"
                            >
                                <Sparkles size={20} fill="currentColor" />
                            </motion.div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl font-black text-[#2D1E17] tracking-tight leading-none">
                                Bạch Thị <br />
                                <span className="text-rose-500 italic font-serif font-light">Thiện Thanh</span>
                            </h3>
                            <p className="text-[#5D4D44] text-lg leading-relaxed max-w-md font-light">
                                “Dòng code kể nên câu chuyện của phái đẹp, kỹ thuật dẫn lối cho những giá trị nhân văn.”
                            </p>
                        </div>
                    </div>

                    {/* CỘT GIỮA: Logic Active đã được sửa ở đây */}
                    <div className="lg:col-span-3 lg:pt-4">
                        <p className="text-[#2D1E17] font-black mb-10 uppercase text-[11px] tracking-[0.4em]">Khám phá</p>
                        <ul className="grid grid-cols-1 gap-5">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href; // Kiểm tra trang hiện tại
                                return (
                                    <li key={item.name}>
                                        <Link 
                                            href={item.href} 
                                            className={`group flex items-center gap-3 transition-all duration-300 ${
                                                isActive ? 'text-rose-600' : 'text-stone-500 hover:text-rose-500'
                                            }`}
                                        >
                                            {/* Thanh gạch ngang sẽ dài ra và có màu rose nếu active */}
                                            <span className={`h-[1px] bg-rose-500 transition-all duration-300 ${
                                                isActive ? 'w-6' : 'w-0 group-hover:w-4'
                                            }`} />
                                            
                                            <span className={`text-sm uppercase tracking-widest ${
                                                isActive ? 'font-black' : 'font-bold'
                                            }`}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* CỘT PHẢI */}
                    <div className="lg:col-span-4 lg:pt-4 space-y-10">
                        <div>
                            <p className="text-[#2D1E17] font-black mb-10 uppercase text-[11px] tracking-[0.4em]">Gửi lời chào</p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: <GithubIcon />, link: "#", color: "hover:bg-stone-900" },
                                    { icon: <LinkedinIcon />, link: "#", color: "hover:bg-[#0077b5]" },
                                    { icon: <FacebookIcon />, link: "#", color: "hover:bg-[#1877f2]" },
                                    { icon: <YoutubeIcon />, link: "#", color: "hover:bg-[#ff0000]" },
                                    { icon: <Mail size={20} />, link: "mailto:your-email@example.com", color: "hover:bg-rose-500" },
                                ].map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.link}
                                        whileHover={{ y: -8 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-14 h-14 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center text-stone-600 hover:text-white transition-all duration-300 ${social.color}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-[2rem] bg-rose-50/50 border border-rose-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-sm">
                                <Heart size={18} fill="currentColor" />
                            </div>
                            <p className="text-xs font-bold text-rose-700/70 tracking-tight leading-snug">
                                Đang sẵn sàng cho các dự án <br /> sáng tạo mới vào năm 2026.
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#2D1E17] text-[10px] font-black uppercase tracking-[0.3em]">
                            Digital Portfolio © 2026
                        </p>
                        <p className="text-stone-400 text-[10px] font-medium tracking-wider">
                            BẠCH THỊ THIỆN THANH • BUILT WITH LOVE
                        </p>
                    </div>
                    <div className="h-10 w-[1px] bg-stone-200 hidden md:block" />
                    <div className="flex items-center gap-6">
                        <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-rose-500 transition-colors">Privacy Policy</span>
                        <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-rose-500 transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
            <Decor />
        </footer>
    );
};

export default Footer;