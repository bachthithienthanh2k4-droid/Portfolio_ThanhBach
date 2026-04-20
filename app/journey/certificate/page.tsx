"use client"
import { Award, GraduationCap, Globe, Star, Sparkles, BookOpen, Heart, Medal, ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: {
        y: 30,
        opacity: 0,
        scale: 0.98
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};
const certificates = [
    "/pictures/z7743213938612_7a1ddc854c3137f37e8079429a889dc7.jpg",
    "/pictures/z7743213661606_993b43851bdf39b8cc6d548e79376dfd.jpg",
    "/pictures/z7743213870005_1197eedb94b6748d61d6a72a94295575.jpg",
    "/pictures/z7743213969787_d2c3a9496a2509787db536edb1b7f9d9.jpg",
    "/pictures/z7743213725222_5c841ed02d924d7a464bdc9f4853282f.jpg",
    "/pictures/z7743213633477_1b2bd2424ac7f4512c5e87c752ad6f29.jpg",
    "/pictures/(Tạo hàng loạt 1) GCN Thành viên tích cực.png"

];

// Nhân bản danh sách để tạo vòng lặp vô tận không vết nối
const duplicatedCertificates = [...certificates, ...certificates];
const SV = [
    {
        src: "/pictures/z7743213798963_872d4811161b1b73c8ec4d87316cc8e6.jpg",
        title: "Sao tháng giêng ",
        org: "2024"
    },
    {
        src: "/pictures/z7743213760551_9f4f9b198121e45ec867c2be1e49e84e.jpg",
        title: "Sinh viên 5 Tốt",
        org: "2024"
    },
    {
        src: "/pictures/z7743213834621_5491a473a526318c75745c7485a01d15.jpg",
        title: "Sinh viên 5 Tốt",
        org: "2023"
    }

];

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
                <section className='-mt-30 px-4 max-w-7xl mx-auto'>
                    <SectionHeader
                        icon={<GraduationCap className="text-blue-500" />}
                        title="Học Tập Xuất Sắc"
                        subtitle="Academic Excellence"
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]"
                    >

                        {/* Card 1: Điểm nhấn chính */}
                        <CertificateCard
                            src="/pictures/z7743214265100_fd9d92a99885d09996fa7fb7bdd0b4b1.jpg"
                            className="md:col-span-7 md:row-span-2"
                            label="Khen thưởng Sinh viên xuất sắc"
                        />

                        {/* Card 2: Dọc nhỏ */}
                        <CertificateCard
                            src="/pictures/z7743214224466_a78b97ceecfe028ae0785718a3436910.jpg"
                            className="md:col-span-5 md:row-span-1"
                            label="Khen thưởng Sinh viên xuất sắc"
                        />

                        {/* Card 3: Ngang */}
                        <CertificateCard
                            src="/pictures/z7743213907128_cef22fc148b680c99f231b16e73828e6.jpg"
                            className="md:col-span-5 md:row-span-1"
                            label="Khen thưởng Sinh viên xuất sắc"
                        />

                        {/* Card 4: Ngang lớn */}
                        <CertificateCard
                            src="/pictures/z7743214044134_87fda706a6a00f976fb20ee2447bb4ed.jpg"
                            className="md:col-span-7 md:row-span-1"
                            label="Tham gia kì thi Toán sinh viên"
                        />

                        {/* Card 5: Nhỏ */}
                        <CertificateCard
                            src="/pictures/z7743214087031_71a7b2db6fb2968ca80a3fe155461f11.jpg"
                            className="md:col-span-5 md:row-span-1"
                            label="Giải Nhì SPIT Front-end"
                        />

                        {/* Card 6: Nhỏ */}
                        <CertificateCard
                            src="/pictures/z7743213692794_d221bb932222336c19cc6f1838e6dfc9.jpg"
                            className="md:col-span-5 md:row-span-1"
                            label="Tham gia ICPC cấp Khoa"
                        />

                        {/* Card 7: Nhỏ */}
                        <CertificateCard
                            src="/pictures/z7743214164539_e5c4664ce6718a90dfc87112e2c518a9.jpg"
                            className="md:col-span-7 md:row-span-1"
                            label="Giải nhì MTCT cấp Tỉnh"
                        />

                    </motion.div>
                </section>

                {/* --- SECTION 2: INFINITE CAROUSEL (Nâng cấp Glow) --- */}
                <section className='-mt-30'>
                    <SectionHeader icon={<Star />} title="Giấy chứng nhận Hoạt động Đoàn - Hội" subtitle="Social Contribution" />

                    <div className="relative -mx-4 md:-mx-10 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fffafa] to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#fffafa] to-transparent z-10" />

                        <motion.div
                            animate={{ x: [0, -1500] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="flex gap-10 py-10 px-10 w-max"
                        >
                            {duplicatedCertificates.map((src, index) => (
                                <div key={index} className="group relative w-[450px] aspect-video rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(244,63,94,0.15)] ring-1 ring-rose-100">
                                    <img
                                        src={src}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                        <p className="text-white font-bold tracking-widest text-sm uppercase">Cống Hiến Đoàn Hội</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- SECTION 3: NGOẠI KHÓA (Modern Stack Layout) --- */}
                <section className='-mt-30 bg-slate-50/50'>
                    <div className="container mx-auto px-6">
                        <SectionHeader
                            icon={<Globe className="text-indigo-600" />}
                            title="Chứng nhận toàn trường"
                            subtitle="Soft Skills"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                            {SV.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative bg-white rounded-[2.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 hover:shadow-indigo-200/40"
                                >
                                    {/* Badge "Award" cách điệu gọn hơn */}
                                    <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg z-10 transform group-hover:rotate-12 transition-transform duration-500">
                                        <Award size={24} />
                                    </div>

                                    {/* Khung ảnh thu nhỏ và bo góc sâu */}
                                    <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/5] mb-6 ring-1 ring-slate-200/50">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000'; }}
                                        />
                                        {/* Overlay mờ khi hover */}
                                        <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                                <ExternalLink size={20} className="text-indigo-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Nội dung text tinh gọn */}
                                    <div className="space-y-2 text-center pb-2">
                                        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em]">
                                            {item.org}
                                        </p>
                                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="flex justify-center pt-2">
                                            <div className="h-1 w-8 bg-slate-100 rounded-full group-hover:w-16 group-hover:bg-indigo-400 transition-all duration-500" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}

/* --- CÁC COMPONENT TÁI SỬ DỤNG --- */

function SectionHeader({ icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
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
function CertificateCard({ src, className = "", label }: { src: string, className?: string, label: string }) {
    return (
        <motion.div
            variants={itemVariants as any}
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
                // Thêm React.SyntheticEvent để fix lỗi tham số 'e'
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000';
                }}
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