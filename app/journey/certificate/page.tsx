"use client"
import { Award, GraduationCap, Globe, Star, Sparkles, BookOpen, Heart, Medal, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform , Variants} from 'framer-motion';
import { useRef } from 'react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.15 
        }
    }
};

const itemVariants: Variants = {
    hidden: { 
        y: 40, 
        opacity: 0, 
        scale: 0.95 
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { 
            duration: 0.8, 
            // Khi có kiểu Variants, mảng Cubic Bezier này sẽ được chấp nhận
            ease: [0.16, 1, 0.3, 1] 
        }
    }
};

export default function Certificate() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={targetRef} className="min-h-screen bg-[#fffafa] py-32 px-4 md:px-10 overflow-hidden selection:bg-rose-200">

            {/* --- TRANG TRÍ NỀN ĐỘNG --- */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-rose-200/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto space-y-64">

                {/* --- HERO HEADER --- */}
                <header className="relative flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-bold uppercase tracking-widest mb-10"
                    >
                        <Sparkles size={16} /> Professional Milestones
                    </motion.div>
                    <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter flex flex-wrap justify-center items-center gap-x-6 gap-y-8 mb-12 pb-10 pt-5">
                        {/* Tăng gap-y-8 và pb-10 để tạo không gian cực rộng cho chân chữ và dấu */}

                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-slate-900 flex py-4"
                        >
                            {"THÀNH TÍCH".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ delay: index * 0.04, duration: 0.6 }}
                                    className="inline-block leading-[1.2]" // Chỉnh leading lên 1.2 để không bao giờ bị cắt chân
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ delay: 0.5, duration: 1 }}
                            // Quan trọng: Thêm leading-[1.5] và p-4 để bảo vệ các dấu Tiếng Việt và Gradient
                            className="relative p-4 leading-[1.5] text-transparent bg-clip-text bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-600 italic block md:inline"
                        >
                            & BẰNG KHEN

                            {/* Hạ thấp thanh gạch ngang xuống hẳn dưới chân chữ */}
                            <motion.div
                                className="absolute bottom-2 left-0 w-full h-2 bg-rose-200/40 -z-10"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: 1, duration: 1 }}
                            />
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-2xl text-slate-500 text-lg md:text-xl font-medium leading-relaxed italic"
                    >
                        "Bằng khen không phải là vạch đích, mà là dấu mốc ghi lại hành trình nỗ lực và bản lĩnh trưởng thành của chính bạn."
                    </motion.p>

                    {/* Decor Elements */}
                    <div className="hidden lg:block">
                        <FloatingIcon icon={<Heart size={20} className="text-pink-400 fill-pink-50" />} top="5%" left="10%" delay={0} />
                        <FloatingIcon icon={<Medal size={30} className="text-rose-500" />} top="50%" right="-5%" delay={1} />
                        <FloatingIcon icon={<Sparkles size={20} className="text-fuchsia-400" />} bottom="10%" left="15%" delay={2} />
                    </div>
                </header>

                {/* --- SECTION 1: BENTO GALLERY (Cải tiến mạnh mẽ) --- */}
                <section className='-mt-20'>
                    <SectionHeader icon={<GraduationCap />} title="Học Tập Xuất Sắc" subtitle="Academic Excellence" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8"
                    >
                        <CertificateCard src="/pictures/bangkhen1.jpg" className="md:col-span-8 h-[500px]" label="Khen thưởng Sinh viên tiêu biểu" />
                        <CertificateCard src="/pictures/bangkhen2.jpg" className="md:col-span-4 h-[500px]" label="Học bổng Khuyến khích" />
                        <CertificateCard src="/pictures/bangkhen3.jpg" className="md:col-span-5 h-[400px]" label="Top 5 Đồ án xuất sắc" />
                        <CertificateCard src="/pictures/bangkhen4.jpg" className="md:col-span-7 h-[400px]" label="Giải Nhất Olympic Tin học" />
                    </motion.div>
                </section>

                {/* --- SECTION 2: INFINITE CAROUSEL (Nâng cấp Glow) --- */}
                <section className='-mt-30'>
                    <SectionHeader icon={<Star />} title="Hoạt Động Cộng Đồng" subtitle="Social Contribution" />

                    <div className="relative -mx-4 md:-mx-10 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fffafa] to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#fffafa] to-transparent z-10" />

                        <motion.div
                            animate={{ x: [0, -1500] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="flex gap-10 py-10 px-10 w-max"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="group relative w-[450px] aspect-video rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(244,63,94,0.15)] ring-1 ring-rose-100">
                                    <img
                                        src={`/pictures/union${i}.jpg`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                        <p className="text-white font-bold tracking-widest text-sm uppercase">Cống Hiến Đoàn Hội #{i}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- SECTION 3: NGOẠI KHÓA (Modern Stack Layout) --- */}
                <section className='-mt-40'>
                    <SectionHeader icon={<Globe />} title="Chứng Nhận Toàn Cầu" subtitle="Global Soft Skills" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -15 }}
                                className="relative bg-white rounded-[3rem] p-6 shadow-2xl shadow-rose-200/30 border border-white group"
                            >
                                <div className="absolute -top-6 -right-6 w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg">
                                    <Award size={32} />
                                </div>
                                <div className="rounded-[2.2rem] overflow-hidden aspect-[3/4] mb-8 ring-1 ring-slate-100">
                                    <img
                                        src="/pictures/ngoaikhoa.jpg"
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000'; }}
                                    />
                                </div>
                                <div className="space-y-3 px-2">
                                    <h4 className="text-xl font-black text-slate-800 tracking-tight">Kỹ năng lãnh đạo #{i}</h4>
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Global Talent Award</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            
            </div>
        </div>
    );
}

