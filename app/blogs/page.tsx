"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { DUMMY_POSTS } from "../data/post";
import { BlogCard } from "./blogcard";
import { useLang } from "../i18n";
import { getCategories, imgSrc, localizePost, readingTime } from "./utils";

const ease = [0.16, 1, 0.3, 1] as const;
const POSTS_PER_PAGE = 6;

// Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu
const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();

export default function BlogPage() {
  const { lang, t } = useLang();
  const categories = getCategories(lang);
  const posts = useMemo(() => DUMMY_POSTS.map((p) => localizePost(p, lang)), [lang]);
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const featured = posts[0];

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return posts.filter((p) => {
      const inCat = active === "all" || p.categorySlug === active;
      const inSearch = !q || normalize(`${p.title} ${p.excerpt} ${p.category}`).includes(q);
      return inCat && inSearch;
    });
  }, [active, query, posts]);

  // Khi xem "Tất cả" và không tìm kiếm, bài nổi bật đã hiện riêng ở trên
  const showFeatured = active === "all" && !query.trim();
  const list = showFeatured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;
  const totalPages = Math.max(1, Math.ceil(list.length / POSTS_PER_PAGE));
  const current = list.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const goTo = (n: number) => {
    setPage(n);
    document.getElementById("danh-sach-bai")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fbf5f1] px-4 pb-28 pt-32 text-[#3a2420] selection:bg-rose-200 sm:px-6">
      {/* Nền trang trí */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-rose-200/50 blur-[140px]" />
      <div className="pointer-events-none absolute top-[40%] -left-60 h-[560px] w-[560px] rounded-full bg-[#fde4dc]/80 blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(190,80,100,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= TIÊU ĐỀ ================= */}
        <header className="mb-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">{t("Góc chia sẻ", "Sharing corner")}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl"
            >
              {t("Blog", "Thanh's")} <br />
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text font-normal italic text-transparent"
                style={{
                  backgroundImage: "linear-gradient(110deg, #f43f5e 20%, #f9a8d4 40%, #fff1f2 50%, #f9a8d4 60%, #f43f5e 80%)",
                  backgroundSize: "200% 100%",
                }}
              >
                {t("của Thanh", "Blog")}
              </motion.span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="border-l-2 border-rose-300 pl-5 italic leading-relaxed text-[#6e5249]">
              {t(
                "Nơi chia sẻ bí kíp học tập, định hướng nghề nghiệp và những trải nghiệm về AI dành cho sinh viên IT.",
                "Study tips, career guidance and hands-on AI experiences for IT students."
              )}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-[1.5rem] border border-rose-100 bg-rose-100">
              {[
                { value: posts.length, label: t("Bài viết", "Articles") },
                { value: categories.length, label: t("Chuyên mục", "Categories") },
                { value: posts.reduce((n, p) => n + readingTime(p), 0), label: t("Phút đọc", "Min read") },
              ].map((s) => (
                <div key={s.label} className="bg-[#fffaf8] px-2 py-4 text-center">
                  <div className="text-2xl font-black text-rose-500">{s.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#a88a80]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </header>

        {/* ================= TÌM KIẾM & CHUYÊN MỤC ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mb-12 flex flex-col gap-4 rounded-[2rem] border border-white bg-white/75 p-3 shadow-[0_20px_50px_-30px_rgba(190,80,100,0.45)] backdrop-blur md:flex-row md:items-center"
        >
          <div className="flex flex-1 items-center gap-3 rounded-full bg-[#fff8f5] px-5 py-3 ring-1 ring-rose-100 focus-within:ring-rose-300">
            <Search size={18} className="text-rose-400" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder={t("Tìm bài viết… (ví dụ: teamwork, AI)", "Search articles… (e.g. teamwork, AI)")}
              className="w-full bg-transparent text-sm text-[#3a2420] outline-none placeholder:text-[#c4aaa2]"
            />
            {query && (
              <button onClick={() => { setQuery(""); setPage(1); }} aria-label={t("Xóa tìm kiếm", "Clear search")} className="text-[#a88a80] hover:text-rose-500">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {[{ slug: "all", name: t("Tất cả", "All"), count: posts.length }, ...categories].map((c) => {
              const isActive = active === c.slug;
              return (
                <button
                  key={c.slug}
                  onClick={() => { setActive(c.slug); setPage(1); }}
                  className={`relative rounded-full px-4 py-2.5 text-xs font-bold transition-colors ${isActive ? "text-white" : "text-[#6e5249] hover:text-rose-500"}`}
                >
                  {isActive && (
                    <motion.span layoutId="blog-cat" className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 shadow-md shadow-rose-200" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative z-10">{c.name} <span className={isActive ? "text-white/70" : "text-[#c4aaa2]"}>{c.count}</span></span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ================= BÀI NỔI BẬT ================= */}
        <AnimatePresence>
          {showFeatured && featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease }}
              className="mb-14"
            >
              <Link
                href={`/blogs/${featured.categorySlug}/${featured.slug}`}
                className="group relative grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] text-white shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)] lg:grid-cols-12"
              >
                <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-400/25 blur-[100px]" />
                <div className="relative overflow-hidden lg:col-span-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc(featured.image)} alt={featured.title} className="h-full min-h-[280px] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4a1f2a]/60" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-rose-500">
                    {t("Bài nổi bật", "Featured")}
                  </span>
                </div>
                <div className="relative flex flex-col justify-center p-8 md:p-12 lg:col-span-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-300">{featured.category}</span>
                  <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-4xl">{featured.title}</h2>
                  <p className="mt-4 leading-relaxed text-rose-100/75">{featured.excerpt}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="text-xs text-rose-100/70">{readingTime(featured)} {t("phút đọc", "min read")}</span>
                    <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-colors group-hover:text-rose-300">
                      {t("Đọc bài viết", "Read article")} <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-12" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= DANH SÁCH BÀI ================= */}
        <div id="danh-sach-bai" className="scroll-mt-32">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              {query.trim() ? t("Kết quả tìm kiếm", "Search results") : showFeatured ? t("Bài viết mới", "Latest articles") : categories.find((c) => c.slug === active)?.name}
              <span className="ml-2 text-rose-400">/ {list.length}</span>
            </h2>
            {active !== "all" && (
              <Link href={`/blogs/${active}`} className="text-xs font-bold text-rose-500 hover:underline">{t("Trang chuyên mục →", "Category page →")}</Link>
            )}
          </div>

          {current.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {current.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white bg-white/80 py-20 text-center shadow-sm">
              <p className="italic text-[#a88a80]">
                {t("Không tìm thấy bài viết phù hợp với", "No articles found matching")} &ldquo;{query}&rdquo;.
              </p>
            </div>
          )}

          {/* Phân trang */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button onClick={() => goTo(page - 1)} disabled={page === 1} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6e5249] shadow-sm transition-colors hover:bg-rose-50 disabled:opacity-30" aria-label={t("Trang trước", "Previous page")}>
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  className={`h-11 w-11 rounded-full text-sm font-black transition-all ${page === n ? "bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md shadow-rose-200" : "bg-white text-[#a88a80] hover:bg-rose-50"}`}
                >
                  {n}
                </button>
              ))}
              <button onClick={() => goTo(page + 1)} disabled={page === totalPages} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6e5249] shadow-sm transition-colors hover:bg-rose-50 disabled:opacity-30" aria-label={t("Trang sau", "Next page")}>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
