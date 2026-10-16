"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Post } from "../data/post";
import { useLang } from "../i18n";
import { imgSrc, localizePost, readingTime } from "./utils";

export const BlogCard = ({ post: rawPost, index = 0 }: { post: Post; index?: number }) => {
  const { lang, t } = useLang();
  const post = localizePost(rawPost, lang);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Link
        href={`/blogs/${post.categorySlug}/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white/85 p-3 shadow-[0_20px_50px_-30px_rgba(190,80,100,0.45)] backdrop-blur transition-shadow duration-500 hover:shadow-[0_35px_70px_-30px_rgba(244,63,94,0.45)]"
      >
        {/* Ảnh */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc(post.image)}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a]/40 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-rose-500 shadow-sm">
            {post.category}
          </span>
        </div>

        {/* Nội dung */}
        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#a88a80]">{readingTime(post)} {t("phút đọc", "min read")}</p>
          <h3 className="line-clamp-2 text-xl font-black leading-snug tracking-tight text-[#3a2420] transition-colors group-hover:text-rose-500">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[#8a6f66]">{post.excerpt}</p>
          <div className="mt-5 flex items-center gap-2 border-t border-rose-100 pt-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#4a1f2a] transition-colors group-hover:text-rose-500">
            {t("Đọc bài viết", "Read article")}
            <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-12" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
