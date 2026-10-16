import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 bắt buộc khai báo các mức chất lượng ảnh được dùng trong dự án
    qualities: [75, 80, 85, 90],
  },
};

export default nextConfig;
