import { DUMMY_POSTS, Post } from "../data/post";
import type { Lang } from "../i18n";

// Trả về bài viết theo ngôn ngữ (tiếng Anh nếu có bản dịch, ngược lại giữ tiếng Việt)
export const localizePost = (post: Post, lang: Lang): Post =>
  lang === "en" && post.en
    ? {
        ...post,
        title: post.en.title,
        category: post.en.category,
        excerpt: post.en.excerpt,
        contentBlocks: post.en.contentBlocks,
      }
    : post;

// Ước tính thời gian đọc (~200 từ/phút) dựa trên nội dung bài (truyền vào bài đã localize)
export const readingTime = (post: Post) => {
  const text = [
    post.excerpt,
    ...post.contentBlocks.flatMap((b) => [b.text ?? "", ...(b.items ?? [])]),
  ].join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

// Danh sách chuyên mục kèm số bài (tên theo ngôn ngữ)
export const getCategories = (lang: Lang = "vi") =>
  Array.from(
    DUMMY_POSTS.reduce((map, p) => {
      const cur = map.get(p.categorySlug);
      const name = localizePost(p, lang).category;
      map.set(p.categorySlug, { slug: p.categorySlug, name, count: (cur?.count ?? 0) + 1 });
      return map;
    }, new Map<string, { slug: string; name: string; count: number }>()).values()
  );

// Ảnh có thể là link ngoài (https) hoặc ảnh trong /public có dấu tiếng Việt
export const imgSrc = (src: string) => (/^https?:\/\//.test(src) ? src : encodeURI(src));
