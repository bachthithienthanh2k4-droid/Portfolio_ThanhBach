import { DUMMY_POSTS, Post } from "../data/post";

// Ước tính thời gian đọc (~200 từ/phút) dựa trên nội dung bài
export const readingTime = (post: Post) => {
  const text = [
    post.excerpt,
    ...post.contentBlocks.flatMap((b) => [b.text ?? "", ...(b.items ?? [])]),
  ].join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

// Danh sách chuyên mục kèm số bài
export const getCategories = () =>
  Array.from(
    DUMMY_POSTS.reduce((map, p) => {
      const cur = map.get(p.categorySlug);
      map.set(p.categorySlug, { slug: p.categorySlug, name: p.category, count: (cur?.count ?? 0) + 1 });
      return map;
    }, new Map<string, { slug: string; name: string; count: number }>()).values()
  );

// Ảnh có thể là link ngoài (https) hoặc ảnh trong /public có dấu tiếng Việt
export const imgSrc = (src: string) => (/^https?:\/\//.test(src) ? src : encodeURI(src));
