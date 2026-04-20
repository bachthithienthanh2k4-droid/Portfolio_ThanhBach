"use client";

import React, { useState, useMemo } from 'react'; // Thêm useState và useMemo
import { DUMMY_POSTS } from "../data/post";
import { BlogCard } from "./blogcard";
import Link from "next/link";

export default function BlogPage() {
  // --- LOGIC PHÂN TRANG ---
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Bạn có thể chỉnh số lượng bài mỗi trang ở đây

  // Tính toán tổng số trang
  const totalPages = Math.ceil(DUMMY_POSTS.length / postsPerPage);

  // Lấy danh sách bài viết cho trang hiện tại
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return DUMMY_POSTS.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage]);

  // Hàm chuyển trang
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Cuộn lên đầu trang blog khi chuyển trang (optional)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- LOGIC DANH MỤC (Giữ nguyên của bạn) ---
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
          <Link href="/blogs">
            <button className="px-5 py-2 rounded-full border border-pink-500 bg-pink-500 text-white text-sm font-semibold shadow-md">
              Tất cả
            </button>
          </Link>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/blogs/${cat.slug}`}>
              <button className="px-5 py-2 rounded-full border border-pink-200 bg-white text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-lg transition-all duration-300 text-sm font-medium">
                {cat.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Grid Posts - Hiển thị currentPosts thay vì DUMMY_POSTS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-16 flex justify-center items-center gap-4">
        {/* Render danh sách số trang */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              currentPage === number
                ? "bg-pink-500 text-white shadow-md"
                : "bg-white text-gray-400 hover:bg-pink-100"
            }`}
          >
            {number}
          </button>
        ))}

        {/* Nút Tiếp theo */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full bg-white text-gray-600 transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-100`}
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
}