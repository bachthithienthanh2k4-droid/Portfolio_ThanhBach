"use client";

import { use, useRef } from "react";
import { DUMMY_POSTS } from "@/app/data/post";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { Clock, User, Quote, Sparkles, CheckCircle2, Calendar, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";

const BentoInfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <motion.div
        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-colors"
    >
        <Icon size={18} className="text-pink-300 mb-2" />
        <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{label}</span>
        <span className="text-sm font-bold text-white">{value}</span>
    </motion.div>
);

export default function PostDetailPage({ params }: { params: Promise<{ slug: string, category: string }> }) {
    const { slug, category } = use(params);
    const post = DUMMY_POSTS.find((p) => p.slug === slug);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const yHero = useTransform(scrollYProgress, [0, 0.4], [0, 150]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 0.4], [1.05, 1.2]);
    const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

    if (!post) return <div className="p-20 text-center italic">Bài viết đang được tìm kiếm...</div>;

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-slate-800 selection:bg-pink-100 selection:text-pink-600 overflow-x-hidden">
            {/* 1. Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 origin-left z-[100]"
                style={{ scaleX }}
            />

            <article className="relative bg-[#FDFDFD]">
                <div className="h-20 md:h-24" />

                <header className="relative min-h-[150vh] flex items-center justify-center py-24 px-4 overflow-hidden bg-[#0a0a0a]">
                    <motion.div
                        style={{ y: yHero, scale: scaleImage }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        {/* Overlay Layers */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-70" />
                    </motion.div>

                    {/* 2. MAIN CONTENT */}
                    <motion.div
                        style={{ opacity: opacityContent }}
                        className="relative z-20 w-full max-w-7xl mx-auto"
                    >
                        <div className="flex flex-col items-center text-center">

                            {/* Category Badge with Glow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="group cursor-pointer mb-8"
                            >
                                <span className="relative px-8 py-3 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-block">
                                    <span className="relative z-10 text-pink-400 text-xs font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-300">
                                        {post.category}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-violet-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </span>
                            </motion.div>

                            {/* Reveal Title Animation */}
                            <div className="relative group select-none">
                                {/* Outline phía sau */}
                                <h1
                                    className="absolute inset-0 translate-x-2 translate-y-2 
    text-6xl md:text-[9rem] font-black uppercase italic 
    tracking-[0.06em] leading-[0.9] 
    text-transparent pointer-events-none"
                                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
                                >
                                    {post.title}
                                </h1>

                                {/* Text chính */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative z-10 
    text-6xl md:text-[9rem] font-black uppercase italic 
    tracking-[0.05em] leading-[0.95] text-white"
                                >
                                    <span className="text-pink-500 mr-2">.</span>
                                    {post.title}

                                    {/* Cursor nhẹ */}
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.2 }}
                                        className="inline-block w-3 h-3 md:w-5 md:h-5 bg-pink-500 ml-3 rounded-sm"
                                    />
                                </motion.h1>
                            </div>

                            {/* Modern Bento Info Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-8"
                            >
                                <BentoInfoItem icon={User} label="Curated by" value="Thanh Bạch" delay={1.1} />
                                <BentoInfoItem icon={Clock} label="Reading time" value="5 min read" delay={1.2} />
                                <BentoInfoItem icon={Calendar} label="Released" value="Apr 2026" delay={1.3} />
                                <BentoInfoItem icon={Heart} label="Community" value="1.2k Saves" delay={1.4} />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 3. SCROLL INDICATOR - Redesigned */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-white/30 text-[9px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                            <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
                        </motion.div>
                    </motion.div>
                </header>
                <div className="h-20 bg-gradient-to-b from-[#FDFDFD]/0 to-[#FDFDFD] -mt-20 relative z-30" />

                <div className="relative z-30 bg-white rounded-t-[4rem] md:rounded-t-[7rem] -mt-10">
                    <div className="max-w-4xl mx-auto px-6 py-32">
                        <div className="space-y-20">
                            {post.contentBlocks.map((block, index) => (
                                <ContentBlock key={index} block={block} />
                            ))}
                        </div>
                    </div>
                </div>
            </article>

        </div>
    );
}

// 5. Tách Content Block để tối ưu Performance và Animation Scroll
function ContentBlock({ block }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            {block.type === "heading" && (
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                    {block.text}
                </h2>
            )}

            {block.type === "paragraph" && (
                <p className="text-lg md:text-xl text-slate-600 leading-[1.8] font-light mb-8">
                    {block.text}
                </p>
            )}

            {block.type === "image" && (
                <figure className="my-24 -mx-6 md:-mx-32 group">
                    <div className="overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl bg-slate-100">
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            src={block.url}
                            alt={block.caption}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {block.caption && (
                        <figcaption className="mt-8 text-center text-sm tracking-widest text-slate-400 uppercase font-medium">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            )}

            {block.type === "quote" && (
                <div className="relative py-20 px-10 my-24 border-y border-slate-100 flex flex-col items-center text-center">
                    <Quote size={40} className="text-pink-500 mb-8 opacity-20" />
                    <p className="text-2xl md:text-4xl italic text-slate-800 leading-tight max-w-4xl">
                        {block.text}
                    </p>
                </div>
            )}

            {block.type === "list" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20 bg-slate-50 p-12 rounded-[3rem]">
                    <div className="flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h4>
                        <p className="text-slate-500 font-light">Những điểm mấu chốt bạn cần lưu ý trong nội dung này.</p>
                    </div>
                    <ul className="space-y-4">
                        {block.items?.map((item: string, i: number) => (
                            <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                                <span className="w-2 h-2 rounded-full bg-pink-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {block.type === "end" && (
                <div className="mt-40 text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-8 text-pink-500"
                    >
                        <Sparkles size={60} strokeWidth={1} />
                    </motion.div>
                    <h3 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic">Fine.</h3>
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#0a0a0a] text-white rounded-full hover:bg-pink-600 transition-colors group"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">Next Article</span>
                        <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            )}
        </motion.div>
    );
}