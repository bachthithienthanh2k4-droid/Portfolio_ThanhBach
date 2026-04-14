"use client";

import { DUMMY_POSTS } from "../data/post";
import { BlogCard } from "./blogcard";
import Link from "next/link"; // Nhớ import Link

export default function BlogPage() {
  // 1. Tự động lấy danh sách danh mục duy nhất từ dữ liệu (unique categories)
  // Chúng ta lấy cả name và slug để hiển thị đẹp và link chuẩn
  const categories = Array.from(
    new Map(DUMMY_POSTS.map(post => [post.categorySlug, post.category])).entries()
  ).map(([slug, name]) => ({ slug, name }));

  return (
    <div className="min-h-screen bg-[#fff5f7] py-40 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Góc <span className="text-pink-500 italic">Blog</span> Của Bạn
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nơi chia sẻ những bí kíp học tập, định hướng nghề nghiệp và phong cách sống hiện đại dành cho sinh viên.
        </p>

        {/* Categories Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {/* Nút "Tất cả" luôn dẫn về trang chính */}
          <Link href="/blogs">
            <button className="px-5 py-2 rounded-full border border-pink-500 bg-pink-500 text-white text-sm font-semibold shadow-md">
              Tất cả
            </button>
          </Link>

          {/* Render các nút danh mục từ dữ liệu */}
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/blogs/${cat.slug}`}>
              <button className="px-5 py-2 rounded-full border border-pink-200 bg-white text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-lg transition-all duration-300 text-sm font-medium">
                {cat.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Grid Posts */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_POSTS.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>

      {/* Pagination Simple */}
      <div className="mt-16 flex justify-center items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">1</button>
        <button className="w-10 h-10 rounded-full bg-white text-gray-400 hover:bg-pink-100 flex items-center justify-center transition-colors">2</button>
        <button className="px-4 py-2 rounded-full bg-white text-gray-400 hover:bg-pink-100 transition-colors shadow-sm">Tiếp theo</button>
      </div>
    </div>
  );
}