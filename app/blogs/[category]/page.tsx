"use client";

import { use } from "react";
import { DUMMY_POSTS } from "@/app/data/post";
import { motion } from "framer-motion";
import { BlogCard } from "../blogcard";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    // 1. Giải nén params từ URL
    const resolvedParams = use(params);
    
    // 2. GIẢI MÃ URL (QUAN TRỌNG): 
    // decodeURIComponent sẽ biến "K%E1%BB%B9%20n%C4%83ng" thành "Kỹ năng"
    const categoryFromUrl = decodeURIComponent(resolvedParams.category);

    // 3. Lọc bài viết thông minh: 
    // So sánh cả với categorySlug (không dấu) VÀ category (có dấu) để chắc chắn tìm thấy
    const filteredPosts = DUMMY_POSTS.filter(
        (post) => 
            post.categorySlug === categoryFromUrl || 
            post.category === categoryFromUrl
    );

    // 4. Lấy tên hiển thị
    const displayName = filteredPosts.length > 0 
        ? filteredPosts[0].category 
        : categoryFromUrl.replace("-", " ");

    return (
        <div className="min-h-screen bg-[#fff5f7] py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header chuyên mục */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-b border-pink-200 pb-8"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Chuyên mục: <span className="text-pink-500 capitalize">{displayName}</span>
                    </h1>
                    <p className="text-gray-500 mt-2 italic">
                        Tổng hợp những bài viết hay nhất về chủ đề {displayName}
                    </p>
                </motion.div>

                {/* Danh sách bài viết hoặc thông báo trống */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {filteredPosts.map((post, index) => (
                            <BlogCard key={index} post={post} />
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white rounded-3xl shadow-sm border border-pink-100"
                    >
                        <div className="text-6xl mb-4">🌸</div>
                        <p className="text-gray-400 text-lg italic">
                            Hiện chưa có bài viết nào trong mục <span className="font-bold text-pink-400">"{displayName}"</span>
                        </p>
                    </motion.div>
                )}
                
            </div>
        </div>
    );
}