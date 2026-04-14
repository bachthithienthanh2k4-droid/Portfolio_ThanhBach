"use client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Cập nhật Interface để bao gồm slug và categorySlug
interface PostProps {
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string; // Thêm dòng này
  slug: string;         // Thêm dòng này
  image: string;
}

export const BlogCard = ({ post }: { post: PostProps }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-pink-100 group cursor-pointer h-full flex flex-col"
    >
      {/* Bao bọc toàn bộ card bằng Link để tối ưu trải nghiệm (UX) */}
      <Link href={`/blogs/${post.categorySlug}/${post.slug}`} className="flex flex-col h-full">
        
        {/* Container Ảnh */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {post.category}
          </div>
        </div>

        {/* Nội dung */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-pink-400 text-xs mb-3">
            <Calendar size={14} className="mr-2" />
            <span>10 Tháng 4, 2026</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-pink-500 font-bold text-sm mt-auto">
            <span className="relative overflow-hidden inline-block">
              Đọc thêm
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};