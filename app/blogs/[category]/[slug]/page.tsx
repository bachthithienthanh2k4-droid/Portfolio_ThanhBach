"use client";

import { use, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { DUMMY_POSTS, PostBlock } from "@/app/data/post";
import { BlogCard } from "../../blogcard";
import { imgSrc, readingTime } from "../../utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = DUMMY_POSTS.find((p) => p.slug === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const [activeHeading, setActiveHeading] = useState(0);

    // Mục lục: các tiêu đề trong bài
    const headings = (post?.contentBlocks ?? [])
        .map((b, i) => ({ block: b, index: i }))
        .filter(({ block }) => block.type === "heading");

    // Đánh dấu mục đang đọc: tiêu đề cuối cùng đã đi qua 30% trên của màn hình
    useEffect(() => {
        if (!headings.length) return;
        const ids = headings.map(({ index }) => index);
        const onScroll = () => {
            let current = ids[0];
            for (const id of ids) {
                const el = document.getElementById(`muc-${id}`);
                if (el && el.getBoundingClientRect().top < window.innerHeight * 0.3) current = id;
            }
            setActiveHeading(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        const raf = requestAnimationFrame(onScroll);
        return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
    }, [headings.length]); // eslint-disable-line react-hooks/exhaustive-deps

    // Cuộn mục lục theo mục đang đọc
    useEffect(() => {
        document.getElementById(`toc-${activeHeading}`)?.scrollIntoView({ block: "nearest" });
    }, [activeHeading]);

    if (!post) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#fbf5f1] text-[#3a2420]">
                <p className="italic text-[#a88a80]">Không tìm thấy bài viết.</p>
                <Link href="/blogs" className="rounded-full bg-rose-500 px-6 py-3 text-sm font-bold text-white">Quay lại Blog</Link>
            </div>
        );
    }

    const related = [
        ...DUMMY_POSTS.filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug),
        ...DUMMY_POSTS.filter((p) => p.slug !== post.slug && p.categorySlug !== post.categorySlug),
    ].slice(0, 3);

    return (
        <div className="relative bg-[#fbf5f1] text-[#3a2420] selection:bg-rose-200">
            <motion.div className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-rose-400 via-rose-500 to-pink-400" style={{ scaleX }} />
            <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-rose-200/50 blur-[140px]" />

            {/* ================= ĐẦU BÀI ================= */}
            <header className="relative mx-auto max-w-6xl px-4 pb-12 pt-32 sm:px-6">
                <Link href={`/blogs/${post.categorySlug}`} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-bold text-[#6e5249] shadow-sm backdrop-blur transition-colors hover:text-rose-500">
                    ← {post.category}
                </Link>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease }}
                    className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight md:text-6xl"
                >
                    {post.title}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 max-w-3xl text-lg italic leading-relaxed text-[#6e5249]">
                    {post.excerpt}
                </motion.p>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold text-[#6e5249]">
                    <span className="rounded-full bg-white px-4 py-2 shadow-sm">Bạch Thị Thiện Thanh</span>
                    <span className="rounded-full bg-white px-4 py-2 shadow-sm">{readingTime(post)} phút đọc</span>
                    <span className="rounded-full bg-rose-50 px-4 py-2 text-rose-500">{post.category}</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease, delay: 0.2 }}
                    className="mt-10 overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-[0_40px_80px_-35px_rgba(150,50,70,0.55)]"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc(post.image)} alt={post.title} className="aspect-[21/9] w-full object-cover" />
                </motion.div>
            </header>

            {/* ================= NỘI DUNG ================= */}
            <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-12">
                {/* Mục lục */}
                {headings.length > 0 && (
                    <aside className="hidden lg:col-span-3 lg:block">
                        <div className="sticky top-28 flex max-h-[calc(100vh-9rem)] flex-col rounded-[1.75rem] border border-white bg-white/80 p-5 shadow-[0_20px_50px_-30px_rgba(190,80,100,0.45)] backdrop-blur">
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-rose-500">Mục lục</p>
                            <ul className="journey-scroll -mr-2 space-y-0.5 overflow-y-auto pr-2">
                                {headings.map(({ block, index }) => {
                                    // Mục con dạng "4.1 ..." thì thụt lề
                                    const isSub = /^\d+\.\d+/.test(block.text ?? "");
                                    return (
                                    <li key={index} id={`toc-${index}`}>
                                        <a
                                            href={`#muc-${index}`}
                                            className={`block rounded-xl py-1.5 pr-3 text-[13px] leading-snug transition-colors ${isSub ? "pl-6 text-[12px]" : "pl-3"} ${activeHeading === index ? "bg-rose-50 font-bold text-rose-500" : "text-[#8a6f66] hover:text-rose-500"}`}
                                        >
                                            {block.text}
                                        </a>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </aside>
                )}

                <article className={`rounded-[2.5rem] border border-white bg-white/85 px-6 py-10 shadow-[0_30px_70px_-40px_rgba(190,80,100,0.5)] backdrop-blur md:px-12 md:py-14 ${headings.length ? "lg:col-span-9" : "lg:col-span-12"}`}>
                    {post.contentBlocks.map((block, index) => (
                        <ContentBlock key={index} block={block} index={index} />
                    ))}
                </article>
            </div>

            {/* ================= BÀI LIÊN QUAN ================= */}
            {related.length > 0 && (
                <section className="relative mx-auto max-w-6xl px-4 pb-28 sm:px-6">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <div className="mb-3 flex items-center gap-3">
                                <span className="h-px w-10 bg-rose-300" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">Đọc tiếp</span>
                            </div>
                            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Bài viết <span className="font-normal italic text-rose-500">liên quan</span></h2>
                        </div>
                        <Link href="/blogs" className="hidden items-center gap-2 text-sm font-bold text-rose-500 hover:underline sm:flex">
                            Tất cả bài viết →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                        {related.map((p, i) => <BlogCard key={p.slug} post={p} index={i} />)}
                    </div>
                </section>
            )}
        </div>
    );
}

function ContentBlock({ block, index }: { block: PostBlock; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="mb-8 last:mb-0"
        >
            {block.type === "heading" && (
                <h2 id={`muc-${index}`} className="mt-4 scroll-mt-28 border-l-4 border-rose-400 pl-4 text-2xl font-black leading-snug tracking-tight text-[#3a2420] md:text-3xl">
                    {block.text}
                </h2>
            )}

            {block.type === "paragraph" && block.text && (
                <p className="text-justify text-base leading-[1.9] text-[#5d4a44] md:text-lg">
                    {index === 1 ? (
                        <>
                            <span className="float-left mr-3 mt-1 text-6xl font-black leading-[0.8] text-rose-500">{block.text.charAt(0)}</span>
                            {block.text.slice(1)}
                        </>
                    ) : block.text}
                </p>
            )}

            {block.type === "image" && block.url && (
                <figure className="my-4">
                    <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-white shadow-[0_25px_50px_-25px_rgba(150,50,70,0.5)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imgSrc(block.url)} alt={block.caption ?? ""} className="h-auto w-full" />
                    </div>
                    {block.caption && (
                        <figcaption className="mt-3 text-center text-xs italic text-[#a88a80]">— {block.caption}</figcaption>
                    )}
                </figure>
            )}

            {block.type === "list" && (
                <div className="rounded-[1.75rem] border border-rose-100 bg-gradient-to-br from-[#fff8f5] to-rose-50/60 p-6">
                    {block.text && <p className="mb-4 font-bold text-[#3a2420]">{block.text}</p>}
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {block.items?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 rounded-xl bg-white/80 p-3 text-sm font-medium text-[#5d4a44] md:text-[15px]">
                                <span className="mt-[9px] h-px w-3 shrink-0 bg-rose-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {block.type === "quote" && block.text && (
                <div className="relative my-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] px-8 py-10 text-center">
                    <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-rose-400/25 blur-[80px]" />
                    <span className="block font-serif text-6xl leading-none text-rose-300/70">&ldquo;</span>
                    <p className="relative text-xl font-light italic leading-relaxed text-rose-50 md:text-2xl">{block.text}</p>
                    <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-rose-400" />
                </div>
            )}

            {block.type === "end" && (
                <div className="mt-12 border-t border-rose-100 pt-10 text-center">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a88a80]">Cảm ơn bạn đã đọc đến cuối</p>
                    <Link href="/blogs" className="group inline-flex items-center gap-3 rounded-full bg-[#4a1f2a] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-rose-500">
                        Quay lại Blog <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            )}
        </motion.div>
    );
}
