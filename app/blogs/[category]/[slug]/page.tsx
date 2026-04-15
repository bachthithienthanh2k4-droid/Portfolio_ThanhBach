"use client";

import { use, useRef } from "react";
import { DUMMY_POSTS } from "@/app/data/post"; 
import { motion, useScroll, useSpring, useTransform, useInView, Variants } from "framer-motion";
import { Clock, User, Quote as QuoteIcon, Sparkles, Calendar, Heart, ArrowRight, Zap, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

export default function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = DUMMY_POSTS.find((p) => p.slug === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    if (!post) return <div className="h-screen bg-[#050505]" />;

    return (
        <div className="bg-[#050505] text-white selection:bg-pink-500/30">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-pink-500 z-[100] origin-left" style={{ scaleX }} />

            {/* --- HERO SECTION: Gọn gàng hơn --- */}
            <header className="relative h-[80vh] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={post.image} alt="" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="relative z-20 container mx-auto px-6 max-w-5xl">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-pink-500 tracking-[0.3em] text-[10px] font-bold uppercase mb-4 block">
                        {post.category}
                    </motion.span>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        {post.title}
                    </motion.h1>
                    
                    <div className="flex flex-wrap gap-6 text-[12px] text-white/60 font-medium uppercase tracking-wider">
                        <div className="flex items-center gap-2"><User size={14}/> Thanh Bạch</div>
                        <div className="flex items-center gap-2"><Calendar size={14}/> 14.04.2026</div>
                        <div className="flex items-center gap-2"><Clock size={14}/> 6 MIN READ</div>
                    </div>
                </div>
            </header>

            {/* --- BODY: Hiện đại & Tinh tế --- */}
            <div className="relative z-30 bg-white text-slate-800 rounded-t-[2.5rem] md:rounded-t-[5rem] py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    {post?.contentBlocks?.map((block: any, index: number) => (
                        <ContentBlock key={index} block={block} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ContentBlock({ block, index }: { block: any, index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12"
        >
            {/* Heading: Kích thước vừa phải, font-bold */}
            {block.type === "heading" && (
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-snug">
                    {block.text}
                </h2>
            )}

            {/* Paragraph: Text-justify nhẹ, leading thoáng */}
            {block.type === "paragraph" && (
                <p className="text-base md:text-lg text-slate-600 leading-[1.8] font-normal mb-6 text-justify opacity-90">
                    {index === 1 ? (
                        <>
                            <span className="text-4xl font-serif font-bold text-pink-500 float-left mr-2 mt-1">
                                {block.text.charAt(0)}
                            </span>
                            {block.text.slice(1)}
                        </>
                    ) : block.text}
                </p>
            )}

            {/* Image: Bo góc vừa phải, shadow nhẹ */}
            {block.type === "image" && (
                <figure className="my-10">
                    <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100">
                        <img src={block.url} alt="" className="w-full h-auto" />
                    </div>
                    {block.caption && (
                        <figcaption className="mt-3 text-center text-[11px] text-slate-400 font-medium tracking-wide uppercase">
                            — {block.caption}
                        </figcaption>
                    )}
                </figure>
            )}

            {/* List: Grid gọn gàng */}
            {block.type === "list" && (
                <div className="grid grid-cols-1 gap-3 my-8">
                    {block.items?.map((item: string, i: number) => (
                        <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 items-center transition-colors hover:bg-slate-100">
                            <Zap size={16} className="text-pink-500 shrink-0" />
                            <span className="text-sm md:text-base font-medium text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Quote: Đặt ở cuối bài để tạo cảm xúc trước khi kết thúc */}
            {block.type === "quote" && (
                <div className="my-12 px-8 py-10 bg-slate-950 rounded-[2rem] text-center relative overflow-hidden">
                    <QuoteIcon size={32} className="text-pink-500/20 absolute top-6 left-6" />
                    <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed relative z-10">
                        "{block.text}"
                    </p>
                    <div className="w-10 h-1 bg-pink-500 mx-auto mt-6" />
                </div>
            )}

            {/* End Block: Nút bấm tối giản */}
            {block.type === "end" && (
                <div className="mt-16 pt-16 border-t border-slate-100 text-center">
                    <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400 font-bold mb-6">Bạn đã đọc hết rồi</h3>
                    <Link href="/blogs" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full text-sm font-bold transition-all hover:bg-pink-600">
                        QUAY LẠI BLOGS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            )}
        </motion.div>
    );
}