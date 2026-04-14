import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Brain, CodeXml, AppWindow, Cpu, Activity, GraduationCap, ChevronRight } from 'lucide-react';
import React from 'react';

export default function UltraDarkResearchCardWithImage() {
    // Hiệu ứng Parallax cho toàn bộ card
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-12 group relative rounded-[4rem] p-1 md:p-[2px] overflow-hidden  bg-gradient-to-br from-amber-500/20 via-transparent to-amber-950/30 shadow-2xl"
        >
            {/* INNER CONTAINER */}
            <div className="relative bg-[#080707] rounded-[3.9rem] p-10 md:p-20 overflow-hidden border border-white/5">

                {/* 1. HIỆU ỨNG NỀN ĐỘNG (AMBIENT LIGHT) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/5 blur-[120px] rounded-full" />
                    {/* Dot Grid Layer */}
                    <div className="absolute inset-0 opacity-[0.15]"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                        }}
                    />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* 2. KHU VỰC VISUAL & HÌNH ẢNH (TRÁI) - Bento Layout */}
                    <motion.div
                        className="lg:col-span-5 relative space-y-8"
                        style={{ translateZ: 50 }}
                    >
                        <div className="relative aspect-square flex items-center justify-center">
                            {/* Orbital Rings - Background */}
                            {[...Array(2)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute border border-amber-500/10 rounded-full"
                                    style={{ inset: i * 60 }}
                                    animate={{
                                        rotate: i % 2 === 0 ? 360 : -360,
                                        scale: [1, 1.05, 1],
                                        borderColor: ["rgba(245,158,11,0.05)", "rgba(245,158,11,0.2)", "rgba(245,158,11,0.05)"]
                                    }}
                                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                                />
                            ))}

                            {/* Main Visual Container - Bento Style */}
                            <div className="relative z-10 w-full h-full rounded-[3rem] bg-gradient-to-b from-amber-500/20 to-transparent p-[1px]">
                                <div className="w-full h-full bg-[#120f0e] rounded-[2.9rem] flex flex-col items-center p-8 relative overflow-hidden group-hover:shadow-[0_0_60px_rgba(245,158,11,0.1)] transition-all duration-700">

                                    {/* 2.1 GIỮ NGUYÊN HÌNH ẢNH - TÍCH HỢP VÀO BỐ CỤC */}
                                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 mb-6">
                                        <img
                                            src="/pictures/NCKH_2.jpg"
                                            alt="Spit Front-end Research Visual"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <img
                                            src="/pictures/NCKH_1.jpg"
                                            alt="Spit Front-end Research Visual"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay gradient cho hình ảnh */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Scanning Effect - Phủ lên hình ảnh */}
                                        <motion.div
                                            className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_rgba(245,158,11,1)]"
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </div>

                                    {/* 2.2 Sắp xếp lại các Icon/Badge */}
                                    <div className="w-full grid grid-cols-2 gap-4">
                                        {/* Badge CPU - Giữ lại CPU Icon */}
                                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                            <Cpu size={24} strokeWidth={1} className="text-amber-500" />
                                            <span className="text-xs font-mono text-stone-400">Core Logic</span>
                                        </div>
                                        {/* Badge Activity */}
                                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                            <Activity size={24} strokeWidth={1} className="text-amber-500" />
                                            <span className="text-xs font-mono text-stone-400">Processing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Label Badge */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="absolute -bottom-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-black font-black text-sm tracking-widest shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            >
                                AI & DEEP LEARNING
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 3. CONTENT SECTION (PHẢI) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500"
                                whileHover={{ x: 5 }}
                            >
                                <Sparkles size={16} className="animate-pulse" />
                                <span className="uppercase tracking-[0.4em] text-[10px] font-black">2025 - 2026</span>
                            </motion.div>

                            <h3 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                                Nghiên cứu <br />
                                <span className="italic font-light text-amber-500">Khoa học</span>
                            </h3>

                            <p className="text-stone-400 text-xl font-light leading-relaxed max-w-2xl border-l border-amber-500/30 pl-6 group-hover:border-amber-500/70 transition-colors">
                                "Tập trung vào các thuật toán xử lý ảnh tiên tiến và ứng dụng trí tuệ nhân tạo (AI) vào chẩn đoán y khoa, song song với việc xây dựng hệ thống hỗ trợ sinh viên HUSC."
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {/* Research Item 1 - Bento Style */}
                            <ResearchCard
                                year="2025"
                                title="NGHIÊN CỨU HỌC SÂU (DEEP LEARNING)"
                                desc="Phát triển model kết hợp Segmentation & Classification trong chẩn đoán X-Quang phổi với độ chính xác vượt trội."
                                icon={<Brain className="text-amber-500" />}
                                color="amber"
                            />

                            {/* Research Item 2 - Bento Style */}
                            <ResearchCard
                                year="2026"
                                title="HỆ SINH THÁI HUSC MOBILE"
                                desc="Xây dựng nền tảng hỗ trợ sinh viên với trải nghiệm người dùng hiện đại."
                                icon={<GraduationCap className="text-blue-400" />}
                                color="blue"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Background Brain Icon - Mờ hơn nữa */}
                <div className="absolute -right-20 -bottom-20 text-white/4 pointer-events-none rotate-12">
                    <Brain size={400} />
                </div>
            </div>
        </motion.div>
    );
}

// Sub-component cho từng mục nghiên cứu - Bento-style Item
function ResearchCard({ year, title, desc, icon, color }: any) {
    const isAmber = color === 'amber';

    return (
        <motion.div
            whileHover={{ x: 15 }}
            className={`
                group/item relative p-8 rounded-[2.5rem] transition-all duration-500 cursor-pointer overflow-hidden
                /* 1. Đổi màu nền: Sử dụng gradient đậm thay vì trắng mờ */
                ${isAmber
                    ? 'bg-gradient-to-br from-amber-500/[0.08] to-transparent'
                    : 'bg-gradient-to-br from-blue-500/[0.08] to-transparent'
                }
                /* 2. Đổi màu viền: Viền màu đặc trưng giúp nổi bật hơn border trắng */
                border ${isAmber ? 'border-amber-500/20' : 'border-blue-500/20'}
                hover:${isAmber ? 'border-amber-500/50' : 'border-blue-500/50'}
                backdrop-blur-xl
            `}        >
            <div className="flex gap-6 items-start">
                <div className={`mt-1 p-4 rounded-2xl ${isAmber ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-400'} font-mono font-bold shadow-inner`}>
                    {year}
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        {React.cloneElement(icon, { size: 18, strokeWidth: 1.5 })}
                        <h4 className={`font-bold tracking-tight text-xl ${isAmber ? 'text-amber-200' : 'text-blue-200'}`}>{title}</h4>
                    </div>
                    <p className="text-stone-300/80 text-lg leading-relaxed font-light">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}