/* --- CÁC COMPONENT TÁI SỬ DỤNG --- */

function SectionHeader({ icon, title, subtitle }) {
    return (
        <div className="flex flex-col items-center mb-20 text-center space-y-4">
            <motion.div
                whileInView={{ rotate: [0, 10, -10, 0] }}
                className="p-5 rounded-3xl bg-white shadow-xl text-rose-500 border border-rose-50"
            >
                {icon}
            </motion.div>
            <h3 className="text-rose-400 text-xs font-black uppercase tracking-[0.4em]">{subtitle}</h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">{title}</h2>
        </div>
    );
}

function CertificateCard({ src, className = "", label }) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover="hover"
            className={`group relative overflow-hidden rounded-[3.5rem] bg-white p-4 shadow-xl shadow-rose-200/20 border border-rose-50 cursor-crosshair ${className}`}
        >
            <motion.img
                src={src}
                variants={{
                    hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover rounded-[2.8rem] ring-1 ring-black/5"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000'; }}
            />

            {/* Overlay */}
            <motion.div
                variants={{
                    hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-6 rounded-[2.8rem] bg-rose-600/10 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity"
            >
                <div className="p-4 bg-white rounded-full shadow-2xl mb-4 text-rose-600">
                    <ArrowUpRight size={32} />
                </div>
                <p className="text-rose-900 font-black text-xs uppercase tracking-widest">{label}</p>
            </motion.div>
        </motion.div>
    );
}

function FloatingIcon({ icon, top, left, right, bottom, delay }: { 
    icon: any, 
    delay: number,
    top?: string | number, 
    left?: string | number, 
    right?: string | number, 
    bottom?: string | number 
}) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [-20, 20, -20],
                rotate: [-10, 10, -10]
            }}
            transition={{ duration: 6, repeat: Infinity, delay }}
            style={{ position: 'absolute', top, left, right, bottom }}
            className="p-6 bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 z-0 pointer-events-none hidden xl:block"
        >
            {icon}
        </motion.div>
    );
}