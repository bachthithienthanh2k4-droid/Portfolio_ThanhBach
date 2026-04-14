"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    BookOpen, Code, Award, GraduationCap,
    Users, Rocket, Heart, Brain, Calendar,
    ArrowRight, Sparkles, ChevronRight, Briefcase, Search, Target,
    MessageCircle,
    Coffee,
    Music,
    Camera,
    Gamepad2,
    Lightbulb,
    ShieldAlert,
    Zap
} from 'lucide-react';
import Decor from '../components/decor';
import Link from 'next/link';
import ScientificResearchCard from './NCKH';
import Intership from './intership';
import PortfolioSections from './intership';

const Introduction = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // TypeScript sẽ chấp nhận mảng này là cubic-bezier
            }
        }
    };
    const timelineData = [
        {
            year: "2023 - 2024",
            title: "Cống hiến & Rèn luyện",
            desc: "Nhận giấy khen xuất sắc trong công tác Hội và phong trào sinh viên, Sinh viên 5 Tốt năm 2023. Bắt đầu hành trình tại CLB Hỗ trợ lập trình.",
            icon: <Heart className="text-rose-500" />,
            tag: "Activity"
        },
        {
            year: "2024",
            title: "Vinh danh Sinh viên",
            desc: "Nhận được danh hiệu Sao tháng Giêng và Sinh viên 5 Tốt cấp Trường.",
            icon: <Award className="text-rose-500" />,
            tag: "Honor"
        },
        {
            year: "2024",
            title: "Chinh phục thử thách",
            desc: "Giải Nhì cuộc thi SPIT Front-End. Tham gia Olympic Toán học Sinh viên toàn quốc, rèn luyện tư duy logic và thuật toán chuyên sâu.",
            icon: <Code className="text-amber-500" />,
            tag: "Award"
        },
        {
            year: "2025",
            title: "Thực tập DHY Solutions",
            desc: "Tham gia phát triển hệ thống App giao hàng PANGO thực tế với vai trò Tester (4/2025 - 10/2025). App đã được hoàn thiện và đang trải nghiệm tại Huế.",
            icon: <Search className="text-orange-500" />,
            tag: "Experience"
        },
        {
            year: "2025",
            title: "Đột phá Nghiên cứu",
            desc: "Hoàn thành Nghiên cứu khoa học cấp Trường về Deep Learning chẩn đoán viêm phổi. Đảm nhiệm chức vụ Phó Liên chi hội Khoa CNTT và Phó ban Kỹ năng CLB.",
            icon: <Brain className="text-purple-500" />,
            tag: "Research"
        },
        {
            year: "2026",
            title: "Công nghệ vì cộng đồng",
            desc: "Đang triển khai dự án App di động hỗ trợ sinh viên Đại học Khoa học Huế. Tiếp tục duy trì GPA xuất sắc 3.81/4.0.",
            icon: <Rocket className="text-blue-500" />,
            tag: "Project"
        },
        {
            year: "2026",
            title: "Thực tập VNNIC",
            desc: "Học hỏi quy trình làm việc chuyên nghiệp và làm việc với thực tế tại Trung tâm Internet Việt Nam (4/2026 - 5/2026).",
            icon: <Briefcase className="text-indigo-500" />,
            tag: "Internship"
        },
    ];

    return (
        <div className="min-h-screen bg-[#faf7f2] text-[#432818] pb-24 selection:bg-rose-200">

            {/* HEADER SECTION */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="h-[1px] w-12 bg-rose-300" />
                        <span className="text-rose-500 font-bold tracking-[0.4em] uppercase text-[10px]">Biographical Narrative</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]"
                    >
                        Bạch Thị <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 italic font-light">Thiện Thanh</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl text-xl md:text-2xl text-[#6b584c] leading-relaxed font-light italic border-l-2 border-rose-200 pl-8"
                    >
                        "Một lập trình viên không chỉ nhìn vào những dòng code, mà còn nhìn thấy những giá trị nhân văn ẩn sau mỗi giải pháp công nghệ."
                    </motion.p>
                </div>
            </section>

            <section className="px-6 max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    <motion.div variants={itemVariants} className="md:col-span-8 bg-white rounded-[3rem] p-10 shadow-sm border border-stone-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
                        <div>
                            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-8 group-hover:scale-110 transition-transform">
                                <GraduationCap size={28} />
                            </div>
                            <h3 className="text-3xl font-black mb-6 tracking-tight">Nền tảng tri thức vững chắc</h3>
                            <p className="text-lg text-[#5D4D44] leading-relaxed mb-6 text-justify">
                                Với vai trò là sinh viên năm cuối chuyên ngành <strong> Khoa học Máy tính</strong> tại <strong>Khoa Công nghệ Thông tin, Trường Đại học Khoa học – Đại học Huế </strong>, mình luôn xem việc học là một hành trình bền bỉ và không ngừng hoàn thiện bản thân. Thành tích GPA 3.81/4.0 cùng danh hiệu Sinh viên Xuất sắc qua nhiều năm là minh chứng cho sự nỗ lực, tinh thần kỷ luật và niềm đam mê mà mình dành cho lĩnh vực Công nghệ Thông tin.                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {/* Thẻ Ngành học */}
                            <motion.span
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="px-5 py-2 bg-slate-100 border border-slate-200 rounded-full text-[13px] font-bold uppercase tracking-widest text-slate-600 shadow-sm cursor-default transition-colors hover:bg-slate-200 hover:text-slate-800"
                            >
                                KHKT & Công nghệ
                            </motion.span>

                            {/* Thẻ GPA */}
                            <motion.span
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="px-5 py-2 bg-rose-50 border border-rose-100 rounded-full text-[13px] font-bold uppercase tracking-widest text-rose-500 shadow-sm cursor-default transition-colors hover:bg-rose-500 hover:text-white hover:shadow-md hover:shadow-rose-200"
                            >
                                GPA: 3.81
                            </motion.span>

                            {/* Thẻ Chứng chỉ */}
                            <motion.span
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="px-5 py-2 bg-fuchsia-50 border border-fuchsia-100 rounded-full text-[13px] font-bold uppercase tracking-widest text-fuchsia-500 shadow-sm cursor-default transition-colors hover:bg-fuchsia-500 hover:text-white hover:shadow-md hover:shadow-fuchsia-200"
                            >
                                Chứng chỉ B1
                            </motion.span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-4 bg-rose-100 rounded-[3rem] overflow-hidden relative min-h-[400px] shadow-sm">
                        <img
                            src="/pictures/Ảnh profile.jpg"
                            alt="Bạch Thanh"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1E17]/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-xl tracking-tight">Thanh Bach</p>
                            <p className="text-[10px] opacity-70 uppercase tracking-widest font-medium">Developer & Leader</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Nghiên cứu khoa học */}
                    <motion.div variants={itemVariants} className="md:col-span-12 bg-[#2D1E17] text-stone-200 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
                        <div className="relative z-10 max-w-4xl">
                            <Sparkles className="text-amber-400 mb-6 animate-pulse" />
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">Nghiên cứu khoa học: <br /><span className="text-amber-300 italic font-light">Từ thuật toán đến thực tiễn</span></h3>
                            <div className="space-y-6 text-stone-300 text-lg leading-relaxed text-justify">
                                <p>
                                    Năm 2025, mình hoàn thành đề tài <strong>NGHIÊN CỨU PHƯƠNG PHÁP KẾT HỢP PHÂN ĐOẠN VÀ PHÂN LỚP DỰ TRÊN HỌC SÂU CHO CHẨN ĐOÁN BỆNH VIÊM PHỔI TỪ ẢNH X-QUANG LỒNG NGỰC</strong>. Đây là cột mốc giúp mình làm chủ các kỹ thuật xử lý hình ảnh chuyên sâu và AI.
                                </p>
                                <p>
                                    Tiếp nối đam mê, năm 2026, mình đang xây dựng <strong className="uppercase tracking-tight text-white">Xây dựng ứng dụng di động cung cấp tiện ích để phục vụ và hỗ trợ các nhu cầu</strong> dành riêng cho sinh viên HUSC. Dự án không chỉ là code, mà là giải pháp hỗ trợ thiết thực cho hàng nghìn sinh viên tại trường.
                                </p>
                            </div>
                        </div>
                        <Brain size={400} className="absolute -right-20 -bottom-20 text-white/5 pointer-events-none" />
                    </motion.div>




                    <motion.div variants={itemVariants} className="md:col-span-6 bg-blue-50 rounded-[3rem] p-10 border border-blue-100 group">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform">
                            <Rocket size={24} />
                        </div>
                        <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">Kinh nghiệm Thực tập</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-widest">DHY Solutions / Tester (4/2025 - 10/2025)</p>
                                <p className="text-[#5D4D44] text-sm leading-relaxed text-justify">
                                    Tham gia phát triển app giao hàng PANGO với vai trò Tester, mình được trải nghiệm quy trình làm việc thực tế và chuyên nghiệp.
                                    Ứng dụng hiện đã hoàn thiện và đang triển khai tại Huế, giúp mình tích lũy nhiều kinh nghiệm thực tiễn.                                </p>
                            </div>
                            <div className="pt-4 border-t border-blue-200/50">
                                <p className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-widest">Trung tâm Internet Việt Nam / Internship (4/2026 - 5/2026)</p>
                                <p className="text-[#5D4D44] text-sm leading-relaxed">
                                    Tham gia thực tập tại môi trường chuyên nghiệp, mình được tiếp cận quy trình làm việc thực tế, nâng cao kỹ năng chuyên môn và hiểu rõ hơn về cách vận hành các hệ thống trong thực tiễn.                                </p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div variants={itemVariants} className="md:col-span-6 bg-amber-50 rounded-[3rem] p-10 border border-amber-100 group">
                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-8 group-hover:-rotate-12 transition-transform">
                            <Award size={24} />
                        </div>
                        <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">Dấu ấn tại các kỳ thi</h4>
                        <ul className="space-y-5 text-[#5D4D44]">
                            <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 text-amber-500 shrink-0" size={18} />
                                <span className="text-sm"><strong>Giải Nhì SPIT Front-End 2024:</strong> Khẳng định kỹ năng xây dựng giao diện và trải nghiệm người dùng.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 text-amber-500 shrink-0" size={18} />
                                <span className="text-sm"><strong>Olympic Toán học Sinh viên toàn quốc 2024:</strong> Dù kết quả không như ý nhưng đã tôi luyện cho mình một tư duy logic sắt bén.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 text-amber-500 shrink-0" size={18} />
                                <span className="text-sm"><strong>ICPC HUSC 2025:</strong> Sân chơi lập trình đầy kịch tính giúp mình học cách làm việc nhóm dưới áp lực cao.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-12 bg-white rounded-[3rem] p-10 md:p-12 shadow-sm border border-stone-100 group overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="md:max-w-2xl">
                                <Users className="text-rose-500 mb-6" size={32} />
                                <h4 className="text-3xl font-black mb-4 tracking-tight">Sứ mệnh tuổi trẻ</h4>
                                <p className="text-[#5D4D44] leading-relaxed text-justify text-lg italic">
                                    Với vai trò <strong>Phó Liên chi hội trưởng Khoa CNTT</strong> và <strong>Phó ban Kỹ năng CLB Hỗ trợ lập trình</strong>, mình luôn nỗ lực kết nối cộng đồng sinh viên, hỗ trợ tổ chức các sự kiện, hội thảo và phong trào của Khoa và Câu lạc bộ.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 md:w-64 justify-end">
                                {['Lãnh đạo', 'Thiết kế Poster', 'Văn nghệ', 'Training'].map(skill => (
                                    <span key={skill} className="text-[10px] font-black uppercase px-4 py-2 bg-stone-50 rounded-xl border border-stone-200 text-stone-500 group-hover:bg-rose-50 group-hover:text-rose-500 group-hover:border-rose-100 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Decor />

                    </motion.div>
                </motion.div>
            </section>
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Cột trái: Ưu & Nhược điểm (Dạng Glassmorphism) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-5 space-y-6"
                    >
                        <div className="bg-white/70 backdrop-blur-md rounded-[3rem] p-10 border border-white shadow-xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight">Thế mạnh</h3>
                            </div>
                            <ul className="space-y-4">
                                {['Tư duy thuật toán tốt', 'Khả năng tự học công nghệ mới nhanh', 'Làm việc nhóm & Điều phối tốt'].map((s, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-3 text-[#5D4D44] font-medium"
                                    >
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full" /> {s}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#432818] text-stone-600 rounded-[3rem] p-10 shadow-xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-white/10 text-rose-400 rounded-2xl">
                                        <ShieldAlert size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white-500 tracking-tight">Điểm cần cải thiện</h3>
                                </div>
                                <p className="text-sm leading-relaxed italic opacity-80">
                                    "Đôi khi quá cầu toàn trong chi tiết dẫn đến tốn thời gian. Đang học cách cân bằng giữa sự hoàn hảo và tiến độ dự án."
                                </p>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform bg-white/10 text-rose-100">
                                <Target size={120} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Cột phải: Đam mê & Lý do chọn ngành (Dạng Storytelling) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-7 bg-gradient-to-br from-orange-50 to-rose-50 rounded-[3rem] p-10 md:p-14 border border-orange-100 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <motion.div
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-orange-500 shadow-sm mb-8"
                            >
                                <Lightbulb size={32} />
                            </motion.div>
                            <h3 className="text-4xl font-black mb-6 tracking-tighter leading-tight">
                                Tại sao lại là <br /><span className="text-orange-600">Khoa học Máy tính?</span>
                            </h3>
                            <div className="space-y-6 text-[#5D4D44] text-lg leading-relaxed text-justify">
                                <p>
                                    Bắt đầu từ sự tò mò về cách thế giới vận hành qua những con số, mình nhận ra <strong>Lập trình không chỉ là gõ phím</strong>. Đó là công cụ mạnh mẽ nhất để biến những ý tưởng trừu tượng thành giải pháp thay đổi cuộc sống.
                                </p>
                                <p className="font-medium italic border-l-4 border-orange-300 pl-6">
                                    "Thử thách lớn nhất là khi thuật toán không chạy, nhưng niềm hạnh phúc lớn nhất là khi thấy 'đứa con tinh thần' của mình giúp ích được cho cộng đồng."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sở thích (Dạng Bento Tags) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-12 bg-white rounded-[3rem] p-10 border border-stone-100 shadow-sm overflow-hidden"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="shrink-0">
                                <h4 className="text-xl font-black uppercase tracking-widest text-stone-400 rotate-0 md:-rotate-90">Interests</h4>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {[
                                    { icon: <Coffee size={20} />, label: "Coffee Coding", color: "bg-orange-100 text-orange-700" },
                                    { icon: <Music size={20} />, label: "Lo-fi Music", color: "bg-blue-100 text-blue-700" },
                                    { icon: <Camera size={20} />, label: "Photography", color: "bg-rose-100 text-rose-700" },
                                    { icon: <Gamepad2 size={20} />, label: "Logic Games", color: "bg-indigo-100 text-indigo-700" },
                                    { icon: <BookOpen size={20} />, label: "Tech Blogs", color: "bg-emerald-100 text-emerald-700" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-sm ${item.color}`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

            </section>


            {/* TIMELINE SECTION */}
            <section className="py-30 px-6 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-24">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Hành trình trưởng thành</h2>
                    <p className="text-[#8d7b6d] italic text-lg">Từng cột mốc là một bài học vô giá</p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-stone-200" />
                    <div className="space-y-16">
                        {timelineData.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-16 group"
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                    <span className="text-lg font-black text-rose-500 tabular-nums">{step.year}</span>
                                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-stone-300" />
                                    <h4 className="text-xl font-bold tracking-tight text-[#432818]">{step.title}</h4>
                                </div>
                                <div className="bg-white/50 p-6 rounded-[2rem] border border-stone-100 group-hover:bg-white transition-all duration-500">
                                    <p className="text-[#6b584c] font-light leading-relaxed text-sm">{step.desc}</p>
                                    <span className="inline-block mt-4 text-[9px] font-black uppercase tracking-widest text-stone-400 bg-stone-50 px-3 py-1 rounded-full group-hover:bg-rose-50 group-hover:text-rose-400">
                                        {step.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center py-20"
                >
                    <Link href="/journey" className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative flex items-center gap-3 px-10 py-5 bg-white border border-gray-100 rounded-full shadow-2xl transition-all duration-300 group-hover:border-transparent"
                        >
                            <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-pink-600 group-hover:to-rose-500 transition-all duration-300">
                                Tìm hiểu thêm về hành trình của Thanh
                            </span>

                            <div className="relative overflow-hidden w-6 h-6">
                                <motion.div
                                    className="flex flex-col"
                                    animate={{ y: [0, -24, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 1]
                                    }}
                                >
                                    <ArrowRight className="text-pink-500" size={24} />
                                    <ArrowRight className="text-pink-500 translate-y-6" size={24} />
                                </motion.div>
                            </div>

                            <motion.div
                                className="absolute bottom-4 left-10 right-16 h-[2px] bg-pink-500/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                            />
                        </motion.div>
                    </Link>
                </motion.div>
            </section>

            {/* CALL TO ACTION */}
            <section className="px-6 relative overflow-hidden -mt-16 md:-mt-24">
                {/* Background Decor nhẹ nhàng bên ngoài */}
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto bg-white border border-stone-100 rounded-[4rem] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
                >
                    {/* Overlay Gradient cực nhẹ để tạo chiều sâu */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-amber-50/30 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Badge nhỏ phía trên đầu */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="mb-6 flex items-center gap-2 px-4 py-1.5 bg-rose-50 rounded-full text-rose-500 font-bold text-[10px] uppercase tracking-[0.2em]"
                        >
                            <Sparkles size={14} /> Let's Work Together
                        </motion.div>

                        <h3 className="text-3xl md:text-5xl font-black text-[#2D1E17] mb-8 leading-[1.15] tracking-tight">
                            Bạn muốn tìm hiểu thêm về <br />
                            <span className="text-rose-500 italic font-serif font-light">các dự án của mình?</span>
                        </h3>

                        <p className="text-stone-500 max-w-xl mb-10 text-lg font-light leading-relaxed">
                            Mỗi dự án là một hành trình kết nối giữa kỹ thuật và cảm xúc.
                            Đừng ngần ngại khám phá và chia sẻ cùng mình nhé.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
                            <Link href="/projects">
                                <button className="group px-10 py-5 bg-[#2D1E17] text-white rounded-full font-bold hover:bg-rose-600 transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-widest shadow-xl shadow-stone-200">
                                    Khám phá dự án
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <Link href="/connect">
                                <button className="px-10 py-5 bg-white text-stone-600 border border-stone-200 rounded-full font-bold hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-widest">
                                    <MessageCircle size={18} /> Liên hệ ngay
                                </button>
                            </Link>

                        </div>
                    </div>

                    {/* Rocket Decor - Thay bằng kích thước vừa phải và Opacity thấp */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-stone-900 pointer-events-none -rotate-12">
                        <Rocket size={400} />
                    </div>
                </motion.div>
            </section>







        </div>
    );
};

export default Introduction;