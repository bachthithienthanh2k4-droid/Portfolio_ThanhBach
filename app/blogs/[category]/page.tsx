"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DUMMY_POSTS } from "@/app/data/post";
import { BlogCard } from "../blogcard";
import { useLang } from "@/app/i18n";
import { getCategories, localizePost, readingTime } from "../utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = use(params);
    const { lang, t } = useLang();
    // Giải mã URL, ví dụ "K%E1%BB%B9%20n%C4%83ng" -> "Kỹ năng"
    const categoryFromUrl = decodeURIComponent(resolvedParams.category);

    // So sánh cả slug (không dấu) và tên (có dấu, cả tiếng Việt lẫn tiếng Anh)
    const filteredPosts = DUMMY_POSTS.filter(
        (post) =>
            post.categorySlug === categoryFromUrl ||
            post.category === categoryFromUrl ||
            post.en?.category === categoryFromUrl
    ).map((post) => localizePost(post, lang));
    const displayName = filteredPosts.length > 0 ? filteredPosts[0].category : categoryFromUrl.replace(/-/g, " ");
    const activeSlug = filteredPosts[0]?.categorySlug ?? categoryFromUrl;
    const categories = getCategories(lang);
    const totalMinutes = filteredPosts.reduce((n, p) => n + readingTime(p), 0);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fbf5f1] px-4 pb-28 pt-32 text-[#3a2420] selection:bg-rose-200 sm:px-6">
            <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-rose-200/50 blur-[140px]" />
            <div className="pointer-events-none absolute top-[45%] -left-60 h-[520px] w-[520px] rounded-full bg-[#fde4dc]/80 blur-[140px]" />

            <div className="relative mx-auto max-w-6xl">
                <Link href="/blogs" className="mb-10 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-bold text-[#6e5249] shadow-sm backdrop-blur transition-colors hover:text-rose-500">
                    ← {t("Tất cả bài viết", "All articles")}
                </Link>

                {/* Tiêu đề chuyên mục */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease }}
                    className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-rose-300" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">{t("Chuyên mục", "Category")}</span>
                        </div>
                        <h1 className="text-5xl font-black capitalize leading-[0.95] tracking-tighter md:text-7xl">
                            <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-[#e8a598] bg-clip-text font-normal italic text-transparent">{displayName}</span>
                        </h1>
                        <p className="mt-4 italic text-[#a88a80]">
                            {t(`Tổng hợp những bài viết về chủ đề ${displayName}.`, `A collection of articles on ${displayName}.`)}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <span className="rounded-2xl border border-white bg-white/80 px-4 py-3 text-sm font-bold shadow-sm">
                            <span className="text-rose-500">{filteredPosts.length}</span> {t("bài viết", filteredPosts.length === 1 ? "article" : "articles")}
                        </span>
                        <span className="rounded-2xl border border-white bg-white/80 px-4 py-3 text-sm font-bold shadow-sm">
                            <span className="text-rose-500">{totalMinutes}</span> {t("phút đọc", "min read")}
                        </span>
                    </div>
                </motion.header>

                {/* Chuyển chuyên mục */}
                <div className="mb-12 flex flex-wrap gap-2">
                    {categories.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/blogs/${c.slug}`}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${c.slug === activeSlug ? "bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md shadow-rose-200" : "border border-white bg-white/80 text-[#6e5249] hover:text-rose-500"}`}
                        >
                            {c.name} <span className={c.slug === activeSlug ? "text-white/70" : "text-[#c4aaa2]"}>{c.count}</span>
                        </Link>
                    ))}
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post, index) => (
                            <BlogCard key={post.slug} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[2rem] border border-white bg-white/80 py-20 text-center shadow-sm">
                        <p className="text-lg italic text-[#a88a80]">
                            {t("Hiện chưa có bài viết nào trong mục", "There are no articles in")} <span className="font-bold text-rose-400">&ldquo;{displayName}&rdquo;</span>
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
